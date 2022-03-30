import { useState } from "react";

const ToggleForm = ({form, buttonText, altComponent}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const toggleDisplay = () => setDisplayState(displayState * -1)
  return ( 
    <>
      {displayState === -1
      ?
        <>
          {altComponent ? altComponent : <></>}
          <button onClick={()=> toggleDisplay()}>{buttonText}</button>
        </>
      :
        <>
          {form}
          <button onClick={()=> toggleDisplay()}>cancel</button>
        </>        
      }
    </>
  );
}
 
export default ToggleForm;