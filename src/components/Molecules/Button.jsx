import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Button = ({title,condition,confirmacion}) =>(
    <>
    {
        confirmacion === 0?
            <Link to={`/Subcribirme/${condition}`}>   
                <div className="text-white text-center bg-dark w-100 p-2">    
                    {title}        
                </div>
            </Link>
             :
         
            <Link to={`/Confirmacion/${confirmacion}`}>   
                <div className="text-white text-center bg-dark w-100 p-2">    
                    {title}        
                </div>
            </Link>
          
    }
    </>
)
Button.propTypes =  {
        
    title : PropTypes.string,
    condition : PropTypes.number,
    confirmacion: PropTypes.number
}
Button.defaultProps ={
    title:"Suscribime",
    condition:1,
    confirmacion:0

}
export default Button