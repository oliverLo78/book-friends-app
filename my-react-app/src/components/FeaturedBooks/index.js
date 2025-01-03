import React from 'react';

const FeaturedBooks = ({ books }) => {
  return (
    
    <section className="featured-books">
      <h2 className="section-title" Featured Books
      >
      foo
      </h2>
      <div className="books-container">
        {/* Map through the books array to render each book */}
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default FeaturedBooks;
