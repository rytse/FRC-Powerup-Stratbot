TOTAL_TIME = 105;
OBJ_MULTIPLIER = [1, 2, 1, 5];

BOOST = 1
FORCE = 2

dotproduct(a,b) {
	return a.map(function(x,i) {
				return a[i] * b[i];
		}).reduce(function(m,n) { return m + n; });
}

class Agent {
	/** Constructor reads scouting data and meta data */
	constructor(sdata_path = '../data/scoutingdata.json',
					mdata_path = '../data/metadata.json') {
		this.sdata = require(sdata_path);
		this.mdata = require(mdata_path);

		this.prev_state = [0, 0, 0];
		this.last_flipped = [0.0, 0.0, 0.0];
	}
	
	/** Method for checking if any of the thingies have flipped */
	__check_flipped(igd) {
		for (int i = 0; i < 3; i++) {
			if (this.prev_state[i] != igd.state[i]) {
				this.last_flipped[i] = igd.ctime;
			}
		}
	}

	/** Method that checks if we need to do anything */
	update(igd) {
		__check_flipped(igd);
		var r_time = TOTAL_TIME - igd.ctime;

		var aee_margin = [0.0, 0.0, 0.0]
		var our_margin = [0.0, 0.0, 0.0]

		for (int i = 0; i < 3; i++) {
			var l_r_time = TOTAL_TIME - this.last_flipped[i];

			for (int j = 0; j < this.mdata.allies.length; j++) {
				var rep = this.sdata[this.mdata.allies[j]][i];
				if (rep != 0) {
					aee_margin[i] += l_r_time / rep;
				}
			}

			for (int j = 0; j < this.sdata.adversaries.length; j++) {
				var rep = this.sdata[this.mdata.adversaries[j]][i]
				if (rep != 0) {
					aee_margin[i] -= l_r_time / rep;
				}
			}

			aee_margin[i] += igd.num_attacks[i];
			our_margin[i] = r_time / this.sdata[this.mdata.US][i];
		}

		// Account for vault
		aee_margin.push(0)
		our_margin.push(1.0 / this.sdata[this.mdata.US][3]);

		// Optimize
		var outcomes = [0, 0, 0, 0] // 4th for vault 
		for (int i = 0; i < 4; i++) {
			var exp_margin = aee_margin.slice();
			exp_margin[i] += our_margin[i];
			outcomes[i] = dotproduct(exp_margin, OBJ_MULTIPLIER);
		}
		var obj_choice = outcomes.indexOf(Math.max(...outcomes))

		// Return the text to display
		switch (obj_choice) {
			case 0:
				obj_txt = 'NEAR SWITCH';
				break;
			case 1:
				obj_txt = 'SCALE';
				break;
			case 2:
				obj_txt = 'FAR SWITCH';
				break;
			case 3:
				obj_txt = 'VAULT';
				break;
			default:
				obj_txt = 'VAL ER: obj_choice';
		}

		if (powerup_choice > 0) {
			powerup_txt = 'BOOST';
		} else if (powerup_choice == 0) {
			powerup_txt = 'NONE';
		} else {
			powerup_txt = 'FORCE';
		}

		return [obj_txt, powerup_txt]
	}
}
