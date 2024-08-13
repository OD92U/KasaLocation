import '../../styles/Collapse.css'
import React, { useState, useCallback } from 'react';

function Collapse({ title, body} ) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = useCallback(() => {
      setIsExpanded((isExpanded) => !isExpanded);
    }, []);
  
    return (
      <>
        <button className='CollapseButton' onClick={toggleIsExpanded}>{title}</button>
        <div
          className="CollapseBody"
          style={{ height: isExpanded ? "100px" : "0px" }}
        ><p>{body}</p>
        </div>
      </>
    );
  };

  export default Collapse