import React from 'react'

const NavFooter = ({idnav}) =>(
    <>      {console.log(idnav)}
            {idnav==="1"?
                <div className="mx-3 p-2 d-flex justify-content-between">
                    <span className="fontPrice1">Plan Premiun</span>
                    <span className="fontPrice1">S/59 al mes</span>
                </div>
                :
                <div className="mx-3 p-2 d-flex justify-content-between">
                <span className="fontPrice1">Plan Estandar</span>
                <span className="fontPrice1"> S/29 al mes</span>
            </div>}
        </>
)

export default NavFooter