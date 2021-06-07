import React from 'react'
import PropTypes from 'prop-types'


const Button = ({title,id}) =>(

    <div className="text-white bg-dark w-100 p-2">
            {title}
    </div>
)
Button.propTypes =  {
        
    title : PropTypes.string,
    id : PropTypes.number

}
Button.defaultProps ={
    title:"Suscribime",
    id:1

}
export default Button