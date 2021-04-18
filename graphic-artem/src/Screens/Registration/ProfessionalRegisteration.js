import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import history from '../../history';
import './cssFiles/ProfessionalRegisteration.css';

const ProfessionalRegisteration = ()=> {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        history.push('/Home')
    };  
        return(
            <div class=".col-md-4">
                <div class="card">
                    <article class="card-body">
                    <header class="mb-4">
                        <h4 class="card-title">Sign up</h4>
                    </header>
                    <form onSubmit={handleSubmit(onSubmit)} class="block-register">
                    
                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Business Name</label>
                        <div class="col-9">
                            <div class="input-group">
                                <input name="" class="form-control" placeholder="Business Name" type="text" {...register("businessName", {required: true, maxLength:80})}/>
                                {errors.businessName && "Business name is required"}
                            </div>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Full name</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name" {...register("firstName", {required: true, maxLength:80})}/>
                        {errors.firstName && "First name is required"}
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" {...register("lastName", {required: true, maxLength:80})}/>
                        {errors.lastName && "Last name is required"}
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Phone</label>
                        <div class="col-9">
                        <div class="input-group">
                            <input name="" class="form-control" placeholder="Phone number" type="text" {...register("phone", {required: true, maxLength:80})}/>
                            {errors.phone && "Phone number is required"}
                        </div>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                        <input type="email" class="form-control" placeholder="Ex. john@gmail.com" {...register("email", {required: true, maxLength:80})}/>
                        {errors.email && "Email is required"}
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Address</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="City" {...register("city", {required: true, maxLength:80})}/>
                        {errors.city && "City is required"}
                        </div>
                        <div class="col">
                        <select class="custom-select form-control" {...register("country", {required: true})}>
                            <option>Country</option>
                            <option>United states</option>
                            <option>Canada</option>
                        </select>
                        {errors.country && "Please select a country"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3"> </label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Street, Building" {...register("street", {required: true})}/>
                        {errors.street && "Street name is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Password</label>
                        <div class="col-6">
                        <input type="password" class="form-control mb-3" placeholder="Create password" {...register("password", {required: true, minLength: 8, maxLength:24})}/>
                        {errors.password && "Password is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3">Credit Card Name</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Name on Card" {...register("cardName", {required: true, maxLength:30})}/>
                        {errors.cardName && "Credit Card name is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3">Credit Card Number</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Number on Card" {...register("cardNumber", {required: true, maxLength:16})}/>
                        {errors.cardNumber && "Card Number is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3">Credit Card Expiry</label>
                        <div class="col">
                        <input type="text" maxLength="4" class="form-control" placeholder="MM/YY" {...register("exp", {required: true, maxLength:4})}/>
                        {errors.exp && "Expiry of card is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3">Credit Card CV</label>
                        <div class="col">
                        <input type="text" maxLength="3" class="form-control" placeholder="CV" {...register("cv", {required: true, maxLength:3})}/>
                        {errors.cv && "CV on card is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div class="col-sm-6 offset-sm-3">
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                            <div class="custom-control-label" for="customCheck1">I agree with <a href="#" target="_blank">terms and conditions</a></div>
                            </label>

                        </div>
                    </div>

                    <div class="form-row mb-2">
                        <div class="col-sm-9 offset-sm-1">
                        <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </div>

                    </form>
                    </article>
                    <div class="card-footer text-center">Have an account? <a href="" onClick={()=>history.push('/')}>Log In</a></div>
                </div>
            </div>
        );
    
}

export default ProfessionalRegisteration;