import User from "../User.js";
import './config/database.js';
import 'dotenv/config.js';

let users = []

User.insertMany(User)