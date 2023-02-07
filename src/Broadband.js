import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paymentUtilities } from './api/utilities';

function Broadband() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      title : "Broadband Recharge",
      name : "",
      email : "",
      phone : "",
      utilities : "",
      bNumber : "",
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
    <h1><b>Broadband Recharge</b></h1>
    <div className="col-lg-4">
    <div className='form-group mt-3'>
  <label><b>User Name:</b></label>
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

        <div className='col-lg-6'>
            <div className="form-group mt-5">
                <label><b>Select Network:</b></label>
                <select 
                name='utilities'
                onChange={formik.handleChange}
                value={formik.values.utilities}
                className='form-control mt-2'>
                    <option>--Select--</option>
                    <option value={"Railwire"}>Railwire</option>
                    <option value={"Jio"}>Jio</option>
                    <option value={"BSNL"}>BSNL</option>                    
                </select>
            </div>
        </div>

        <div className='col-lg-6'>
        <div className='form-group mt-5'>
  <label><b>Broadband Number:</b></label>
  <input 
  name='bNumber'
  onChange={formik.handleChange}
  value={formik.values.nNumber}
  type={"text"} className="form-control mt-2"/>
</div>
        </div>    

        <div className='col-lg-4'></div>

                <div className='col-lg-4'>
                    <div className="form-group mt-5">
                        <label><b>Recharge:</b></label>
                        <select 
                        name='amount'
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={"Rs.499 / 800GB / Month"}>Rs.499 / 800GB / Month</option>
                            <option value={"Rs.200 / 250GB / Month"}>Rs.200 / 250GB / Month</option>
                            <option value={"Rs.799 / Unlimited / Month"}>Rs.799 / Unlimited / Month</option>
                            
                            
                        </select>
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

export default Broadband