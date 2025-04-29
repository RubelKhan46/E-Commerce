import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Check if API key is available
if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY is not set in the environment variables");
}

// Configure Gemini model with the API key
const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.0-flash",  // Changed from modelName to model
  maxOutputTokens: 2048,
});

// Function to get AI responses
const getAIResponse = async (prompt) => {
  try {
    const response = await model.invoke([
      ["human", prompt],
    ]);
    return response.text;  // Changed from response.generations[0][0].text to response.text
  } catch (error) {
    console.error("AI request error:", error);
    throw new Error("Failed to process AI request");
  }
};

export default getAIResponse;
