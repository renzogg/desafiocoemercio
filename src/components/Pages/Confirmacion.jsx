import React from 'react'
import Banner from '../Molecules/Banner'
import Footer from '../Molecules/Footer'
import checkimgen from '../../images/check.svg'

const Confirmacion = ({match}) =>(
    
    <>
    <Banner/>
    {console.log(match)}
        <div className="mt-5 py-4  vh-100 backgroundFondo ">
            <div className="mt-2">
                <div className="d-flex ">
                   <img className="checbienvenido" src={checkimgen} alt="check"/>
                </div>

            <div className="d-flex flex-column bd-highligh text-center m-4">


                <span className="fontPrice1 mt-1">Bienvenido, has adquirido el</span>
                {
                    match.params.id ==="1"?
                    <div className="d-flex flex-column ">
                    <span className="fontPrice2"> Plan Premiun</span>
                    <span className="fontPrice1">S/59 al mes</span>
                    </div>
                    :
                    <div className="d-flex flex-column ">
                    <span className="fontPrice2"> Plan Estandar</span>
                    <span className="fontPrice1">S/29 al mes</span>
                    </div>
                }
               
                
                <span className="mt-2 fontPrice0 ">Lorem10  sadasdjasdkl jasd askldjaskldj askdasdasd asd asd asd asd asd asd asd asdas das dkljaasd asd asd s dklajld</span>
                <span className="textOverline mt-5">Ir a ver mi plan</span>
            </div>

            </div>

        </div>

        <Footer/>
    </>
    )
export default Confirmacion

