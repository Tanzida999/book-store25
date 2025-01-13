CRUD Application with MongoDB, Express, and React

Overview
This application provides a user interface and RESTful API for managing items. It allows users to:
- Add a new item
- View all items
- Update an existing item
- Delete an item

The frontend is built using React, and the backend is implemented with Express.js. MongoDB is used for data storage.


Features

 Frontend:
- Built with React.
- User-friendly interface for performing CRUD (Create, Read, Update, Delete) operations.
- Real-time updates after each operation.

Backend:
- RESTful API using Express.js.
- Endpoints for creating, retrieving, updating, and deleting items.
- MongoDB for persistent data storage.



Installation and Setup

Prerequisites
Make sure you have the following installed on your system:
1. Node.js (v14 or higher)
2. npm (comes with Node.js)
3. MongoDB (local or cloud instance)

Clone the Repository
bash
git clone <repository_url>
cd <repository_folder>


Backend Setup
1. Navigate to the backend folder:
   bash
   cd backend
   
2. Install dependencies:
   bash
   npm install
   
Configure MongoDB:

Open the config.js file in the backend folder.

Set up your MongoDB connection string and port in the file:
const config = {
  MONGO_URI: '<your_mongodb_connection_string>',
  PORT: 5000
};

module.exports = config;
     
4. Start the server:
   bash
   npm start
   
   The server will run at `http://localhost:5555`.

Frontend Setup
1. Navigate to the `frontend` folder:
   bash
   cd ../frontend
   
2. Install dependencies:
   bash
   npm install
   
3. Start the development server:
   bash
   npm start
   
   The React application will run at `http://localhost:3000`.



API Endpoints

 Base URL

http://localhost:5555/api/items


Endpoints

1. Create an Item
   - Method: POST
   - URL: `/`
   - Body:
     json
     {
       "name": "string",
       "description": "string"
     }
     

2. Retrieve All Items
   - Method: GET
   - URL: `/`

3. Update an Item
   - Method: PUT
   - URL: `/:id`
   - Body:
     json
     {
       "name": "string",
       "description": "string"
     }
     

4. Delete an Item
   - Method: DELETE
   - URL: `/:id`



Folder Structure

 Backend
```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
├── package.json
├── .env
```

Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
├── package.json
```



Usage
1. Open the frontend in a browser at `http://localhost:3000`.
2. Use the interface to add, view, update, or delete items.
3. Monitor API requests and responses in the browser console or using a tool like Postman.



Dependencies

Backend
- Express.js
- MongoDB (Mongoose for ODM)
- dotenv

Frontend
- React
- Axios (for API requests)



Troubleshooting

Common Issues
- MongoDB Connection Failed: Ensure MongoDB is running.
- Port Conflicts: Make sure no other applications are using ports `3000` (frontend) or `5555` (backend).




 Acknowledgments
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

