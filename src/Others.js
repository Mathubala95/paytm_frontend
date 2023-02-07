import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paymentUtilities } from './api/utilities';


function Others() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            title : "Donation",
            name : "",
            email : "",
            phone : "",
            utilities : "",
            pNumber : "",
            state : "",
            amount : ""
        },

        onSubmit : async (values) => {
            try {
              await paymentUtilities(values);
              alert("Donated Successfully")

              navigate('/portal/dashboard/:uId')
            }catch(error){
              alert("Something went wrong")
      
            }}
    })
  return (
    <div class="container">
<form onSubmit={formik.handleSubmit}>

    <div className='row mt-5'>
    <h1><b>Donation</b></h1>
    <div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>Name:</b></label>
  <input name='name'
          onChange={formik.handleChange}
          value={formik.values.name} 
          type={"text"} className="form-control"/>
</div>
</div>     
<div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>Email:</b></label>
  <input name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
           type={"text"} className="form-control"/>
</div>
</div>    
<div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>Phone:</b></label>
  <input name='phone'
          onChange={formik.handleChange}
          value={formik.values.phone} 
          type={"text"} className="form-control"/>
</div>
</div>    

        <div className='col-lg-6 mt-3'>
            <div className="form-group mt-3">
                <label><b>Select Foundation:</b></label>
                <select
                name='utilities'
                onChange={formik.handleChange}
                value={formik.values.utilities}
                className='form-control mt-2'>
                    <option>--Select--</option>
                    <option value={"Agaram foundation"}>Agaram foundation</option>
                    <option value={"Isha foundation"}>Isha foundation</option>
                    <option value={"Universal Peace Foundation"}>Universal Peace Foundation</option>
                    <option value={"Bharatham Foundation"}>Bharatham Foundation</option>
                    <option value={"Alpha Foundation"}>Alpha Foundation</option>
                    <option value={"Helping mind foundation"}>Helping mind foundation</option>
                </select>
            </div>
        </div>
        <div className='col-lg-6 mt-3'>
            <div className="form-group mt-3">
                <label><b>Pan Number:</b></label>
                <input name='pNumber'
          onChange={formik.handleChange}
          value={formik.values.pNumber}
          type={"text"} className="form-control mt-2"/>
                
            </div>
        </div>
        <div className='col-lg-6'>
            <div className="form-group mt-5">
                <label><b>Your State:</b></label>
                <select 
                name='state'
                onChange={formik.handleChange}
                value={formik.values.state}
                className='form-control mt-2'>
                    <option>--Select--</option>
                    <option value={"tamilnadu"}>Tamilnadu</option>
                    <option value={"andra"}>Andra</option>
                    <option value={"karnataka"}>Karnataka</option>
                    <option value={"kerala"}>Kerala</option>
                </select>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className="form-group mt-5">
                <label><b>Amount:</b></label>
                <input 
                name='amount'
                onChange={formik.handleChange}
                value={formik.values.amount}
                 type={"text"} className="form-control mt-2"/>
                
            </div>
        </div>
       
       
        <div className='col-lg-4 mt-5'>
            <div className='form-group mt-3'>
                <input type={"submit"} className='btn btn-primary' />
            </div>

        </div>
        <div className='col-lg-4 mt-5'>
            <div className='form-group mt-3'>
            <Link to={"/portal/dashboard/:uId"} class="btn btn-primary" type="submit">Home</Link>

            </div>

        </div>
    </div>
    </form>
</div>
  )
}

export default Others