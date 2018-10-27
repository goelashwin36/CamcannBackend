const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

    router.get("/", (req, res) => {
        res.send("Router Working");
    });

    router.post("/submitContactData", (req, res) => {
    const { name, email, message, phone} = req.body;
    const ContactInfo = {
        name, email, message, phone
    }
    console.log(ContactInfo);
    new Contact(ContactInfo).save((err, resp) => {
        if (err) {
            res.json({
                status: "failed",
                error: err,
            });
        } else {
            res.json({
                status: resp,
                error: err,
            });
        }
    });
});

module.exports = router;