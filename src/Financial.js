import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paymentUtilities } from './api/utilities';

function Financial() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      title : "Creditcard Payment",
      name : "",
      email : "",
      phone : "",
      utilities : "",
      credit : "",
      amount : ""
    },
    onSubmit : async (values) => {
      try {
        await paymentUtilities(values);
        alert("Recharged Successfully")

        navigate('/portal/dashboard/:uId')
      }catch(error){
        alert("Something went wrong")

      }
    }

  })
  return (
    <div class="container">
     <form onSubmit={formik.handleSubmit}>

    <div className='row mt-5'>
    <h1><b>Creditcard Payment</b></h1>
    <div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>User Name:</b></label>
  <input  name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
           type={"text"} className="form-control"/>
</div>
</div>     
<div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>Email:</b></label>
  <input  name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          type={"text"} className="form-control"/>
</div>
</div>    
<div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>Phone:</b></label>
  <input  name='phone'
          onChange={formik.handleChange}
          value={formik.values.phone}
          type={"text"} className="form-control"/>
</div>
</div>    

        <div className='col-lg-6'>
            <div className="form-group mt-5">
                <label><b>Select Your Bank:</b></label>
                <select 
                 name='utilities'
                 onChange={formik.handleChange}
                 value={formik.values.utilities}
                className='form-control mt-2'>
                    <option>--Select--</option>
                    <option value={"SBI"}>SBI</option>
                    <option value={"Canara"}>Canara</option>
                    <option value={"HDFC"}>HDFC</option>                    
                </select>
            </div>
        </div>

        <div className='col-lg-6'>
        <div className='form-group mt-5'>
  <label><b>Creditcard Number:</b></label>
  <input 
  name='credit'
  onChange={formik.handleChange}
  value={formik.values.credit}
   type={"text"} className="form-control mt-2"/>
</div>
        </div>    

        <div className='col-lg-4'></div>

                <div className='col-lg-4'>
                    <div className="form-group mt-5">
                        <label><b>Pay Amount:</b></label>
                        <input name='amount'
          onChange={formik.handleChange}
          value={formik.values.amount}
          type={"text"} className="form-control mt-2"/>
                        
                    </div>
                </div>
                <div className='col-lg-4'></div>
           
        
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

export default Financial