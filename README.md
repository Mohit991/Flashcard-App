# FlashCard Project

## Overview
FlashCard is a web application built with React and TypeScript for the front end and MongoDB for the backend. The application allows users to create and manage decks of flashcards. Users can perform CRUD (Create, Read, Update, Delete) operations on both decks and individual flashcards within those decks.

## Features
- **Deck Management**: Create, read, update, and delete flashcard decks.
- **Card Management**: Within each deck, create, read, update, and delete flashcards.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.
- **Type Safety**: Leveraging TypeScript for type safety and better developer experience.

## Technologies Used
- **Frontend**:
  - React
  - TypeScript
  - CSS (or styled-components, if used)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose for object modeling)
- **Others**:
  - Axios (for HTTP requests)
  - dotenv (for environment variables)

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js
- npm or yarn
- MongoDB

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flashcard.git
   cd flashcard


2. **Install dependencies:**

For the server:
```bash
Copy code
cd server
npm install
```
For the client:
```bash
Copy code
cd client
npm install
```

3. **Set up environment variables:**
Create a .env file in the server directory and add your MongoDB connection string and any other environment variables required:

env
Copy code
```MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. **Run the application:**

Start the backend server:
```bash
Copy code
cd server
npm start
```
5. Start the frontend development server:
```bash
Copy code
cd client
npm start
```
6. Access the application:
Open your browser and navigate to http://localhost:3000.

## API Endpoints
Decks:
GET /api/decks: Get all decks  
POST /api/decks: Create a new deck  
GET /api/decks/:id: Get a specific deck by ID  
PUT /api/decks/:id: Update a deck by ID  
DELETE /api/decks/:id: Delete a deck by ID  

Cards:
GET /api/decks/:deckId/cards: Get all cards in a specific deck  
POST /api/decks/:deckId/cards: Create a new card in a specific deck  
GET /api/decks/:deckId/cards/:cardId: Get a specific card by ID  
PUT /api/decks/:deckId/cards/:cardId: Update a card by ID  
DELETE /api/decks/:deckId/cards/:cardId: Delete a card by ID  

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please contact [your-email@example.com].

