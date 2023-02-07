import React from 'react'

function User() {
    return (
        <div class="container">
            <div className='row'>
            <h1><b>PRODUCTS</b></h1>
            <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>User Name:</b></label>
          <input type={"text"} className="form-control"/>
        </div>
        </div>     
        <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>Email:</b></label>
          <input type={"text"} className="form-control"/>
        </div>
        </div>    
        <div className="col-lg-4">
            <div className='form-group mt-3'>
          <label><b>Phone:</b></label>
          <input type={"text"} className="form-control"/>
        </div>
        </div>    

                <div className='col-lg-6'>
                    <div className="form-group mt-3">
                        <label><b>Product Category:</b></label>
                        <select className='form-control mt-2'>
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
                        <select className='form-control mt-2'>
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
                        <select className='form-control mt-2'>
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
                        <select className='form-control mt-2'>
                            <option>--Select--</option>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-group mt-5">
                        <label><b>Quantity:</b></label>
                        <select className='form-control mt-2'>
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
                        <select className='form-control mt-2'>
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
                    <button class="btn btn-primary" type="submit">Tables</button>

                    </div>

                </div>
            </div>
</div>
            )
}

            export default User