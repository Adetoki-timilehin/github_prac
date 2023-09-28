const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "get all users" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "create one user" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `upadte user with id: ${req.params.id}` });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get user with id: ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete user with id: ${req.params.id}` });
});

module.exports = router;
