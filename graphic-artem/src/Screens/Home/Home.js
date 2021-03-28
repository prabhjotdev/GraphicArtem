import React, { Component } from "react";
import "./Home.css";
import history from '../../history';
import Navbar from "../NavBar/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div class="row">
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">
                    {" "}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/31/Digital_Tree_Sketch_Ink.png"
                      class="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      {" "}
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Tree Sketchs
                      </a>{" "}
                    </h6>{" "}
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$10.99</h3>
                  <div class="text-muted mb-3">400 reviews</div>{" "}
                  <button onClick={()=>history.push('/Chat')} type="button" class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
                  </button>
                  <button type="button" onClick={()=>history.push('/Cart')} class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">
                    {" "}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png"
                      class="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      {" "}
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Assorted Logo's
                      </a>{" "}
                    </h6>{" "}
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$50.49</h3>
                  
                  <div class="text-muted mb-3">3 reviews</div>{" "}
                  <button type="button" onClick={()=>history.push('/Chat')} class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
                  </button>
                  <button type="button" class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">
                    {" "}
                    <img
                      src="https://static.turbosquid.com/Preview/2016/11/07__12_51_14/3dlionheadsculpture01.jpg73E744A2-1B5E-421F-B4A1-9416219297D9Zoom.jpg"
                      class="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      {" "}
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Lion Model
                      </a>{" "}
                    </h6>{" "}
                    <a href="#" class="text-muted" data-abc="true">
                      
                    </a>
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$25.99</h3>
        
                  <div class="text-muted mb-3">34 reviews</div>{" "}
                  <button type="button" onClick={()=>history.push('/Chat')} class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Chat with Designer
                  </button>
                  <button type="button" class="btn bg-cart">
                    <i class="fa fa-cart-plus mr-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
