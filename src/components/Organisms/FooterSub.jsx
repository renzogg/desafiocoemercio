import React from 'react'

const FooterSub = ({math}) => (

    <div className="bg-white fixed-bottom">

    { math ===1?
        <div>
            <div className="mx-3 p-2 d-flex justify-content-between">
                <span className="fontPrice1">Plan Premiun</span>
                <span className="fontPrice1">S/59 al mes</span>
            </div>
            <span className="d-flex justify-content-center  mb-3">
                cambiar a Plan Estandar 
            </span> 
        </div>:
        <div>
            <div className="mx-3 p-2 d-flex justify-content-between">
                <span className="fontPrice1">Plan Premiun</span>
                <span className="fontPrice1"> S/59 al mes</span>
            </div>
            <span className="d-flex justify-content-center  mb-3">
                cambiar a Plan Estandar 
            </span> 
        </div>
    
    
    }
     
    </div>
)

export default FooterSub