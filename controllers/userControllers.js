const userModel = require('../models/userModel.js');
const User = require('../models/userModel.js')

exports.home = (req, res) => {
    res.send('Hello World!');
}


//Create new entry in database


exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            throw new Error('Name and email required');
        }


        const userExists = userModel.findOne({ email })

        if (!userExists) {
            throw new Error("User already exists");
        }

        const databaseResult = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: 'User created successfully', databaseResult
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't be created",
        })
    }
}


// Fetch user details from database


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json({
            success:true,
            users
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't be fatched"
        })
    }
}



// Delete user details from database


exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't be deleted"
        })
    }
}


// Edit user details for database

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"User updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't be deleted"
        })
    }
}