import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];



const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <string>{props.price.toFixed(2)}</string></p>
        {controls.map(ctrl => (
            
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                check={props.disabled[ctrl.type]}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} />
        ))}
        <button className='OrderButton' onClick={props.purchased} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)

export default buildControls