import React from 'react'
import {Link} from 'react-router-dom'
import NavFooter from '../Molecules/NavFooter'
const FooterSub = ({match}) => (

    <div className="bg-white fixed-bottom">

     <NavFooter idnav={match.params.id}/>


    { 
        match.params.id ==="1"?
        <div>
            <Link to={`/Subcribirme/2`}>   
            <span className="d-flex justify-content-center text-dark textOverline   mb-3">
                Cambiar a Plan Estandar 
            </span> 
            </Link>
        </div>:
        <div>
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