const express = require("express");
const { Quote } = require('./models');
const { quoteReview } = require('./models');
const { storeReview } = require('./models');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

app.get("/wise-quotes", async (request, response) => {
    try {
        const quoteArray = await Quote.find({});
        response.json({ quoteArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/quote-reviews", async (request, response) => {
    try {
        const quoteReviewArray = await quoteReview.find({});
        response.json({ quoteReviewArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/store-reviews", async (request, response) => {
    try {
        const storeReviewArray = await storeReview.find({});
        response.json({ storeReviewArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});