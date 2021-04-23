import User from "../models/User";
import httpErrors from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {registerValidator, loginValidator} from '../utils/validation'

export const register = async (req, res) => {

  // //check if all fields are available
  // if (!firstName || !lastName || !email || !password) {
  //   res.status(400).json({ message: "Please provide all fields." });
  //   return;
  // }

  const result = await registerValidator.validateAsync(req.body)
  const { firstName, lastName, email, password } = result;


  // check if email is already in the database
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    res.status(400).json({ message: "Email already exists." });
    return;
  }

  //Hash the password
  // const salt = await bcrypt.gensalt(12) {using this? replace 12 with salt in the hashedPassword}
  const hashedPassword = await bcrypt.hash(password, 12);

  //create new user
  //   const user = new User ({firstName, lastName, email, password })
  //   const newUser = await user.save();

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ user });
};

export const login = async (req, res) => {

  //check if all fields are availabe
  // if (!email || !password) {
  //   res
  //     .status(httpErrors.BadRequest)
  //     .json({ massage: "Please enter all fields." });
  //   return;
  // }

  const result= await loginValidator.validateAsync(req.body)
  const { email, password } = result;


  //check if email is already in the database
  let user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "Invalid credentials." });
    return;
  }

  // check for password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid credentials." });
    return;
  }

  //generate token
  const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });

  res.status(200).json({ token });
};

export const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  //split token based on the space
  token = token.split(" ")[1];

  if (token) {
    const decodedToken = jwt.verify(token, "123456789");
    req.user = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "invalid token" });
  }
};
