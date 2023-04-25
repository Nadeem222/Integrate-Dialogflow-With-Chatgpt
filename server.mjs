const dialogflow = require('@google-cloud/dialogflow');
const { webhook, payload, WebhookClient } = require('dialogflow-fulfillment');
const express = requires('express');
const twilio = require('twilio');
const axios = require('axios');

var sessionClient = new dialogflow.SessionsClient();

const {
  configuration,
  OpenAIApi
} = require('openai');
require('dotenv').config();


const configuration = new configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


console.log(configuration.apiKey);
const openai = new openai(configuration);

const textGeneration = async (promp) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return {
      status: 1,
      response: `${response.data.choices[0].text}`
    };
  }

  catch (error) {
    return {
      status: 0,
      response: ``
    }

  }

};

const webApp = express();
const PORT = process.env.PORT || 5003;
webApp.use(express.urlencoded({
  extended: true
}))
webApp.use(express.json());
webApp.use((req , res , next)=>{
  console.log(`Path ${req.path} with Method ${req.method}`);
  next();
});
webApp.get('/', (req , res ) =>{
  res.sendStatus (200);
  res.send('status okay')
});

webApp.post('/dialogflow', async (req , res ) => {
   let id = (res.req.body.session).substr(43);
   console.log(id)

   const agent = new WebhookClient({
    request:req,
    response: res
   });
   async function fallback (){
    let action = req.body.queryResult.action;
    let queryText = req.body.queryResult.queryText;

    if (action === "input.unknown"){
      let result = await textGeneration(queryText);
      if (result.status == 1){
        agent.add(result.response);
      }else{
        agent.add(`sorry,I'm not able to help with that.`)
      }
    }
   }

   function hi(agent){
    console.log(`intent => hi`);
    agent.add('Hi, i am your personal assistant. Tell me Which type of vacation you are looking for')
  }
  let intentMap = new Map();
  intentMap.set("hi", hi);
  intentMap.set('Default Fallback intent' , fallback);
  agent.handleRequest(intentMap);
  
});

webApp.listen(PORT , () => {
  console.log(`server is up and running at http://localhost:${PORT}/`);
});

