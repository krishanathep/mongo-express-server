var express = require("express");
var router = express.Router();
var Attractions = require("../models/attractions-model");

// GET ALL DATA
router.get("/", (req, res) => {
    Attractions.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET DATA FROM ID
router.get("/:_id", (req, res) => {
    Attractions.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST DATA
router.post("/", (req, res) => {
  var obj = new Attractions(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อยแล้ว");
  });
});

// PUT DATA
router.put("/:_id", (req, res) => {
    Attractions.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE DATA
router.delete("/:_id", (req, res) => {
    Attractions.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อยแล้ว");
  });
});

module.exports = router;