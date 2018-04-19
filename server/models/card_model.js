const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({});

const Card = new mongoose.model("Card", cardSchema);

export default Card;
