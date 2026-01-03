const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  billingCycle: { type: String, required: true },
  startDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Subscription", subscriptionSchema);
