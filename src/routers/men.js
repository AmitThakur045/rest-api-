const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

router.post("/mens", async (req, res) => {
    try {
        const addingMensData = new MensRanking(req.body);
        console.log(req.body);
        const insertMensData = await addingMensData.save();
        res.status(201).send(insertMensData);
    } catch(err) {
        res.status(400).send(err);
    }
})

router.get("/mens", async (req, res) => {
    try {
        const getMensData = await MensRanking.find({}).sort({"ranking": 1});
        res.send(getMensData);
    } catch(err) {
        res.status(400).send(err);
    }
})

router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMenData = await MensRanking.findById(_id);
        res.send(getMenData);
    } catch(err) {
        res.status(400).send(err);
    }
})

router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, { new : true });
        res.send(updateMen);
    } catch(err) {
        res.status(500).send(err);
    }
})

router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete(_id);
        res.send(deleteMen);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;