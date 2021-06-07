import React from 'react'
import Banner from '../Molecules/Banner'
import FooterSub from '../Organisms/FooterSub.jsx'
import Forms from '../Organisms/Forms'

const Subcribirme = ({match}) =>(
   
    <div className="mt-5">
        <Banner conditionbanner={2}/>
        <Forms precio={match}/>  
        <FooterSub foot={match.params.id} />
    </div>
)

export default Subcribirme