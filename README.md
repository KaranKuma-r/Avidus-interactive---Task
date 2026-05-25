<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Avidus Interactive Task Management System</title>
</head>
<body>

  <h1>Avidus Interactive Task Management System</h1>

  <p>
    A full-stack Role-Based Task Management Application built using the MERN Stack.
  </p>

  <hr />

  <h2>🚀 Live Demo</h2>

  <p>
    Live URL:
    <a href="https://avidus-interactive-task.vercel.app/" target="_blank">
      https://avidus-interactive-task.vercel.app/
    </a>
  </p>

  <hr />

  <h2>✨ Features</h2>

  <h3>🔐 Authentication</h3>
  <ul>
    <li>User Registration</li>
    <li>User Login</li>
    <li>JWT Authentication</li>
    <li>Protected Routes</li>
  </ul>

  <h3>🛡️ Role Based Access</h3>

  <h4>Admin Permissions</h4>
  <ul>
    <li>View All Users</li>
    <li>Update User Status</li>
    <li>Delete Users</li>
    <li>View All Tasks</li>
    <li>Manage Users</li>
    <li>View Activity Logs</li>
  </ul>

  <h4>User Permissions</h4>
  <ul>
    <li>Create Own Tasks</li>
    <li>View Own Tasks</li>
    <li>Update Own Tasks</li>
    <li>Delete Own Tasks</li>
  </ul>

  <h3>📊 Activity Tracking</h3>
  <ul>
    <li>Login Activity</li>
    <li>Task Creation Activity</li>
    <li>Task Update Activity</li>
    <li>Task Delete Activity</li>
  </ul>

  <h3>💻 Frontend Features</h3>
  <ul>
    <li>Responsive Dashboard</li>
    <li>Reusable Components</li>
    <li>Toast Notifications</li>
    <li>Role Based Sidebar</li>
    <li>Admin Protected Pages</li>
  </ul>

  <hr />

  <h2>🛠️ Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li>React.js</li>
    <li>Redux Toolkit</li>
    <li>React Router DOM</li>
    <li>Axios</li>
    <li>React Hot Toast</li>
    <li>CSS</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>JWT</li>
    <li>bcryptjs</li>
  </ul>

  <hr />

  <h2>📁 Folder Structure</h2>

  <h3>Backend</h3>

  <pre>
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
  </pre>

  <h3>Frontend</h3>

  <pre>
frontend/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
  </pre>

  <hr />

  <h2>⚙️ Installation</h2>

  <h3>Clone Repository</h3>

  <pre>
git clone https://github.com/KaranKuma-r/Avidus-interactive---Task.git
  </pre>

  <h3>Backend Setup</h3>

  <pre>
cd backend
npm install
npm run server
  </pre>

  <h3>Frontend Setup</h3>

  <pre>
cd frontend
npm install
npm run dev
  </pre>

  <hr />

  <h2>🔑 Environment Variables</h2>

  <p>Create <strong>.env</strong> file inside backend folder.</p>

  <pre>
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
  </pre>

 

  <hr />

  <h2>📡 API Routes</h2>

  <h3>Auth Routes</h3>

  <pre>
POST /api/auth/register
POST /api/auth/login
  </pre>

  <h3>Task Routes</h3>

  <pre>
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
  </pre>

  <h3>Admin Routes</h3>

  <pre>
GET /api/admin/users
DELETE /api/admin/users/:id
PUT /api/admin/users/:id/status
  </pre>

  <h3>Activity Routes</h3>

  <pre>
GET /api/activity
  </pre>

  <hr />

  <h2>🌿 Git Workflow</h2>

  <ul>
    <li>Feature Branches</li>
    <li>Pull Requests</li>
    <li>Merge Workflow</li>
  </ul>

  <hr />

  <h2>👨‍💻 Admin Access</h2>

  <p><strong>Email:</strong> karan@gmail.com</p>
  <p><strong>Password:</strong> 123456</p>

  <hr />

  <h2>👤 Author</h2>

  <p>Karan Kumar</p>

</body>
</html>
