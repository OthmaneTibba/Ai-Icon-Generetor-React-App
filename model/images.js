const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  image_url: {
    type: String,
    trim: true,
  },
  user_id: {
    type: String,
  },
  share: {
    type: Boolean,
    default: false,
  },
});

const ImageModel = mongoose.model("images", imageSchema);

module.exports = ImageModel;
