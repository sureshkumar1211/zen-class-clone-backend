const { Task } = require("../models");
exports.getAllTasks = async (req, res) => {
  const allTasks = await Task.find();
  return res.status(200).send({ data: allTasks });
};
exports.createTasks = async (req, res) => {
  await Task.create(req.body);
  return res.status(201).send();
};
