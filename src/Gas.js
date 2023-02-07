import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paymentUtilities } from './api/utilities';

function Gas() {
    const navigate = useNavigate();
const formik = useFormik({
    initialValues : {
        title : "Gas Booking",
        cName : "",
        account : "",
        phone : "",
        utilities : "",
        agency : "",
        amount : ""
    },

    onSubmit : async (values) => {
        try {
            await paymentUtilities(values);
            alert("Payment added Successfully")
            navigate('/portal/dashboard/:uId')
        } catch (error) {
            alert("Something went wrong")
        }
    }
})

  return (
    <div class="container">
        <form onSubmit={formik.handleSubmit}>
            <div className='row mt-5'>
            <h1><b>Gas Booking</b></h1>
            <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>Consumer Name:</b></label>
          <input 
          name='cName'
          onChange={formik.handleChange}
          value={formik.values.cName}
          type={"text"} className="form-control"/>
        </div>
        </div>     
        <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>Account Numer:</b></label>
          <input 
          name='account'
          onChange={formik.handleChange}
          value={formik.values.account}
          type={"text"} className="form-control"/>
        </div>
        </div>    
        <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>Phone:</b></label>
          <input 
          name='phone'
          onChange={formik.handleChange}
          value={formik.values.phone}
          type={"text"} className="form-control"/>
        </div>
        </div>    

                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Select Providers:</b></label>
                        <select 
                        name='utilities'
                        onChange={formik.handleChange}
                        value={formik.values.utilities}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={'Indane'}>Indane</option>
                            <option value={'HP'}>HP</option>
                            <option value={'Bharat'}>Bharat</option>
                            
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Agency Name:</b></label>
                        <select 
                         name='agency'
                         onChange={formik.handleChange}
                         value={formik.values.agency}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={"sakthi"}>Sakthi Agency</option>
                            <option value={"win"}>Win Agency</option>
                            <option value={"santhosh"}>Santhosh Agency</option>
                            
                        </select>
                    </div>     
                              
                
                </div>
                <div className='col-lg-4'></div>

<div className='col-lg-4'>
    <div className="form-group mt-5">
        <label><b>Amount:</b></label>
        <input 
        name='amount'
        onChange={formik.handleChange}
        value={formik.values.amount}
        type={"text"} className="form-control"/>
       
    </div>
</div>
<div className='col-lg-4'></div>
                <div className='col-lg-4'>
                    <div className='form-group mt-5'>
                        <input type={"submit"} className='btn btn-primary' value={'Proceed'} />
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='form-group mt-5'>
                    <Link to={"/portal/dashboard/:uId"} class="btn btn-primary" type="submit">Home</Link>

                    </div>

                </div>
            </div>
            </form>
</div>
  )
}

export default Gas