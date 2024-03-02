"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createAddress, updateAddress, deleteAddress, getAddressByID, getAddressByUserID } = require('../controlers/address.controlers');
const router = require('express').Router();
// route for get all addresses by userID
router.get("/get-all-address/:id", getAddressByUserID);
// route for get address by address ID
router.get("/get-a-address/:id", getAddressByID);
// route for create a new address
router.post("/add-address", createAddress);
// route for update a existing address
router.put("/update-address/:id", updateAddress);
// route for delete a existing address
router.delete("/delete-address/:id", deleteAddress);
module.exports = router;
