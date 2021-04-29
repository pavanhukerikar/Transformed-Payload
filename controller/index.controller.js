const modifyData = (payload, refData) => {
    try {
        return getPayloadValue(payload, refData);
    } catch (error) {
        console.log("Error in controller file", error)
        throw new Error(error.message)
    }
}

function getPayloadValue(payload, refData) {
    payload.value.forEach(val => {
        if(val.valueType === 'string'){
            console.log(val);
            replaceValue(val, refData);
        } else {
            getPayloadValue(val, refData);
        }
    });
    return payload
}

function replaceValue(obj, refData) {
    if (obj.value.includes('REF')) { 
        // logic without using javascript inbuild function
        let splitValue1 = obj.value.split("{");
        let splitValue2 = splitValue1[1].split("}");
        obj.value = `${refData[splitValue2[0]]}${splitValue2[1]}`;

        
        // another logic using javascript inbuild function 
        // output will be  "value": "sip:50002312344314@ims.mnc001.mcc505.3gppnetwork.org"
        /* let objectValue = obj.value;
        let objectRef = objectValue.match(/([^}{]+)(?=})/g);
        objectValue = objectValue.replace(objectRef[0], refData[objectRef[0]]);
        obj.value = objectValue.replace(/[{}]/g, ""); */

        /*console.log("splitValue1");
        console.log(splitValue1);
        console.log("splitValue2");
        console.log(splitValue2);
        console.log(refData[splitValue2[0]]); */
        console.log(obj.value)
    }
}
module.exports = {modifyData};