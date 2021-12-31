const { Quote } = require("./models");
const { quoteReview } = require("./models");
const { storeReview } = require("./models");

Quote.insertMany(
    {
        name: "",
        origin: "",
        quote: "",
    },
    {
        name: "",
        origin: "",
        quote: "",
    },
    {
        name: "",
        origin: "",
        quote: "",
    },
    {
        name: "",
        origin: "",
        quote: "",
    },
    {
        name: "",
        origin: "",
        quote: "",
    },
)
    .then((newQuote) => {
        console.log(newQuote);
    })
    .catch((error) => {
        console.log(error);
    });

quoteReview.insertMany(
    {
        name: "John",
        review: "'I have been enlightened by great masters.'",
    },
    {
        name: "Bob",
        review: "'I have seen truth beyond my understanding.'",
    },
    {
        name: "Jenny",
        review: "'My life has been completely transformed.'",
    },
    {
        name: "Unknown",
        review: "$!Q^&#^#!%#!@#01001000011001010110110001110000",
    },
    {
        name: "$!@#@#*",
        review: "01001011011010010110110001101100001000000110110101100101$!@%#%Fq",
    },
    {
        name: "Rob",
        review: "I am estatic for the greatness I am witnessing.'",
    },
)
    .then((newQuoteReview) => {
        console.log(newQuoteReview);
    })
    .catch((error) => {
        console.log(error);
    });

storeReview.insertMany(
    {
        name: "John",
        review: "'The Greatest thing I have ever bought.'",
    },
    {
        name: "Bob",
        review: "'I am awestruck by this wisdom.'",
    },
    {
        name: "Jenny",
        review: "'My life has never been better.'",
    },
    {
        name: "Unknown",
        review: "'Someone please help me.'",
    },
    {
        name: "*Error*",
        review: "'Get me out of here, someo@!#&@#^.'",
    },
    {
        name: "Rob",
        review: "'The greatest use of my hard earned money.'",
    },
)
    .then((newStoreReview) => {
        console.log(newStoreReview);
    })
    .catch((error) => {
        console.log(error);
    });