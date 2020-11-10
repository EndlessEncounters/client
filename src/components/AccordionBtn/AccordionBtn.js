import React, { useState, useRef } from 'react';
import './AccordionBtn.css';

export default function Accordion(props) {
    const [ setActive, setActiveState ] = useState('')
    const [ setHeight, setHeightState ] = useState('0px')

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`)
    }
    return (
        <div className='acc'>
             <div className='acc-outer'>
                 <button className={`acc-btn acc-header ${setActive}`} onClick={toggleAccordion}>
                    {props.header}
                 </button>
             </div>
             <div ref={content} style={{ maxHeight: `${setHeight}` }} className='acc-inner'>
                <p className='acc-content'>
                    {props.content}
                </p>
             </div>
        </div>
    )
}