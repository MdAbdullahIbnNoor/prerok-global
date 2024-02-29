import { Request, Response } from "express";

const Address = require("../models/address.model");

// controlers for get all addresses by userID
exports.getAddressByUserID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await Address.find({ userID: id });
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
};

// controlers for get address by address ID
exports.getAddressByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await Address.findById(id);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
}

// controlers for create a new address
exports.createAddress = async (req: Request, res: Response) => {
    try {
        const address = req.body;
        const newAddress = new Address({
            name: address.name,
            phone: address.phone,
            email: address.email,
            address: address.address,
            country: address.country,
            postal_code: address.postal_code,
            district: address.district,
            division: address.division,
            userID: address.userID,
        })
        const result = await newAddress.save();
        res.status(201).send({ success: true, message: "Address Created", data: result })
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
};

// controlers for update a existing address
exports.updateAddress = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const address = req.body;
        const updatedDoc = {
            $set: {
                name: address.name,
                phone: address.phone,
                email: address.email,
                country: address.country,
                address: address.address,
                postal_code: address.postal_code,
                district: address.district,
                division: address.division,
            }
        }
        const result = await Address.updateOne({ _id: id }, updatedDoc);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
}

// controlers for delete a existing address
exports.deleteAddress = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await Address.deleteOne({ _id: id });
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
}