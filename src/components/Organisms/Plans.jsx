import React from 'react'
import PlansPrice from '../Molecules/PlansPrice'
import PlansDetails from '../Molecules/PlansDetails'
import Button from '../Molecules/Button'

const Plans = ({price,condition,title}) =>(
    <div className="bg-white m-4 shadow  bg-white rounded ">
        <PlansPrice price={price}/>
        <PlansDetails condition={condition}/>
        <Button name={title}/>
    </div>
)



export default Plans