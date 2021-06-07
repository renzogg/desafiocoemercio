import React from 'react'

const Forms = ({precio}) =>(

<form className="mt-5 px-4 py-1 backgroundFondo">
<div className="form-group mt-5">
    <label htmlFor="nameapellido" className="fontPrice0b">Nombre y Apellidos</label>
    <input type="text" className="form-control" id="nameapellido" aria-describedby="emailHelp"/>

  </div>
  <div className="form-group">
    <label htmlFor="numerotarjeta" className="fontPrice0b">Número de tarjeta</label>
    <div className="d-flex">

    <input type="password" className="form-control" id="numerotarjeta" aria-describedby="emailHelp"/>
    <button>card</button>
    </div>

  </div>
  <div className="form-group">

    
      <label htmlFor="FExpira" className="fontPrice0b">F. Expira</label>
        <input type="password" className="form-control" id="FExpira" placeholder="MM/AA"/>
    
      <div className="form-group">
        <label htmlFor="CVC" className="fontPrice0b">CVC</label>
        <input type="number" className="form-control" id="CVC"/>
      </div>
  </div>

  <button type="submit" className="btn btn-primary w-100 bg-dark">Pagar S/59 </button>
</form>
)

export default Forms