const { Session } = require("../models");
exports.getAllSession = async (req, res) => {
  const allSessions = await Session.find();
  return res.status(200).send({ data: allSessions });
};
exports.createSessions = async (req, res) => {
  await Session.create(req.body);
  return res.status(201).send();
};
