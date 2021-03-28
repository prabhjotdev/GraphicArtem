import React, { Component } from 'react';
import history from '../../history';
import './cssFiles/GeneralRegistration.css';

class GeneralRegistration extends Component {
    render(){
        return(
            <div class=".col-md-4">
                <div class="card">
                    <article class="card-body">
                    <header class="mb-4">
                        <h4 class="card-title">Sign up</h4>
                    </header>
                    <form class="block-register">
                    
                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Full name</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Last name"/>
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Phone</label>
                        <div class="col-9">
                        <div class="input-group">
                            <input name="" class="form-control" placeholder="Phone number" type="text"/>
                        </div>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                        <input type="email" class="form-control" placeholder="Ex. john@gmail.com"/>
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Address</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <select class="custom-select form-control">
                            <option>Country</option>
                            <option>United states</option>
                            <option>Canada</option>
                        </select>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3"> </label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Street, Building"/>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Password</label>
                        <div class="col-6">
                        <input type="password" class="form-control mb-3" placeholder="Create password"/>
                        <input type="password" class="form-control" placeholder="Repeat password"/>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div class="col-sm-9 offset-sm-3">
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                            <div class="custom-control-label" for="customCheck1">I agree with <a href="#" target="_blank">terms and conditions</a></div>
                            </label>

                        </div>
                    </div>

                    <div class="form-row mb-2">
                        <div class="col-sm-9 offset-sm-3">
                        <button type="submit" onClick={()=>history.push('/Home')} class="btn btn-primary">Register</button>
                        </div>
                    </div>

                    </form>
                    </article>
                    <div class="card-footer text-center">Have an account? <a href="" onClick={()=>history.push('/')}>Log In</a></div>
                </div>
            </div>
        );
    }
}

export default GeneralRegistration;
