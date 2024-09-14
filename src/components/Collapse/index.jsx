import '../../styles/Collapse.scss'
import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


function Collapse({ title, body} ) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [rotate, setRotation] = useState(0);
    const toggleIsExpanded = useCallback(() => {
      setIsExpanded((isExpanded) => !isExpanded);
    }
    , []);
    const rotateIcon = () => {
      if (rotate===0) {
        setRotation((rotate) => (rotate=180))
      }
      if (rotate===180) {
        setRotation((rotate) => (rotate=0))
      }
    };

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
        <button className='CollapseButton' onClick={() => {rotateIcon(); toggleIsExpanded()}}>{title}<FontAwesomeIcon icon={faChevronUp} rotation={rotate}/></button>
        <div
          className="CollapseBody"
          style={{ height: isExpanded ? "auto" : "0px" }}
        ><div className='collapseList'>{List()}</div>
        </div>
        </div>
      </>
    );
  };

  export default Collapse