import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

const US = 1;
const NEUTRAL = 0;
const THEM = -1;

TOTAL_TIME = 105;
OBJ_MULTIPLIER = [1, 2, 1, 5];

BOOST = 1;
FORCE = 2;

TMP_STR = 'imported stuff';

function dotproduct(a,b) {
	var c = 0;
	for (var i = 0; i < a.length; i++) {
		c += a[i] * b[i];
	}
	return c;
}

class Agent {
	// Constructor reads scouting data and meta data
	constructor() {
		this.sdata = require('./scoutingdata.json');
		this.mdata = require('./metadata.json');

		this.prev_state = [0, 0, 0];
		this.last_flipped = [0.0, 0.0, 0.0];
	}
	
	// Method for checking if any of the thingies have flipped
	__check_flipped(igd) {
		for (var i = 0; i < 3; i++) {
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

		for (var i = 0; i < 3; i++) {
			var l_r_time = TOTAL_TIME - this.last_flipped[i];

			for (var j = 0; j < this.mdata.allies.length; j++) {
				var rep = this.sdata[this.mdata.allies[j]][i];
				if (rep != 0) {
					aee_margin[i] += l_r_time / rep;
				}
			}

			for (var j = 0; j < this.sdata.adversaries.length; j++) {
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
		for (var i = 0; i < 4; i++) {
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
export default class StratbotUI extends Component {
	constructor(props) {
		super(props);

		this.state = {
			far_switch: NEUTRAL,
			scale: NEUTRAL,
			near_switch: NEUTRAL,
			obj_text: TMP_STR,
			powerup_text: 'Use {powerup}'
		}

		this.agent = new Agent();
	}

	them_vault() {
		rep = 'something else!';
		this.setState( {obj_text: rep} );
		this.setState( {powerup_text: this.agent.sdata[449][0]} );
	}
	them_boost() {
	}
	them_force() {
	}
	us_vault() {
	}

	fs_u() {
		rep = 'tmp';
		this.setState( {powerup_text: rep} );
	}
	fs_n() {
	}
	fs_t() {
	}

	s_u() {
	}
	s_n() {
	}
	s_t() {
	}

	ns_u() {
	}
	ns_n() {
	}
	ns_t() {
	}


	render() {
		tmpBtn = () => {}
		btmpBtn = () => {}

		return (
			<View style={{flexDirection: 'column', flex:1}}>
				<View style={{flexDirection: 'row'}}>

					<View style={{flexDirection: 'column'}}>
						<Button
							onPress={this.them_vault.bind(this)}
							title='Them Vault'
							color='darkblue'
						/>

						<Button
							onPress={this.them_boost.bind(this)}
							title='Them Boost'
							color='green'
						/>

						<Button
							onPress={this.them_force.bind(this)}
							title='Them Force'
							color='darkgreen'
						/>

						<Button
							onPress={this.us_vault.bind(this)}
							title='Us Vault'
							color='darkred'
						/>
					</View>

					<View style={{flexDirection: 'column', justifyContent: 'space-between'}}>

						<Text>Far Switch</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.fs_u.bind(this)}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.fs_n.bind(this)}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.fs_t.bind(this)}
								title='Them'
								color='blue'
							/>
						</View>

						<Text>Scale</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.s_u.bind(this)}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.s_n.bind(this)}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.s_t.bind(this)}
								title='Them'
								color='blue'
							/>
						</View>

						<Text>Near Switch</Text>
						<View style={{flexDirection: 'row'}}>
							<Button
								onPress={this.ns_u.bind(this)}
								title='Us'
								color='red'
							/>

							<Button
								onPress={this.ns_n.bind(this)}
								title='Balanced'
								color='grey'
							/>

							<Button
								onPress={this.ns_t.bind(this)}
								title='Them'
								color='blue'
							/>
						</View>
					</View>
				</View>

				<View style={{flexDirection: 'row'}}>
						<View style={{backgroundColor: 'violet'}}>
							<Text>{this.state.obj_text}</Text>
						</View>
						<Button
							onPress={tmpBtn}
							title='Reset'
							color='black'
						/>
						<View style={{backgroundColor: 'violet'}}>
							<Text>{this.state.powerup_text}</Text>
						</View>
				</View>
			</View>
		);
	}
}
