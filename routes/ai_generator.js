const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const dotenv = require("dotenv");
const aiGeneretor = express.Router();
const cors = require("cors");
aiGeneretor.use(cors());

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

aiGeneretor.post("/api/generate", async (req, res) => {
  try {
    const { prompt, color, style } = req.body;
    const newPrompt = `modern icon for ${prompt} application like applications in google play store and ios store with no text ${color} ${style} iridescent material, symmentrical , 3D render  , centred , gradient , dark background , circular`;
    const response = await openai.createImage({
      prompt: newPrompt,
      n: 1,
      size: "512x512",
    });
    const createdImage = response.data.data[0].url;
    return res.status(200).json({
      results: {
        message: "image created successfully",
        image: createdImage,
        credits: 0,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

module.exports = aiGeneretor;
