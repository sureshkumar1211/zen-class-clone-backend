const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["submitted", "completed", "bending"],
    default: "bending",
    required: true,
  },
  taskDocumentUrl: { type: String, required: true },
  taskScore: { type: Number },
});

// Export model
module.exports = mongoose.model("Task", TaskSchema);
