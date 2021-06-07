import React from 'react'
{/* <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li> */}


const PlansDetails = ({condition}) =>(
          
  <div>
        
          {condition === 1?
            <ul className="fontlist">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
              </ul> :
              <ul className="fontlist">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li className="textcolorGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li className="textcolorGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
              </ul> 
          }
  </div>
)



export default PlansDetails