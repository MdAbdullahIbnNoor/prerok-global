const User = require("../models/user.model");

//controler for get user by his email
exports.getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        // const user = req.user;
        // if (user.email !== email) {
        //     return res.status(401).send({ message: "unauthorized access" });
        // }
        const userData = await User.findOne({ email });
        res.status(200).send(userData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//controler for create a new user
exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const email = req.body.email;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).send({ message: "User found" });
        }
        const newUser = new User({
            name: userData.name,
            image: userData.image,
            email: userData.email
        })
        const dbResponse = await newUser.save();
        res.status(201).send(dbResponse)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

//controler for update a existing user
exports.updateUser = async (req, res) => {
    try {
        // const user = req.user;
        const email = req.params.email;
        // if (user.email !== email) {
        //     return res.status(401).send({ message: "unauthorized access" });
        // }
        const updatedDoc = {
            $set: {
                email: req.body.email,
                name: req.body.name,
                image: req.body.image,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                mobileNumber: req.body.mobileNumber,
                country: req.body.country,
                state: req.body.state,
                postcode: req.body.postcode,
                division: req.body.division,
                district: req.body.district,
                upazilla: req.body.upazilla,
                village: req.body.village,
                roadNumber: req.body.roadNumber,
            }
        };
        const result = await User.updateOne({ email }, updatedDoc);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//controler for update role of a existing user
exports.updateRole = async (req, res) => {
    try {
        const data = req.body;
        // const user = req.user;
        // const email = req.params.email;
        // if (user.email !== email) {
        //     return res.status(401).send({ message: "unauthorized access" });
        // }
        const updatedDoc = {
            $set: {
                role: data?.role
            }
        };
        const result = await User.updateOne({ email: data?.email }, updatedDoc);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}