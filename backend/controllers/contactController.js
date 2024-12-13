import Contact from "../models/Contact.js";

// Submit contact
export const submitContact = async (req, res) => {
  const { name, email, mobile, city } = req.body;
  try {
    const contact = new Contact({ name, email, mobile, city });
    await contact.save();
    res.status(201).json({ message: "Contact submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all contact
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
