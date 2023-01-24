import { Configuration, OpenAIApi } from "openai";
import { Options } from "./options";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const sanitize = (text: string) => {
  return text.trim();
};

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured.",
      },
    });
    return;
  }

  const resumeText = req.body.text || "";
  const option = req.body.option || "default";

  if (resumeText.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid text",
      },
    });
    return;
  }

  try {
    const isMock = process.env.OPENAI_MOCK === "true";

    if (isMock) {
      res.status(200).json({
        result: `This is a mock response. The text you entered was: ${resumeText}`,
      });
      return;
    }

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(option, resumeText),
      temperature: Options[option].temperature,
      max_tokens: 400,
    });

    res.status(200).json({ result: sanitize(completion.data.choices[0].text) });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

const generatePrompt = (type: keyof typeof Options, resumeText: string) => {
  return `${Options[type].command}

    ${sanitize(resumeText)}`;
};
