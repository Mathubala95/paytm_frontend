import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { login } from './api/user'
import { config } from './config'



function Login() {
    const navigate = useNavigate()
    

    

    const formik = useFormik({
        initialValues: {
            // name:"",
            email: "",
            password: ""
        },


        
        validate: (values) => {
            let errors = {}

            // if (!values.name) {
            //     errors.name = "Required"
            // }

            if (!values.email) {
                errors.email = "Required"
            }

            if (!values.password) {
                errors.password = "Required"
            }

            return errors;
        },

        onSubmit: async (values) => {
            console.log(values)
            try{
                let loginreq = await login(values)
                localStorage.setItem(`${config.storage_key}`, loginreq.data.token)
                // await login(values)
                // navigate(`/portal/dashboard/${loginreq.data.uId}`)
                navigate(`/portal/dashboard/:uId`)
                console.log(loginreq);
                
            }catch(error){
                alert("Invalid email/password")
            }

        }
    })

    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form class="user" onSubmit={formik.handleSubmit}>
                        {/* <div class="form-floating mb-3">
                                <input 
                                type="text" 
                                name='name'
                                class="form-control" 
                                value={formik.values.name}    
                                onChange={formik.handleChange}
                                 placeholder="name@example.com" />
                                 {
                                                 formik.errors.name && <span>Required</span>
                                                }
                                <label for="inputEmail">User Name</label>
                            </div> */}
                            <div class="form-floating mb-3">
                                <input 
                                type="email" 
                                name='email'
                                class="form-control" 
                                value={formik.values.email}    
                                onChange={formik.handleChange}     
                                placeholder="name@example.com" />
                                {
                                                 formik.errors.email && <span>Required</span>
                                                }
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input 
                                type="password" 
                                name='password'
                                class="form-control" 
                                value={formik.values.password}    
                                onChange={formik.handleChange} 
                                placeholder="Password" />
                                <label for="inputPassword">Password</label>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                            </div>

                            <input
                                            type={"submit"}
                                            class="btn btn-primary btn-user btn-block"
                                            value={"Login"}
                                            Login
                                       
                                            />
                           
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


    )
}

export default Login