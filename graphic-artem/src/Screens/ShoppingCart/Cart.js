import React, { Component } from "react";
import Navbar from "../NavBar/Navbar";
// import "./Cart.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShippingCart from "../ShippingCart/ShippingCart";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../Components/actions/cartActions";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <Navbar />
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <div>
          <ShippingCart />
        </div>
      </div>
    );
    /////////////////////////////////////////////////////////////////////////////
    // return (
    //   <div>
    //     <Navbar />
    //     <div class="cart_section">
    //       <div class="container-fluid">
    //         <div class="row">
    //           <div class="col-lg-10 offset-lg-1">
    //             <div class="cart_container">
    //               <div class="cart_title">
    //                 Shopping Cart<small> (1 item in your cart) </small>
    //               </div>
    //               <div class="cart_items">
    //                 <ul class="cart_list">
    //                   <li class="cart_item clearfix">
    //                     <div class="cart_item_image">
    //                       <img
    //                         src="https://upload.wikimedia.org/wikipedia/commons/3/31/Digital_Tree_Sketch_Ink.png"
    //                         alt=""
    //                       />
    //                     </div>
    //                     <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
    //                       <div class="cart_item_name cart_info_col">
    //                         <div class="cart_item_title">Name</div>
    //                         <div class="cart_item_text">Tree Sketchs</div>
    //                       </div>
    //                       <div class="cart_item_quantity cart_info_col">
    //                         <div class="cart_item_title">Quantity</div>
    //                         <div class="cart_item_text">1</div>
    //                       </div>
    //                       <div class="cart_item_price cart_info_col">
    //                         <div class="cart_item_title">Price</div>
    //                         <div class="cart_item_text">$10.99</div>
    //                       </div>
    //                       <div class="cart_item_total cart_info_col">
    //                         <div class="cart_item_title">Total</div>
    //                         <div class="cart_item_text">$10.99</div>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div class="order_total">
    //                 <div class="order_total_content text-md-right">
    //                   <div class="order_total_title">Order Total:</div>
    //                   <div class="order_total_amount">$10.99</div>
    //                 </div>
    //               </div>
    //               <div class="cart_buttons">
    //                 {" "}
    //                 <button type="button" class="button cart_button_clear">
    //                   Continue Shopping
    //                 </button>{" "}
    //                 <button type="button" class="button cart_button_checkout">
    //                   Add to Cart
    //                 </button>{" "}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

//export default Cart;
