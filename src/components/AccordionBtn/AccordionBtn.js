import React, {useState, useRef} from 'react';
import './AccordionBtn.css';

export default function Accordion(props) {
    const [setActive, setActiveState]=useState('')
    const [setHeight, setHeightState]=useState('0px')

    const content=useRef(null)

    function toggleAccordion() {
        setActiveState(setActive===''? 'active':'')
        setHeightState(setActive==='active'? '0px':`${content.current.scrollHeight}px`)
    }
    return (
        <div className='expandable_btn'>
            <button className={`acc-btn acc-header ${setActive}`} onClick={toggleAccordion} aria-label="About page button">
                {props.header}
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className='expandable_btn_content'>
                <span>{props.content}</span>
            </div>
        </div>
    )
}
