import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Forward the request to your automation webhook
    const response = await axios.post('https://webhook.site/test', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    res.status(200).json({
      success: true,
      data: response.data,
      message: 'Request processed successfully'
    });

  } catch (error) {
    console.error('Process API error:', error);
    
    res.status(500).json({
      success: false,
      error: error.response?.data?.message || 'Failed to process request'
    });
  }
}