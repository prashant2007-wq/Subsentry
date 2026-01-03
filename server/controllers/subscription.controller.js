const Subscription = require("../models/Subscription");
exports.createSubscription = async (req, res) => {
  try {
    const { name, price, billingCycle, startDate } = req.body;
    if (!name || !price || !billingCycle) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }
    const userId = req.user.id;
    const subscription = await Subscription.create({
      user: userId,
      name,
      price,
      billingCycle,
      startDate,
    });
    res.status(201).json({
      success: true,
      data: {
        id: subscription._id,
        name: subscription.name,
        price: subscription.price,
        billingCycle: subscription.billingCycle,
        startDate: subscription.startDate,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
exports.getSubscriptions = async (req, res) => {
  try {
    const userId = req.user.id;

    const subscriptions = await Subscription.find({ user: userId }).select(
      "name price billingCycle startDate createdAt"
    );
    res.status(200).json({
      success: true,
      count: subscriptions.length,
      data: subscriptions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
