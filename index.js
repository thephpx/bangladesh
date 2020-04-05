require('./src/divisions');
require('./src/districts');
require('./src/subdistricts');

module.exports = {
	getDivisions: function(){
		return allDivisions;
	},
	getDivision: function(id){
		for(var i=0; i < allDivisions.length; i++)
		{
			if(allDivisions[i].id == id) return allDivisions[i];
		}
	},
	getAllDistricts: function(){
		return allDistricts;
	},
	getDistricts: function(division_id){
		var districts = [];
		for(var i=0; i < allDistricts.length; i++)
		{
			if(allDistricts[i].division_id == division_id) districts.push(allDistricts[i]);
		}

		return districts;
	},
	getDistrict: function(district_id){
		for(var i=0; i < allDistricts.length; i++)
		{
			if(allDistricts[i].id == district_id) return allDistricts[i];
		}
	},
	getAllSubDistricts: function(){
		return allSubDistricts;
	},
	getSubDistricts: function(district_id){
		var subdistricts = [];
		for(var i=0; i < allSubDistricts.length; i++)
		{
			if(allSubDistricts[i].district_id == district_id) subdistricts.push(allSubDistricts[i]);
		}

		return subdistricts;
	},
	getSubDistrict: function(sub_district_id){
		for(var i=0; i < allSubDistricts.length; i++)
		{
			if(allSubDistricts[i].id == sub_district_id) return allSubDistricts[i];
		}
	}
} 