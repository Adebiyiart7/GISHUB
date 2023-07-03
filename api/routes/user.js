const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const me = require("../controllers/user/me");
const auth = require("../middleware/auth");
const update = require("../controllers/user/update");
const uploadAvatar = require("../controllers/user/uploadAvatar");

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, me);
router.put("/update", auth, update);
router.post("/upload-avatar", auth, uploadAvatar);

module.exports = router;
