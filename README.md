# 🎉 Event Management API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL (via Sequelize)** for managing events and user registrations.

---

## 🚀 Objective
Implements a complete Event Management backend system that allows:
- Creating and listing events  
- Registering and cancelling user participation  
- Fetching upcoming events  
- Displaying event statistics  

---

## ⚙️ Tech Stack
- **Node.js + Express** — Server Framework  
- **PostgreSQL** — Database  
- **Sequelize ORM** — Database Modeling  
- **dotenv** — Environment Management  

---

## 📂 Folder Structure
event-management/
├── config/
│ └── db.js
├── controllers/
│ ├── eventController.js
│ ├── registrationController.js
│ ├── statsController.js
│ └── userController.js ⚠️ For testing only
├── models/
│ ├── eventModel.js
│ ├── userModel.js
│ └── index.js
├── routes/
│ ├── eventRoutes.js
│ ├── registrationRoutes.js
│ ├── statsRoutes.js
│ └── userRoutes.js ⚠️ For testing only
├── .env
├── package.json
└── server.js



## 🧠 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/adityachauhan1-in/EventManagement
cd event-management

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment
Create a .env file:
DATABASE_URL=postgres://<user>:<password>@<host>/<db>?sslmode=require
PORT=5000

4️⃣ Start the Server

npm run dev
You should see:



✅ Database connected successfully
✅ Database synced with models
🚀 Server running on port 5000

🧩 API Endpoints

🎟️ Event Management

Method	            Endpoint	                Description

POST	            /events	Create              new event
GET	                /events/:id	                Get event details with registered users
GET	                /events/upcoming/list	    List upcoming events (sorted by date, then location)

👥 Registration

Method       Endpoint	                        Description
	   
POST	    /events/:id/register/:userId	    Register a user for an event
DELETE	    /events/:id/cancel/:userId	        Cancel a user’s registration

📊 Event Stats

Method	                  Endpoint	               Description

GET	                       /events/:id/stats	   Get total registrations, remaining capacity, and usage percentage

🧪 User Routes (for testing only)

Method	        Endpoint	    Description

POST	        /users	        Create a user
GET	            /users	        List all users

🧮 Example Requests

➕ Create Event

POST /events
{
  "title": "Tech Conference",
  "dateTime": "2025-11-30T10:00:00Z",
  "location": "Delhi",
  "capacity": 300
}

🎟️ Register User

POST /events/1/register/2

📊 Event Stats

GET /events/1/stats

✅ Business Logic Rules

Capacity ≤ 1000

No duplicate registrations

Cannot register for full or past events

Proper HTTP status codes for all responses

👨‍💻 Author
Aditya Chauhan
Backend Development InternShip Assignment
