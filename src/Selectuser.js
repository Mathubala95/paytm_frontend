import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';


function Selectuser() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            category:'',
            value:'',
            product:'',
            quantity:'',
            price:'',
            instock:''
        },
        validate : (values) => {
            let error = {};
            if(!values.username){
              error.username = "Please enter the name"
            }
            if(values.username && (values.username.length <= 2 || values.username.length > 16)){
                error.username = "Name must be between 3 to 15 letters"
              }
              if(!values.email){
                error.email = "Enter the Email"
              }
              if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                error.email = "Enter the Valid Email";
              }
              if(values.phone.toString().length !== 10){
                error.phone = "Enter the Number";
              
              }         
            
              return error;
    },

    onSubmit: async (values) => {
        try {
          const userdata = await axios.post(
            "https://634953820b382d796c837598.mockapi.io/api/products/product",values);
          alert("Success")
        }
        catch (error){
          alert("Error");
        }
        },
    });
  return (
    <div class="container">
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <h1><b>PRODUCTS</b></h1>
        <div className="col-lg-4">
        <div className='form-group'>
              <label><b>User Name:</b></label>
              <input name="username" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.username}  
              type={"text"} 
              className={`form-control 
              ${formik.touched.username && formik.errors.username ? 'error-box' : ''}
              ${formik.touched.username && !formik.errors.username ? 'success-box' : ''}`}
              />
              {
                formik.touched.username && formik.errors.username ? 
                <span style={{color:"red"}}>{formik.errors.username}</span> : null
              }
            </div>
            </div>
            <div className="col-lg-4">
            <div className='form-group'>  
              <label>Email</label>
              <input name="email" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.email} 
              type={"email"} 
              className={`form-control
              ${formik.touched.email && formik.errors.email ? 'error-box' : ''}
              ${formik.touched.email && !formik.errors.email ? 'success-box' : ''}`}
              />
              {
                formik.touched.email && formik.errors.email ? 
                <span style={{color:"red"}}>{formik.errors.email}</span> : null
              }
            </div>
            </div>
            <div className='col-lg-4'>
            <div className='form-group'>
              <label>Phone</label>
              <input name="phone" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.phone}   
              type={"number"} 
              className={`form-control 
              ${formik.touched.phone && formik.errors.phone ? 'error-box' : ''}
              ${formik.touched.phone && !formik.errors.phone ? 'success-box' : ''}`}
              />
              {
                formik.touched.phone && formik.errors.phone ? 
                <span style={{color:"red"}}>{formik.errors.phone}</span> : null
              }           
           </div> 
          </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-3">
                        <label><b>Product Category:</b></label>
                        <select name="category"
                        onChange={formik.handleChange} 
                        value={formik.values.category}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Veggies</option>
                            <option>Fruits</option>
                            <option>Chocolate</option>
                            <option>Cookies</option>
                            <option>Chips</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-3">
                        <label><b>Product:</b></label>
                        <select name="product"
                        onChange={formik.handleChange} 
                        value={formik.values.product}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Carrot</option>
                            <option>Tomato</option>
                            <option>Apple</option>
                            <option>Orange</option>
                            <option>Kitkat</option>
                            <option>Dairy Milk</option>
                            <option>Dark Fantasy</option>
                            <option>50-50</option>
                            <option>Laze</option>
                            <option>Bingo</option>
                            <option>Rose Milk</option>
                            <option>Bovento</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Value:</b></label>
                        <select name="value"
                        onChange={formik.handleChange} 
                        value={formik.values.value}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Extreme Value</option>
                            <option>High Value</option>
                            <option>Medium Value</option>
                            <option>Low Value</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>In Stock:</b></label>
                        <select name="instock"
                        onChange={formik.handleChange} 
                        value={formik.values.instock}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Quantity:</b></label>
                        <select name="quantity"
                        onChange={formik.handleChange} 
                        value={formik.values.quantity}className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Price:</b></label>
                        <select name="price"
                        onChange={formik.handleChange} 
                        value={formik.values.price}                         
                         className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Rs.100</option>
                            <option>Rs.200</option>
                            <option>Rs.300</option>
                            <option>Rs.400</option>
                            <option>Rs.500</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group mt-3'>
                        <input type={"submit"} className='btn btn-primary' />
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='form-group mt-3'>
                    <Link to={"/tables"} class="btn btn-primary mt-1" type="submit">Tables</Link>

                    </div>

                </div>
            </div>

        </form>
        </div>
        
  )
}

export default Selectuser