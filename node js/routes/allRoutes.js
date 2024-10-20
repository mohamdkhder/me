const express = require('express')
const router = express.Router()
const User = require("../models/customerSchema");
var moment = require('moment');


// GET Requst
router.get("/", (req, res) => {
    // result ==> array of objects
    console.log("--------------------------------------------");
    User.find()
        .then((result) => {
            res.render("index", { arr: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
});
// GET Requst

router.get("/user/add.html", (req, res) => {
    res.render("user/add");
});

// edit
router.get("/edit/:id", (req, res) => {
    User.findById(req.params.id)
        .then((result) => {
            res.render("user/edit", { obj: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
});
// edit

// view
router.get("/view/:id", (req, res) => {

    // result ==> object
    User.findById(req.params.id)
        .then((result) => {
            res.render("user/view", { obj: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
});
//view

// POST Requst
router.post("/user/add.html", (req, res) => {
    User
        .create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
});
// post Requst

// search
router.post("/search", (req, res) => {
    const searchtext = req.body.searchtext.trim()
    User
        .find({ $or: [{ fireName: searchtext }, { lastName: searchtext }] })
        .then((result) => {
            res.render("user/search", { arr: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
});
// search

// delete
router.delete("/edit/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => { res.redirect("/"); })
        .catch((err) => {
            console.log(err);
        })
});
// delete

// put request edit
router.put("/edit/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/")
        })
        .catch((err) => {
            console.log(err);
        })
});
// put request edit


module.exports = router