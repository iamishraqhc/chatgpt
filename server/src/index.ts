const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});

const openAI = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req: any, res: any) => {
    const { prompt } = req.body;
    console.log(`Query is: ${prompt}`)
    const completion = await openAI.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
