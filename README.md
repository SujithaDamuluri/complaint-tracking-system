# 🛠️ Complaint Tracking System

A modern web-based system for tracking citizen complaints, built with **Node.js**, **MySQL**, and **HTML/CSS**.

---

## 🚀 Features

- Citizens can submit complaints
- Admins and officers can view and update complaint statuses
- MySQL database with 3 roles: citizen, officer, admin
- Fully working backend and interactive frontend
- Simple and clean UI with real-time updates

---

## 🏗️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express)
- **Database**: MySQL
- **Tools**: dotenv, cors, nodemon

---

## 🔧 Installation Guide

Follow these steps to run the project locally:

### 📁 1. Clone the Repository

```bash
git clone https://github.com/SujithaDamuluri/complaint-tracking-system.git
cd complaint-tracking-system

### 2. Set Up the MySQL Database
Open MySQL Workbench and run:
CREATE DATABASE complaint_system;
USE complaint_system;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('citizen', 'officer', 'admin') DEFAULT 'citizen',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255),
  description TEXT,
  status ENUM('pending', 'in_progress', 'resolved') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE responses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id INT NOT NULL,
  officer_id INT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (complaint_id) REFERENCES complaints(id),
  FOREIGN KEY (officer_id) REFERENCES users(id)
);


### 🔐 3. Create .env File in the backend/ Folder
Create a .env file inside backend/ and add:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=complaint_system


### 📦 4. Install Backend Dependencies
cd backend
npm install


### ▶️ 5. Start the Node Server
node server.js
You should see:
✅ Server running at http://localhost:3000


### 🌐 6. Open Frontend Pages
Open the following files directly in your browser:
frontend/submit.html – To submit a new complaint
frontend/view.html – To view submitted complaints


### 👤 7. Add Test Users
Add some test users into the database:
INSERT INTO users (name, email, password, role)
VALUES 
('Citizen John', 'citizen@example.com', 'pass123', 'citizen'),
('Officer Ravi', 'officer@example.com', 'pass456', 'officer'),
('Admin Meena', 'admin@example.com', 'admin789', 'admin');

Now test the login with:
Email: citizen@example.com
Password: pass123

