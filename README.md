
# Settlement Application

## Description

This application provides a simple interface for managing a financial settlement between two parties (Party A and Party B). Party A can propose an amount, which Party B can either agree to or dispute. The settlement's status is updated accordingly and maintained in a SQLite database. The front end is built with React, styled with TailwindCSS, and the backend uses Node.js with an SQLite database to persist data.

## Features

- **Real-time Settlement Updates**: Party A proposes settlements, and Party B can agree or dispute the amounts in real time.
- **Persistent Storage**: Using SQLite database to maintain settlement states and amounts across sessions.
- **Responsive Design**: Utilizing TailwindCSS for a responsive layout that adjusts to different screen sizes.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/settlement-app.git
   cd settlement-app
   ```

2. **Install dependencies for the backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the backend server**:
   ```bash
   cd backend
   node server.js
   ```

2. **Run the frontend application** in a new terminal window:
   ```bash
   cd ../frontend
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000` to view the app.

## Usage

- **Party A Interface**: Input an amount and submit. The status will update based on Party B's response.
- **Party B Interface**: View the proposed amount and choose to agree or dispute. The status will reflect the action chosen.

## Technologies

- **Frontend**:
  - React.js
  - TailwindCSS
- **Backend**:
  - Node.js
  - Express.js
  - SQLite3
