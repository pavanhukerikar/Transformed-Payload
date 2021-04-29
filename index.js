const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const indexControlller = require('./controller/index.controller');

app.use(express.json());
app.post('/payload', (req, res) => {
    try{
        const {body} = req;
        let payload = body.payload
        let refData = body.referenceData
        
        if (Object.keys(body).length == 0 || Object.keys(payload).length == 0 || Object.keys(refData).length == 0){
            res.status(400).json({message: "Please enter payload & refdata"});
        }
        let data = indexControlller.modifyData(payload, refData)
        res.status(200).send(data)

    }catch (error) {
        console.log("Error in modifyData", error)
        res.status(500).json({message: "Something went wrong", detail: error});
    } 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})