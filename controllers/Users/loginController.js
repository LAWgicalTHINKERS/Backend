//For Register 
const registeredUsers = [];
export const register = (req, res) => {
  try {
    // Get user data from the request body
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      accountType,
      phoneNo,
    } = req.body;

    // Validate user data (you can add more validation here)
    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !password ||
      !accountType ||
      !phoneNo
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Store the user in the database (in-memory database for this example)
    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
      accountType,
      phoneNo,
    };
    registeredUsers.push(user);

    // Return a success response
    return res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// For Login 
export const login = (req, res) => {
  try {
    // Get user data from the request body
    const { emailAddress, password, accountType } = req.body;

    // Validate user data (you can add more validation here)
    if (
      !emailAddress ||
      !password ||
      !accountType 
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Return a success response
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
