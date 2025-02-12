import User from "../models/User.js";


//Create User
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body); 
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

