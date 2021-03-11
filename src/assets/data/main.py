
import json
f = open('./complete-list.json', 'r')
data = f.read()
f.close()

states = json.loads(data)
print(states[0])

population = 0
totalDeaths = 0
activeCases = 0
recoveredCases = 0
nonCovid = 0
testPerMillion = 0
deathsPerMillion = 0

for each in states:
  stateName = each['State']
  statePop = int(each['Population'].replace(',', ''))
  population += statePop

  stateDeaths = int(each['TotalDeaths'].replace(',', ''))
  totalDeaths += stateDeaths

  stateActive = each['ActiveCases']
  if (stateActive == 'N/A'): stateActive = '0'
  stateActive = int(stateActive.replace(',', ''))
  activeCases += stateActive

  stateRecovered = each['TotalRecovered']
  if (stateRecovered == 'N/A'): stateRecovered = '0'
  recoveredCases += int(stateRecovered.replace(',', ''))
  print(f'{stateName} - {stateRecovered}')

  nonCovid += (statePop - stateDeaths - stateActive)

  stateTestPerMillion = each['TestPerMillion']
  if (stateTestPerMillion == 'N/A'): stateTestPerMillion = 0
  stateTestPerMillion = int(stateTestPerMillion.replace(',', ''))
  testPerMillion += stateTestPerMillion

  stateDeathsPerMillion = each['DeathPerMillion']
  if (stateDeathsPerMillion == 'N/A'): stateDeathsPerMillion = 0
  stateDeathsPerMillion = int(stateDeathsPerMillion.replace(',', ''))
  deathsPerMillion += stateDeathsPerMillion

print('Total:', population)
print('Total Deaths:', totalDeaths)
print('Total Active Cases:', activeCases)
print('Total Recovered Cases:', recoveredCases)
print('Total Non Covid:', nonCovid)
print('Tests per Million', testPerMillion)
print('Deaths per Million', deathsPerMillion)

