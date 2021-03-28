import React, { Component } from 'react';
import history from '../../history';
import './cssFiles/MainRegistration.css';

class MainRegisteration extends Component {
    render(){
        return(
            <div class=".col-md-4">
                <div class="card">
                    <article class="card-body">
                    <header class="mb-4">
                        <h4 class="card-title">Sign up</h4>
                    </header>
                    <form class="block-register">
                    
                    <div class="form-row mb-2">
                        <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary" onClick={()=>history.push('/ProfReg')}>Register As Professional</button>
                        <br/>
                        <br/>
                        <br/>
                        <button type="submit" class="btn btn-primary" onClick={()=>history.push('/GeneralReg')}>Register As Customer</button>
                        </div>
                    </div>

                    </form>
                    </article>
                    <div class="card-footer text-center">Have an account? <a href="">Log In</a></div>
                </div>
            </div>
        );
    }
}

export default MainRegisteration;