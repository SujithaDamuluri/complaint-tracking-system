const express = require('express');
const router = express.Router();
const multer = require('multer');
const complaintController = require('../controllers/complaintController');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store in /uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Apply multer middleware to handle multipart/form-data
router.post('/', upload.single('image'), complaintController.createComplaint);
router.get('/', complaintController.getAllComplaints);
router.put('/:id/status', complaintController.updateComplaintStatus);

module.exports = router;
