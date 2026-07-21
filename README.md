# 🇺🇬 Parish Development Model (PDM)

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-Proprietary-red)

A modern digital platform designed to support the Parish Development Model (PDM) by streamlining funding applications, approvals, and project 
monitoring at the parish level.

---

## 📖 Overview

The Parish Development Model (PDM) platform empowers citizens, community groups, and administrators by digitizing the funding application process.

The system provides:

- Online funding applications
- Application tracking
- Administrative approval workflows
- Transparency in fund allocation
- Real-time monitoring and reporting

The platform aims to improve service delivery and accountability while reducing paperwork and delays.

---

## ✨ Key Features

### 👤 Applicant Portal

- User registration and login
- Submit funding applications
- View application status
- Track approval progress
- Access application history

### 🛠️ Administrative Portal

- Review submitted applications
- Approve or reject requests
- Manage applicants
- Monitor funding requests
- View application statistics

### 📊 Dashboard

- Application metrics
- Funding summaries
- Approval trends
- User activity monitoring

### 🤖 Planned AI Features

- Application quality assessment
- Fraud detection assistance
- AI-powered recommendations
- Smart application categorization

---

## 🏗️ System Architecture
```text
Applicants
    │
    ▼
User Dashboard
    │
    ▼
Application Submission
    │
    ▼
Admin Review Panel
    │
 ┌──┴──┐
 ▼     ▼
Approve Reject
 │
 ▼
Funding Process
```

## 🛠 Technology Stack

| Technology            | Purpose                 |
| --------------------- | ----------------------- |
| React                 | Frontend Framework      |
| Vite                  | Development Environment |
| JavaScript            | Application Logic       |
| CSS                   | Styling                 |
| Firebase (Planned)    | Backend Services        |
| AI Services (Planned) | Intelligent Reviews     |

## 📁 Project Structure
```Text
src/
│
├── components/
│   ├── Navbar
│   ├── Sidebar
│   └── Cards
│
├── pages/
│   ├── Home
│   ├── Dashboard
│   ├── Applications
│   └── Admin
│
├── data/
│
├── assets/
│
├── App.jsx
│
└── main.jsx
```
🚀 Getting Started

Prerequisites

Node.js 20+

npm

Installation
Clone the repository:

</> Bash

git clone https://github.com/natashacamille26/PDM.git

Navigate to project:

</> Bash 

cd pdm-project

Install dependencies:

</> Bash

npm install

Start the development server

</> Bash

npm run dev

🔄 Application Workflow
1. User creates an account
2. User submits an application
3. Application enters review queue
4. Administrator evaluates request
5. Application is approved or rejected
6. User receives updated status

🎯 Roadmap
Phase 1
 Landing page
 User dashboard
 Application submission
 Admin dashboard
