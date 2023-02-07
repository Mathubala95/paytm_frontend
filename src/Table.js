import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { listUtilities } from './api/utilities'


function Table() {
    
    const [tables,settables] = useState([]);
    const [isLoading,setIsLoading] = useState(false);  
    useEffect ( () => {
        fetchData()
    },[])

    async function fetchData() {
      try {
          let res = await listUtilities()
          settables(res.data);
      } catch (error) {
          alert("Something went wrong")
      }
  }

    

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
        <h1 class="h3 mb-0 text-gray-800">MY BILLS</h1>
        <Link to={"/portal/dashboard/:uId"} href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Dashboard</Link>
      </div>
      
          
  
{
       isLoading ? <div class="spinner-border text-secondary" role="status">
       <span class="visually-hidden">Loading...</span>
     </div> : <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">List</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Utility</th>
                <th>Amount</th>               

              </tr>
            </thead>
            <tbody>
                {
                    tables.map((item) => {
             return <tr>
                      <td>{item.title}</td>
                      <td>{item.utilities}</td>
                      <td>{item.amount}</td>
                      
                        
                         
                    </tr>
                    })

                }
            </tbody>
            </table>
            </div>
            </div>
            </div>

}
</div>  
  )
}

export default Table