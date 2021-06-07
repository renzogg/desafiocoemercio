import React from 'react'
import Banner from './Molecules/Banner'
import Contenido from './Organisms/Contenido'
import Plans from './Organisms/Plans'
import Welcome from './Pages/Confirmacion'
import SubEstandar from './Pages/Subcribirme'

const Content = () =>(
    <div className="backgroundFondo vh-100">
       <Banner conditionbanner ={1}/>
       <Contenido/>
    </div>
)


export default Content

// <Bannerack/>
// <Header/>
// <Plans/>
// </div>