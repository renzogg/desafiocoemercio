import React from 'react'
import PropTypes from 'prop-types'
import backimg from '../../images/left.svg'
import {Link} from 'react-router-dom'

const Banner =({conditionbanner})=>(
            <div>
                 {conditionbanner=== 2?
                        <div className="fixed-top backgroundBannerback text-white p-2">
                        <Link to={`/`}>   
                         <img className="backimg" src={backimg} alt="atras"/>
                            </Link>
                            <span className="h5">Tus Datos</span>
                        </div>:
                        <div className="fixed-top backgroundBanner text-white text-center f-10 p-2">
                            <span className="h4">Mag.</span>
                        </div>
                    }
            </div>
)
Banner.propTypes =  {
        
    conditionbanner : PropTypes.number
}
Banner.defaultProps ={
    conditionbanner:1

}
export default Banner