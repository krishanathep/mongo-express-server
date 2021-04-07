var express = require("express");
var router = express.Router();
var Post = require('../models/post-model');

router.get("/", (req, res) => {
  Post.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

router.get("/:_id", (req, res) => {
  Post.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

router.post("/", (req, res) => {
  var obj = new Post(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อยแล้ว");
  });
});

router.put("/:_id", (req, res) => {
  Post.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อยแล้ว");
  });
});

router.delete("/:_id", (req, res) => {
  Post.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อยแล้ว");
  });
});

module.exports = router;
