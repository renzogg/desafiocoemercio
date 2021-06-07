import React from 'react'
import Bannerback from '../Molecules/Bannerback'
import Banner from '../Molecules/Banner'
import FooterSub from '../Organisms/FooterSub.jsx'
import Forms from '../Organisms/Forms'

const Subcribirme = ({match}) =>(
    <div className="mt-5">
        <Banner conditionbanner={2}/>
        <Forms />  
        <FooterSub foot={match.params.id} />
    </div>
)

export default Subcribirme