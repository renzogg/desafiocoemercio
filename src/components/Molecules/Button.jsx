import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Button = ({title,condition}) =>(
    <Link to={`/Subcribirme/${condition}`}>   
        <div className="text-white bg-dark w-100 p-2">    
                    {title}        
        </div>
    </Link>
)
Button.propTypes =  {
        
    title : PropTypes.string,
    condition : PropTypes.number

}
Button.defaultProps ={
    title:"Suscribime",
    condition:1

}
export default Button