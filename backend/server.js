require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from your Chrome extension
app.use(cors());
app.use(express.json());

// API route
app.get("/api/data", async (req, res) => {
    try {
        res.json(process.env.GOOGLE_GEMINI_API_KEY);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
