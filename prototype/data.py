import numpy as np
import pandas as pd

TOTAL_TIME = 105.0 # total teleop time (seconds), not including endgame

class ScoutingData:
    def __clean_indata(self, raw):
        cleaned = raw[(raw['Dead'] == 0) & (raw['No show'] == 0)]
        df = cleaned[['Team Number', 'Match Number', 'Vault cubes', 'Own switch delivered', 'Opp. Switch delivered', 'Scale delivered']].copy()  
        df.columns = ['TeamNum', 'MatchNum', 'Vault', 'NearSwitch', 'FarSwitch', 'Scale']
        df = df[['TeamNum', 'MatchNum', 'NearSwitch', 'FarSwitch', 'Scale', 'Vault']]
        return df

    def __init__(self, fn = "../data/Greater DC Data.csv"):
        raw = pd.read_csv(fn)
        df = self.__clean_indata(raw)

        self.fits = {} 

        for team in df['TeamNum']:
            tdata = df[df["TeamNum"] == team]
            M = tdata.ix[:,2:].as_matrix()
            M = np.nan_to_num(M)
            np.savetxt("matrix.csv", M, delimiter = ",")
            x = [TOTAL_TIME] * M.shape[0]
            fit = np.linalg.lstsq(M, x)[0]
            self.fits[team] = fit

class IngameData:
    def __init__(self):
        # current game state: [ near switch, scale, far switch ]
        # 1 has control, 0 is balanced, -1 is opponent has control
        self.state = [0, 0, 0]

        # num cubes in [near, scale, far, vault]
        self.num_attacks = [0, 0, 0, 0]

        # level of [ [our boost, their boost], [our force, their force] ] used so far
        self.powerups = [[0, 0], [0, 0], [0, 0]]
        
        # Current time
        self.ctime = 0
