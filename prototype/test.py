from agent import Agent, US
from data import ScoutingData, IngameData, TOTAL_TIME

bot = Agent(ScoutingData(), [225, 1915], [1111, 1731, 4456])
igd = IngameData()

print(bot.update(igd))

igd.ctime = 30
igd.state = [0, 0, 0]
print(bot.update(igd))
