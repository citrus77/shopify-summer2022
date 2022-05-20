import { Configuration, OpenAIApi } from 'openai';

const apiKey = process.env.REACT_APP_OPENAI_KEY;
const configuration = new Configuration({
    apiKey,
});
const openai = new OpenAIApi(configuration);

const callApi = async (prompt, engine) => {
    try {
        const data = {
            prompt,
            temperature: 0.9,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }

        const response = await openai.createCompletion(engine, data);

        if (response) {
            return response.data.choices[0].text;
        } else {         
            return 'Error';
        }; 
    } catch (error) {
        console.error(error);
    };
}; 

export default callApi;