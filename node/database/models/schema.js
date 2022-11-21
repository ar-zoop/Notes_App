const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const noteSchema = new Schema({
    title: String,
    description: { type: String, require: true, default: "hello" }
});

const schema = new model("notes", noteSchema);

module.exports = schema;


