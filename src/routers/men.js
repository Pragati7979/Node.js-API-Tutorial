
const express = require("express")
const router = new express.Router()
const MenRanking = require("../models/mens")

//create user
router.post("/mens", async (req, res) => {
    try {
        const add = new MenRanking(req.body)
        console.log(req.body)
        const insertMen = await add.save();
        res.send(insertMen)

    } catch (e) {
        res.status(400).send(e)
    }
})

//get user
router.get("/mens", async (req, res) => {
    try {
        const getMen = await MenRanking.find({}).sort({"ranking":1}) //this sort the res based on Rank
        res.status(200).send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})


//get individual user
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getOneMen = await MenRanking.findById({_id})
        res.status(200).send(getOneMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

//patch individual user (changing name)
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getOneMen = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new : true
        })
        res.status(200).send(getOneMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

//
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const deleteMen = await MenRanking.findByIdAndDelete(_id)
        res.status(200).send(deleteMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router