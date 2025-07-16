const pool = require('../db');
const path = require('path');

// Create complaint (with optional image)
exports.createComplaint = (req, res) => {
  const { user_id, title, description } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!user_id || !title || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = `
    INSERT INTO complaints (user_id, title, description, image)
    VALUES (?, ?, ?, ?)
  `;

  pool.query(query, [user_id, title, description, image], (err) => {
    if (err) {
      console.error("❌ Failed to insert complaint:", err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json({ message: '✅ Complaint submitted successfully!' });
  });
};

// ✅ Get all complaints
exports.getAllComplaints = (req, res) => {
  const query = `SELECT * FROM complaints ORDER BY created_at DESC`;

  pool.query(query, (err, results) => {
    if (err) {
      console.error("❌ Failed to fetch complaints:", err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json(results);
  });
};

// ✅ Update complaint status
exports.updateComplaintStatus = (req, res) => {
  const complaintId = req.params.id;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  const query = `UPDATE complaints SET status = ? WHERE id = ?`;

  pool.query(query, [status, complaintId], (err) => {
    if (err) {
      console.error("❌ Failed to update complaint status:", err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json({ message: '✅ Complaint status updated!' });
  });
};
