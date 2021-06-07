import React from 'react'
import CheckImg from '../Atoms/CheckImg'
import Banner from '../Molecules/Banner'
import Footer from '../Molecules/Footer'

const Confirmacion = ({precio}) =>(
    
    <>
    <Banner/>
        <div className="mt-5 py-4 ">
            <div className="mt-4">
                <div className="d-flex ">
                    <CheckImg/>
                </div>

            <div className="d-flex flex-column bd-highligh text-center m-4">


                <span className="fontPrice1 mt-1">Bienvenido, has adquirido el</span>
                <span className="fontPrice2"> Plan Premiun</span>
                <span className="fontPrice1">Pagar S/{precio}</span>
                <span className="mt-2 fontPrice0 ">Lorem10  sadasdjasdkl jasd askldjaskldj askdasdasd asd asd asd asd asd asd asd asdas das dkljaasd asd asd s dklajld</span>
                <span className="textOverline mt-5">Ir a ver mi plan</span>
            </div>

            </div>

        </div>

        <Footer/>
    </>
    )
export default Confirmacion

