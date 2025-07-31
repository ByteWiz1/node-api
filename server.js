const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const { phone, amount } = req.body;
  console.log('New Request Received:', req.body);
  res.json({ status: 'success',
    message: 'Your order has been received. Please copy and make payment to the (MTN) Account below.',
    momo_number: '0534213402',
    momo_name: 'Samuel Essel',
    amount,
    note: `Please use your recipient number (${phone}) as the reference for the payment.`
  });
});

app.get('/', (req, res) => {
  res.send('Backend is running, DataHub API...');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
});