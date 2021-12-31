// our first collection schema
// quote schema
const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    name: String,
    origin: String,
    quote: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;