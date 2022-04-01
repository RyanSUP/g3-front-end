import { useState } from "react";

const ToggleForm = ({ form, buttonText, altComponent }) => {
  const [displayState, setDisplayState] = useState(-1)
  const toggleDisplay = () => setDisplayState(displayState * -1)
  return (
    <div>
      {displayState === -1
        ?
        <>
          {altComponent ? altComponent : <></>}
          <div className="text-center">
            <button className='btn btn-primary m-2 greenBtn' onClick={() => toggleDisplay()}>{buttonText}</button>
          </div>
        </>
        :
        <>
          {form}
          <button className='btn btn-primary m-2 greenBtn' onClick={() => toggleDisplay()}>cancel</button>
        </>
      }
    </div>
  );
}

export default ToggleForm;