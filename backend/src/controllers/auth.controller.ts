import { Request, Response } from "express";
import User from "../models/auth.model";

const getHomeRoute = (req: Request, res: Response) => {
  res.send("Api Nicely Working");
};

// Registration User
const userRegistration = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, terms } = req.body;
  console.log(req.body);

  // Validate the request body
  if (!firstName || !lastName || !email || !password || !terms) {
    return res.status(400).send("All fields are required");
  }

  try {
    // Create a new user
    const newUser = new User({ firstName, lastName, email, password, terms });

    // Save the user to the database
    await newUser.save();

    res.status(201).send("User created successfully");
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).send("Internal server error");
    }
  }
};

// Login User
const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validate the request body
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    // Compare the password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export { getHomeRoute, userRegistration, userLogin };
