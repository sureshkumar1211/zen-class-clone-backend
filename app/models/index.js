// Enable mongoose connection
require("../config/db.config.js");

// Register models
const User = require("../models/user.model.js");
const Session = require("../models/session.model.js");
const Task = require("../models/task.model.js");
module.exports = {
  User,
  Session,
  Task,
};
