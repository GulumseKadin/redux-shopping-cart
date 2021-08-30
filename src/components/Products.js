import React from "react";
import { connect } from "react-redux"
import { addtoCart } from '../actions'
import { Link } from "react-router-dom";

const Products = props => {
  console.log(props.cart)
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author} </p>
            <p>Price: &#8378; {book.price}</p>
            <button onClick={() => props.addtoCart(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addtoCart })(Products);
