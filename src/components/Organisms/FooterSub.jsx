import React from 'react'
import {Link} from 'react-router-dom'
const FooterSub = ({match}) => (

    <div className="bg-white fixed-bottom">

    { 
        match.params.id ==="1"?
        <div>
            <div className="mx-3 p-2 d-flex justify-content-between">
                <span className="fontPrice1">Plan Premiun</span>
                <span className="fontPrice1">S/59 al mes</span>
            </div>
            <Link to={`/Subcribirme/2`}>   
            <span className="d-flex justify-content-center text-dark textOverline   mb-3">
                Cambiar a Plan Estandar 
            </span> 
            </Link>
        </div>:
        <div>
            <div className="mx-3 p-2 d-flex justify-content-between">
                <span className="fontPrice1">Plan Estandar</span>
                <span className="fontPrice1"> S/29 al mes</span>
            </div>
            <Link to={`/Subcribirme/1`}>   
                <span className="d-flex justify-content-center text-dark textOverline mb-3">
                    cambiar a Plan Premiun 
                </span> 
            </Link>
        </div>
    
    
    }
     
    </div>
)

export default FooterSub