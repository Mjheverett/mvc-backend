const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

router.get("/", async (req, res, next) => {
    console.log("blog route");
    const blogData = await blogModel.getAllEntries();
    
    res.json(blogData).status(200);
});

router.get("/:post_id?", async (req, res) => {
    const blogData = await blogModel.getOneEntry(req.params.slug);
    
    res.json(blogData).status(200);
});

module.exports = router;