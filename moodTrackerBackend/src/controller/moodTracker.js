const express = require("express");

const router = express();

router.get("/userData", (req, res) => {
  try {
    return res.status(200).send((message = { status: "ok" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
