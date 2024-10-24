require('dotenv').config();
const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const cors = require('cors');
const app = express();
expressOasGenerator.init(app);
const userSectionRoutes = require('./routes/userSectionRoutes');

app.use(express.json());
app.use(cors());

// Define specific base routes for each service
app.use('/user-sections', userSectionRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
