import pandas as pd
import json

# json  generator from BBS excel dumps
df = pd.read_excel('Div-30.xls', sheet_name='Sheet1')

i = 1

json_file = open('div-30.txt', 'a')

while(len(df.iloc[i]) > 0):
	division_id = df.iloc[i][0]
	district_id = df.iloc[i][1]
	sub_district_id = df.iloc[i][2]
	locality_id = df.iloc[i][7]
	locality_name = df.iloc[i][8]
	if(locality_id > 0):
		data = {}
		data['division_id'] = int(division_id)
		data['district_id'] = int(district_id)
		data['sub_district_id'] = int(sub_district_id)
		data['locality_id'] = int(locality_id)
		data['locality_name'] = locality_name
		json_data = json.dumps(data)
		json_file.write(json_data)
		json_file.write(',\n')
	i = i + 1

json_file.close()