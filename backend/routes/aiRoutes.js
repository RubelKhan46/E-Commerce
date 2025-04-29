import express from 'express';
import { 
  generateProductDescription, 
  getProductRecommendations, 
  generateMarketingContent,
  processProductInfo
} from '../controllers/aiController.js';

const airouter = express.Router();

// Simple text request endpoint
airouter.post('/text', processProductInfo);

// Product description generation endpoint
airouter.post('/product-description', generateProductDescription);

// Product recommendations endpoint
airouter.post('/recommendations', getProductRecommendations);

// Marketing content generation endpoint
airouter.post('/marketing', generateMarketingContent);

export default airouter;
