import { useState } from "react";

const ToggleForm = ({form, buttonText, altComponent}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const toggleDisplay = () => setDisplayState(displayState * -1)
  return ( 
    <div>
      {displayState === -1
      ?
        <>
          {altComponent ? altComponent : <></>}
          <button className='btn btn-primary m-2' onClick={()=> toggleDisplay()}>{buttonText}</button>
        </>
      :
        <>
          {form}
          <button className='btn btn-primary m-2' onClick={()=> toggleDisplay()}>cancel</button>
        </>        
      }
    </div>
  );
}

export default ToggleForm;