# Exercise - To get payload and convert into required format
# Introduction
This a nodejs application for transfrom the data based on Required condition. which is made using express js
# How to setup code
`git clone https://github.com/pavanhukerikar/Transformed-Payload.git`

`cd Transformed-Payload`
# Install dependencies
`npm install`
# How to run
change **PORT** from **.env**  file (optional)

`node index.js`

This will run node server at localhost:3000. Once server started open postman and using POST method you can access the URL http://localhost:3000/payload

# How to Test using Mocha & Chai
`npm test`

[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")

# Request Payload
`{"payload":{"name":"subscriber","valueType":"array","value":[{"name":"MN","valueType":"string","value":"{REF_MSISDN}"},{"name":"IM","valueType":"string","value":"{REF_IMSI}"},{"name":"NT","valueType":"string","value":"G"},{"name":"privateUser","valueType":"array","value":[{"name":"privateUserId","valueType":"string","value":"{REF_IMSI}@ims.mnc001.mcc505.3gppnetwork.org"},{"name":"roamingAllowed","valueType":"string","value":"false"},{"name":"publicUser","valueType":"array","value":[{"name":"publicIdValue","valueType":"string","value":"sip:{REF_IMSI}@ims.mnc001.mcc505.3gppnetwork.org"},{"name":"implicitRegSet","valueType":"string","value":"1"},{"name":"serviceProfileId","valueType":"string","value":"{REF_SERVPROFID}"},{"name":"testUser","valueType":"array","value":[{"name":"testIdValue","valueType":"string","value":"sip:{REF_IMSI}@ims.mod-connect.com"},{"name":"implicitRegSet","valueType":"string","value":"2"}]}]},{"name":"userImsi","valueType":"string","value":"{REF_IMSI}"}]},{"name":"PO","valueType":"string","value":"0"}]},"referenceData":{"REF_MSISDN":"0406679321","REF_IMSI":"50002312344314","REF_SERVPROFID":"2"}}`

# Desired Output
`{"name":"subscriber","valueType":"array","value":[{"name":"MN","valueType":"string","value":"0406679321"},{"name":"IM","valueType":"string","value":"50002312344314"},{"name":"NT","valueType":"string","value":"G"},{"name":"privateUser","valueType":"array","value":[{"name":"privateUserId","valueType":"string","value":"50002312344314@ims.mnc001.mcc505.3gppnetwork.org"},{"name":"roamingAllowed","valueType":"string","value":"false"},{"name":"publicUser","valueType":"array","value":[{"name":"publicIdValue","valueType":"string","value":"sip:50002312344314@ims.mnc001.mcc505.3gppnetwork.org"},{"name":"implicitRegSet","valueType":"string","value":"1"},{"name":"serviceProfileId","valueType":"string","value":"2"},{"name":"testUser","valueType":"array","value":[{"name":"testIdValue","valueType":"string","value":"sip:50002312344314@ims.mod-connect.com"},{"name":"implicitRegSet","valueType":"string","value":"2"}]}]},{"name":"userImsi","valueType":"string","value":"50002312344314"}]},{"name":"PO","valueType":"string","value":"0"}]}`

# Screenshots
[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/image1.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/image1.png "Response")

[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/image2.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/image2.png "Response")

[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/jsonEditorResponseScreen.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/jsonEditorResponseScreen.png "Response")

[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/response2.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/response2.png "Response")

## Testcases
[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCases.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCases.png "Response")

## Test cases result
[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")

## Validations
[![Response](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")](https://github.com/pavanhukerikar/Transformed-Payload/blob/master/screenshots/testCaseResult.png "Response")