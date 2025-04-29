import getAIResponse from '../middleware/aiRequest.js';
import productModel from '../models/productModel.js';

// Simple text request handler
export const processProductInfo = async (req, res) => {

  try {
    const getProducts  = async () => {try {
        const products = await productModel.find({});
        return products;
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
      };}
    const products = await getProducts();
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: "Text input is required" });
    }
    const prompt = `You are an AI assistant for an e-commerce platform. this are the products available: ${products}
    answer questions from ${text}`;
    const response = await getAIResponse(prompt);
    
    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error processing text request:", error);
    return res.status(500).json({ error: "Failed to process text request" });
  }
};

// Generate product descriptions based on input
export const generateProductDescription = async (req, res) => {
  try {
    const { productName, category, features } = req.body;
    
    if (!productName) {
      return res.status(400).json({ error: "Product name is required" });
    }
    
    const prompt = `Generate a compelling product description for an e-commerce website. 
    Product name: ${productName}
    ${category ? `Category: ${category}` : ''}
    ${features ? `Key features: ${features}` : ''}
    The description should be engaging, highlight benefits, and be under 200 words.`;
    
    const response = await getAIResponse(prompt);
    
    return res.status(200).json({ description: response });
  } catch (error) {
    console.error("Error generating product description:", error);
    return res.status(500).json({ error: "Failed to generate product description" });
  }
};

// Get AI-powered product recommendations
export const getProductRecommendations = async (req, res) => {
  try {
    const { userPreferences, recentViews, budget } = req.body;
    
    const prompt = `Based on the following information, suggest 5 product recommendations for an e-commerce customer:
    ${userPreferences ? `User preferences: ${userPreferences}` : ''}
    ${recentViews ? `Recently viewed items: ${recentViews}` : ''}
    ${budget ? `Budget range: ${budget}` : ''}
    Format the response as a JSON array of product types with brief explanations.`;
    
    const response = await getAIResponse(prompt);
    
    return res.status(200).json({ recommendations: response });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return res.status(500).json({ error: "Failed to generate recommendations" });
  }
};

// Generate personalized marketing content
export const generateMarketingContent = async (req, res) => {
  try {
    const { campaign, target, tone } = req.body;
    
    if (!campaign) {
      return res.status(400).json({ error: "Campaign details required" });
    }
    
    const prompt = `Create marketing content for an e-commerce platform:
    Campaign focus: ${campaign}
    ${target ? `Target audience: ${target}` : ''}
    ${tone ? `Tone: ${tone}` : 'Tone: Professional and engaging'}
    Generate a compelling headline and a short paragraph that can be used for email or social media marketing.`;
    
    const response = await getAIResponse(prompt);
    
    return res.status(200).json({ content: response });
  } catch (error) {
    console.error("Error generating marketing content:", error);
    return res.status(500).json({ error: "Failed to generate marketing content" });
  }
};
