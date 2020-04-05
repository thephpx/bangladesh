# Bangladesh Division, District & Sub-District JSON data

This is a simple npm module that exports couple of methods that represents divisions, districts and sub-districts of Bangladesh.

The methods available are as follows - 

1. getDivisions()
2. getDivision(division_id)
3. getDistricts(division_id)
4. getDistrict(district_id)
5. getSubDistricts(district_id)
6. getSubDistrict(sub_district_id)


## Usage:

Create a new folder then install the npm package:

`npm i @thephpx/bangladesh`

Once package is installed create a test.js file then require the file into a constant inside the test.js file.

`const bangladesh = require('@thephpx/bangladesh')`

Now you can call methods as such:

`console.log(bangladesh.getDivisions());`

