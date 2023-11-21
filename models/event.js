const mongoose = require("mongoose");
const Joi = require("joi");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

// Joi schema for validation
const eventJoiSchema = Joi.object({
  title: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required().greater(Joi.ref("startDate")),
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event, eventJoiSchema };
