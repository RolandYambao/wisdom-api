// our first collection schema
// store reviews schema
const mongoose = require("mongoose");

const storeReviewSchema = new mongoose.Schema({
    name: String,
    review: String,
});

const storeReview = mongoose.model("Store Review", storeReviewSchema);

module.exports = storeReview;