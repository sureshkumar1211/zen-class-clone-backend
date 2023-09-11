const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    title: { type: String, required: true },
    serialNumber: { type: Number, required: true },
    content: { type: String, required: true },
    taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
    recordedUrl: { type: String },
    preRead: { type: String },
  },
  { timestamps: true }
);

// Export model
module.exports = mongoose.model("Session", SessionSchema);
