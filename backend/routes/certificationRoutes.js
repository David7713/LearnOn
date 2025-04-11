const express = require("express");
const certificationController = require("../controllers/certificationController");
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get("/certifications", authenticate, certificationController.getUserCertifications);
router.post("/certifications", authenticate, certificationController.addUserCertification);

module.exports = router;