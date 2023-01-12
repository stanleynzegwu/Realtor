const { Configuration, OpenAIApi } = require('openai');

const generateImage = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const { imgPrompt } = req.body;

  try {
    const response = await openai.createImage({
      prompt: imgPrompt,
      n: 1,
      size: '512x512',
    });
    //console.log(response.data.data.map(({url}) => url))
    const imageUrl = response.data.data[0].url;

    return res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

// const generateImage = async (req, res) => {
//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
//   });
//   const openai = new OpenAIApi(configuration);

//   const { imgPrompt } = req.body;

//   try {
//     const response = await openai.createImage({
//       prompt: imgPrompt,
//       n: 1,
//       size: '512x512',
//     });

//     // Get the URL of the image
//     const imageUrl = response.data.data[0].url;

//     // Send a request to the URL to get the image data
//     const imageResponse = await fetch(imageUrl);
//     const imageData = await imageResponse.arrayBuffer();

//     // Convert the image data to base64
//     const imageBase64 = Buffer.from(imageData, 'binary').toString('base64');

//     // Decode the base64-encoded image
//     const imageBinary = Buffer.from(imageBase64, 'base64');
//     const imageString = imageBinary.toString('binary');
//     // Return the decoded image
//     return res.status(200).json({
//       success: true,
//       data: imageString,
//     });
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.status);
//       console.log(error.response.data);
//     } else {
//       console.log(error.message);
//     }

//     return res.status(400).json({
//       success: false,
//       error: 'The image could not be generated',
//     });
//   }
// };

const generateText = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const { textPrompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: textPrompt,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    const text = response.data.choices[0].text

    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return res.status(400).json({
      success: false,
      error: 'The text could not be generated',
    });
  }
};

module.exports = { generateImage, generateText };