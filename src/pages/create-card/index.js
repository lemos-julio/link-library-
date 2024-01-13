import React from "react";
import CardLink from "../../components/Card";
import { connect } from 'react-redux';

const CardPage = ({ books }) => {
  return (
    
      <div>
        {books.books.map((book, index) => (
          <CardLink key={index} {...book} />
        ))}
      </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(CardPage);
