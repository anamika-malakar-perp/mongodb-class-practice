const express = require("express");
const studentController = require("../controllers/student");

const router = express.Router();

router.post('/student', studentController.studentEnrollment);
router.get('/student', studentController.studentFind);
router.put('/student', studentController.studentUpdate);
router.delete('/student', studentController.studentDelete);

module.exports = router;