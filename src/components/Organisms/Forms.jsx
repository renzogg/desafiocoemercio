import React from 'react'

const Forms = () =>(

<form className="mt-5 px-4 py-1">
<div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Numero de tarjeta</label>
    <div className="d-flex">

    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button>card</button>
    </div>

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary w-100 bg-dark">Submit</button>
</form>
)

export default Forms