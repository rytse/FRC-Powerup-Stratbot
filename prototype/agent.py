import numpy as np
from data import ScoutingData, IngameData, TOTAL_TIME

US = 449
#US = 1885

OBJ_MULTIPLIER = [1, 2, 1, 5]

BOOST = 0
FORCE = 1

class Agent:
    def __init__(self, _sdata, _allies, _adversaries):
        # Scouting data (ScoutingData type)
        self.sdata = _sdata 

        # List of allies' team numbers
        self.allies = _allies 

        # List of adversaries' team numbers
        self.adversaries = _adversaries 

        # previous game state: [ near switch, scale, far switch ]
        # 1 has control, 0 is balanced, -1 is opponent has control
        self.prev_state = [0, 0, 0]

        # Timestamp when a balance last flipped (when margin should be zeroed)
        self.last_flipped = [0.0, 0.0, 0.0] 

    def __check_flipped(self, igd):
        for i in xrange(3):
            if self.prev_state[i] != igd.state[i]:
                self.last_flipped[i] = igd.ctime


    def update(self, igd):
        self.__check_flipped(igd)

        # remaining time in match after current time
        r_time = float(TOTAL_TIME - igd.ctime) 

        # Calculate the expected score margins
        aee_margin = [0.0, 0.0, 0.0]  # cube margin if we didnt play at each obj
        our_margin = [0.0, 0.0, 0.0] # cube margin we expect if we play at each obj
        for i in xrange(3):
            l_r_time = float(TOTAL_TIME - self.last_flipped[i]) # remaining after last flipped
            for ally in  self.allies:
                rep = float(self.sdata.fits[ally][i])
                if rep != 0:
                    aee_margin[i] += l_r_time / rep

            for adversary in  self.adversaries:
                rep = float(self.sdata.fits[adversary][i])
                if rep != 0:
                    aee_margin[i] -= l_r_time / rep

            aee_margin[i] += igd.num_attacks[i] # we KNOW we've gotten these
            our_margin[i] = r_time / float(self.sdata.fits[US][i]) # expect to get these

        # Account for vault
        aee_margin.append(0)
        our_margin.append(1.0 / float(self.sdata.fits[US][3]))

        # Optimize
        outcomes = [0, 0, 0, 0] # 4th for vault 
        for i in xrange(4):
            exp_margin = list(aee_margin)
            exp_margin[i] += our_margin[i]
            outcomes[i] = np.dot(exp_margin, OBJ_MULTIPLIER)

        obj_choice = outcomes.index(max(outcomes))
        powerup_choice = BOOST if outcomes[obj_choice] > 0 else FORCE

        return obj_choice, powerup_choice
