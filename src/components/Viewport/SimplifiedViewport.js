import React from 'react';
import EventContext from '../../contexts/EventContext';
import './Viewport.css';


export default class SimplifiedViewport extends React.Component {

    
  
    static contextType = EventContext;
    processDisplayText(displayText)
    {
        if(displayText)
        {
            let textLines = displayText.split('\n');
            displayText = [];
            for(const line in textLines)
            {
                
                displayText.push(<p key={line}>{textLines[line]}</p>);
            }

        }
        return displayText;
    }
    render() {
        return (
          <div className='viewport border'>
            {this.processDisplayText(this.context.story.displayText)}
          </div>
        )
      }
}  