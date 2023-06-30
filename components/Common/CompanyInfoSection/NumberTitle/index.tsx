/*eslint-disable import/namespace*/

import React, { Fragment, useEffect } from 'react'
import { default as CountUp } from 'react-countup/build/index.js'
import { NumberTitleFragment } from '../../../../app/api/generated/graphql/graphql'


const NumberTitleBlock: React.FC<{item : NumberTitleFragment}> = ({ item }) => {
    const { number, title, addOn } = item || {}
    
useEffect(()=>{
// Selector
const counters = document?.querySelectorAll('.counter')
// Main function
for(let n of counters as any) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 1000; // change animation speed here
    const delay = 200;

    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
     setTimeout(() => {
      updateCount();
    }, delay);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}
},[item])
    return (
        <Fragment>
            <div className="countBox">
                <h4>
                    <div className="counter" data-target={number}>0</div>
                  {addOn ?  <span className="plus-sign">+</span> : ''}
                  
        
                </h4>
                <h6>{title}</h6>
            </div>
        </Fragment>
    )
}

export default NumberTitleBlock
