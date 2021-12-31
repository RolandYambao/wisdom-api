// our first collection schema
// quote reviews schema
const mongoose = require("mongoose");

const quoteReviewSchema = new mongoose.Schema({
    name: String,
    review: String,
});

const quoteReview = mongoose.model("Quote Review", quoteReviewSchema);

module.exports = quoteReview;