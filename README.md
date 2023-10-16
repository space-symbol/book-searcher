 # Google Book Searcher

Welcome to Google Book Searcher, a React application powered by Redux Toolkit for state management and the Google Books API for fetching book data. This app allows users to search for books by title or author, filter them by categories, and sort the results by newest or relevance. It provides a comprehensive and user-friendly interface to explore a vast collection of books.

## Features

- **Search Books**: Enter a book title or author to search the Google Books API.
- **Filter by Categories**: Choose from various categories (e.g., Fiction, Non-fiction, Science, etc.) to narrow down your search results.
- **Sort Results**: Sort the search results by the newest publications or by relevance to your search query.
- **View Book Details**: Click on a book to view detailed information, including the book's cover, title, author(s), description, and links to external resources.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Redux Toolkit**: Utilizes Redux Toolkit for efficient state management, ensuring scalability and maintainability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: The official Redux toolkit for efficient Redux development in TypeScript.
- **Google Books API**: Provides access to a vast database of books, including detailed information, search functionality, and categorization.
- **TypeScript**: A statically typed superset of JavaScript that adds optional static types to the language.

## Installation

Before starting the project, make sure to fill in the `API_KEY` variable in the `.env.example` file and rename it to `.env`.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/space-symbol/google-book-searcher.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd google-book-searcher
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will open automatically in your browser at `http://localhost:5000`.

## Usage

- **Search Bar**: Enter a book title or author in the search bar and press Enter to start the search.
- **Filter Options**: Use the filter dropdown to select a specific category to refine your search results.
- **Sort Options**: Choose to sort the results by the newest publications or by relevance to your search query.
- **Book Listings**: The search results will be displayed as a list of books. Each book listing shows the book cover, title, and author(s).
- **Book Details**: Click on a book listing to view detailed information about the book.
