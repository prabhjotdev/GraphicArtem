import React, { Component } from "react";
// import "./Home.css";
import { connect } from "react-redux";
import history from "../../history";
import Navbar from "../NavBar/Navbar";
import { addToCart } from "../../Components/actions/cartActions"

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <Navbar />
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );

    ////////////////////////////////////////////////////////////////////////////////////////
    // return (
    //   <div>
    //     <Navbar />
    //     <div class="container d-flex justify-content-center mt-50 mb-50">
    //       <div class="row">
    //         <div class="col-md-4 mt-2">
    //           <div class="card">
    //             <div class="card-body">
    //               <div class="card-img-actions">
    //                 {" "}
    //                 <img
    //                   src="https://upload.wikimedia.org/wikipedia/commons/3/31/Digital_Tree_Sketch_Ink.png"
    //                   class="card-img img-fluid"
    //                   width="96"
    //                   height="350"
    //                   alt=""
    //                 />{" "}
    //               </div>
    //             </div>
    //             <div class="card-body bg-light text-center">
    //               <div class="mb-2">
    //                 <h6 class="font-weight-semibold mb-2">
    //                   {" "}
    //                   <a href="#" class="text-default mb-2" data-abc="true">
    //                     Tree Sketchs
    //                   </a>{" "}
    //                 </h6>{" "}
    //               </div>
    //               <h3 class="mb-0 font-weight-semibold">$10.99</h3>
    //               <div class="text-muted mb-3">400 reviews</div>{" "}
    //               <button
    //                 onClick={() => history.push("/Chat")}
    //                 type="button"
    //                 class="btn bg-cart"
    //               >
    //                 <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
    //               </button>
    //               <button
    //                 type="button"
    //                 onClick={() => history.push("/Cart")}
    //                 class="btn bg-cart"
    //               >
    //                 <i class="fa fa-cart-plus mr-2"></i> Add to cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md-4 mt-2">
    //           <div class="card">
    //             <div class="card-body">
    //               <div class="card-img-actions">
    //                 {" "}
    //                 <img
    //                   src="https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png"
    //                   class="card-img img-fluid"
    //                   width="96"
    //                   height="350"
    //                   alt=""
    //                 />{" "}
    //               </div>
    //             </div>
    //             <div class="card-body bg-light text-center">
    //               <div class="mb-2">
    //                 <h6 class="font-weight-semibold mb-2">
    //                   {" "}
    //                   <a href="#" class="text-default mb-2" data-abc="true">
    //                     Assorted Logo's
    //                   </a>{" "}
    //                 </h6>{" "}
    //               </div>
    //               <h3 class="mb-0 font-weight-semibold">$50.49</h3>
    //               <div class="text-muted mb-3">3 reviews</div>{" "}
    //               <button
    //                 type="button"
    //                 onClick={() => history.push("/Chat")}
    //                 class="btn bg-cart"
    //               >
    //                 <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
    //               </button>
    //               <button type="button" class="btn bg-cart">
    //                 <i class="fa fa-cart-plus mr-2"></i> Add to cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md-4 mt-2">
    //           <div class="card">
    //             <div class="card-body">
    //               <div class="card-img-actions">
    //                 {" "}
    //                 <img
    //                   src="https://static.turbosquid.com/Preview/2016/11/07__12_51_14/3dlionheadsculpture01.jpg73E744A2-1B5E-421F-B4A1-9416219297D9Zoom.jpg"
    //                   class="card-img img-fluid"
    //                   width="96"
    //                   height="350"
    //                   alt=""
    //                 />{" "}
    //               </div>
    //             </div>
    //             <div class="card-body bg-light text-center">
    //               <div class="mb-2">
    //                 <h6 class="font-weight-semibold mb-2">
    //                   {" "}
    //                   <a href="#" class="text-default mb-2" data-abc="true">
    //                     Lion Model
    //                   </a>{" "}
    //                 </h6>{" "}
    //                 <a href="#" class="text-muted" data-abc="true"></a>
    //               </div>
    //               <h3 class="mb-0 font-weight-semibold">$25.99</h3>
    //               <div class="text-muted mb-3">34 reviews</div>{" "}
    //               <button
    //                 type="button"
    //                 onClick={() => history.push("/Chat")}
    //                 class="btn bg-cart"
    //               >
    //                 <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
    //               </button>
    //               <button type="button" class="btn bg-cart">
    //                 <i class="fa fa-cart-plus mr-2"></i> Add to cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
    ///////////////////////////////////////////////////////////////////////
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home);
