const { Event, eventJoiSchema } = require("../models/event");

exports.createEvent = async (req, res) => {
  try {
    const { error, value } = eventJoiSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const event = new Event(value);
    const response = await event.save();

    res.status(201).json({
      event: {
        _id: response._id,
        title: response.title,
        startDate: response.startDate,
        endDate: response.endDate,
      },
      message: "Event created!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
