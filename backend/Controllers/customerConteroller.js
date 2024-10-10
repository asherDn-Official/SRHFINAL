const Customer = require("../Models/customer");

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { customerName, customerEmail, customerMobile, usedAction } =
      req.body;

    // Check for existing email
    const existingCustomer = await Customer.findOne({ customerEmail });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newCustomer = new Customer({
      customerName,
      customerEmail,
      customerMobile,
      usedAction,
    });

    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const { customerName, customerEmail, customerMobile, usedAction } =
      req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { customerName, customerEmail, customerMobile, usedAction },
      { new: true, runValidators: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);

    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
