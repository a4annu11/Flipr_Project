import nodemailer from "nodemailer";
import Subscription from "../models/Subscription.js";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "solankianurag2000@gmail.com",
    pass: "zdeq gkbo plvo pzxc",
  },
});

// Send welcome email function
const sendWelcomeEmail = async (email) => {
  const mailOptions = {
    from: '"Flipr Project" <solankianurag2000@gmail.com>',

    to: email,
    subject: "Welcome to Our Newsletter!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f0f0f0;">
        <h2 style="color: #333;">Thank you for subscribing to our newsletter!</h2>
        <p style="font-size: 16px; color: #555;">
          We're thrilled to have you on board. You'll now receive the latest updates, promotions, and much more.
        </p>
        <p style="font-size: 16px; color: #555;">
          If you have any questions, feel free to <a href="mailto:contact@ourcompany.com">contact us</a>.
        </p>
        <p style="font-size: 16px; color: #555;">
          Best regards,<br>
          The Team at Flipr Project
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully!");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

// Subscribe to newsletter
export const subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription)
      return res.status(400).json({ message: "Already subscribed" });

    const subscription = new Subscription({ email });
    await subscription.save();

    // Send welcome email
    await sendWelcomeEmail(email);

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// import Subscription from "../models/Subscription.js";

// // Subscribe to newsletter
// export const subscribe = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const existingSubscription = await Subscription.findOne({ email });
//     if (existingSubscription)
//       return res.status(400).json({ message: "Already subscribed" });

//     const subscription = new Subscription({ email });
//     await subscription.save();
//     res.status(201).json({ message: "Subscribed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Get all subscriptions
export const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
