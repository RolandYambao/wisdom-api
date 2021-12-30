const { Quote } = require("./models");

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
    })