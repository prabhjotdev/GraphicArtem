import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import history from '../../history';
import './cssFiles/GeneralRegistration.css';

const GeneralRegistration = ()=> {
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
                        <label class="col-md-3 col-form-label">Full name</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name" {...register("firstname", {required: true, maxLength:80})}/>
                        {errors.firstname && "First name is required"}
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" {...register("lastName", {required: true, maxLength:100})}/>
                        {errors.lastName && "Last name is required"}
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Phone</label>
                        <div class="col-9">
                        <div class="input-group">
                            <input name="" class="form-control" placeholder="Phone number" type="text" {...register("phone", {required: true, minLength:6, maxLength:12})}/>
                            {(errors.phone) && "Phone number is required or enter correct amount of digits"}
                        </div>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Ex. john@gmail.com" {...register("email", {required: true})}/>
                        {errors.email && "email is required or does not require the matching example"}
                        </div>
                    </div>


                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Address</label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="City" {...register("city", {required: true, maxLength:80})}/>
                        {errors.city && "City is required"}
                        <input type="text" class="form-control" placeholder="Province/State" {...register("province", {required: true})}/>
                        {errors.province && "Province is required"}
                        </div>
                        <div class="col">
                        <select class="custom-select form-control" {...register("country", {required: true})}>
                            <option>Country</option>
                            <option>United states</option>
                            <option>Canada</option>
                        </select>
                        {errors.country && "Country is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3"> </label>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Street, Building" {...register("street", {required: true, maxLength:80})}/>
                        {errors.street && "Street address is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <label class="col-md-3 col-form-label">Password</label>
                        <div class="col-6">
                        <input type="password" class="form-control mb-3" placeholder="Create password" {...register("password", {required: true, minLength:8, maxLength:24})} />
                        {errors.password && "Password is required"}
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div class="col-sm-9 offset-sm-3">
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" {...register("terms", {required: true})}/>
                            <div class="custom-control-label" for="customCheck1">I agree with <a href="#" target="_blank">terms and conditions</a></div>
                            </label>

                        </div>
                    </div>

                    <div class="form-row mb-2">
                        <div class="col-sm-9 offset-sm-3">
                        <button type="submit" class="btn btn-primary">Register</button> 
                        {/* onClick={()=>history.push('/Home')} */}
                        </div>
                    </div>

                    </form>
                    </article>
                    <div class="card-footer text-center">Have an account? <a href="" onClick={()=>history.push('/')}>Log In</a></div>
                </div>
            </div>
        );
    // }
}

export default GeneralRegistration;
