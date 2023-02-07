import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { paymentUtilities } from './api/utilities';

function Mobile() {
    const navigate = useNavigate()   
    const formik = useFormik ({
        initialValues : {
            title : "Mobile Recharge",
            category : "",
            utilities : "",
            phone : "",
            amount : "",
            state : ""

        },

        onSubmit : async (values) => {
            try{
                console.log(values)
               await paymentUtilities(values)
               alert("Recharged Successfully")

                navigate('/portal/dashboard/:uId')
            }catch (error){
                alert("Something went wrong")

            }
        }
    });

  return (
    <div class="container">
        <form onSubmit={formik.handleSubmit}>
        <div className='row mt-5'>
            <h1><b>Mobile Recharge</b></h1>
            <div className="col-lg-4">
           
        </div>     
        <div className="col-lg-4">
           
        </div>    
        <div className="col-lg-4">
            
        </div>    

                <div className='col-lg-6'>
                    <div className="form-group mt-3">
                        <label><b>Recharge Category:</b></label>
                        <select 
                        name='category'
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={"prepaid"}>Prepaid</option>
                            <option value={"postpaid"}>Postpaid</option>
                           
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-3">
                        <label><b>Choose Your Network:</b></label>
                        <select 
                        name='utilities'
                        onChange={formik.handleChange}
                        value={formik.values.utilities}

                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={'Jio'}>Jio</option>
                            <option value={'Airtel'}>Airtel</option>
                            <option value={'VI'}>VI</option>
                            
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Mobile Number:</b></label>
                        <input 
                        name='phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        type={"text"} className="form-control mt-2"/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Your Plan:</b></label>
                        <select 
                        name='amount'
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={'Rs.149 / 1.5GB / 28 Days'}>Rs.149 / 1.5GB / 28 Days</option>
                            <option value={'Rs.119 / 1GB / 20 Days'}>Rs.119 / 1GB / 20 Days</option>
                            <option value={'Rs.249 / 2GB / Month'}>Rs.249 / 2GB / Month</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'></div>

                <div className='col-lg-4'>
                    <div className="form-group mt-5">
                        <label><b>State:</b></label>
                        <select 
                        name='state'
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        className='form-control mt-2'>
                            <option>--Select--</option>
                            <option value={'tamilnadu'}>Tamilnadu</option>
                            <option value={'kerala'}>Kerala</option>
                            <option value={'andra'}>Andra</option>
                            <option value={'karnataka'}>Karnataka</option>
                            
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'></div>

                
                <div className='col-lg-4'>
                <div className='form-group mt-5'>
                        <input type={"submit"} className='btn btn-primary ' value={"Proceed"} />
                        
                    </div>

                </div>
                <div className='col-lg-4 '>
                <div className='form-group mt-5'>
                <Link to={"/portal/dashboard/:uId"} class="btn btn-primary" type="submit">Home</Link>
                    

                    </div>
                </div>

                
            </div>
        </form>
            
</div>
  )
}

export default Mobile