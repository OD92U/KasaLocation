import '../../styles/Collapse.scss'
import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


function Collapse({ title, body} ) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = useCallback(() => {
      setIsExpanded((isExpanded) => !isExpanded);
    }
    , []);

    var trueBody = body

    if (typeof(body)==='string') {
      trueBody = [body]
    }

    function List() {
      const listItems = trueBody.map((item, i) =>
        <li key={i}>{item}</li>
      );
      return <ul>{listItems}</ul>;
    }

    return (
      <>
        <div className='totalCollapse'>
        <button className='CollapseButton' onClick={() => {toggleIsExpanded()}}>{title}<FontAwesomeIcon icon={faChevronUp} className='faChevronUp' style={{ rotate: isExpanded ? "-180deg" : "0deg" }} /></button>
        <div
          className="CollapseBody"
          style={{ maxHeight: isExpanded ? "200px" : "0px" }}
        ><div className='collapseList'>{List()}</div>
        </div>
        </div>
      </>
    );
  };

  export default Collapse