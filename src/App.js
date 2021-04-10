import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import ReactInputDateMask from "./ReactInputDateMask";

function App() {
    const [state, setState] = useState('')
    
    const className = 'inputMask'
    const onChange = (value) => {
        setState(value)
    }
    
    const appRef1 = useRef();
    const appRef2 = useRef();
    
    useEffect(() => {
       appRef1.current.focus();
        appRef1.current.select();
    }, [])
    
    return (
        <div className="App">
            <label className='label'>
                <span className='example-label'>Date:</span>
                <div>
                    <ReactInputDateMask
                      mask='dd/mm/yyyy'
                      showMaskOnFocus={false}
                      className={className}
                      value=''
                      onChange={onChange}
                      showMaskOnHover={true}
                      ref={appRef1}
                    />
                    <span className='comment'>dd/mm/yyyy</span>
                </div>

            </label>
            <label className='label'>
                <span className='example-label'>Date:</span>
                <div>
                    <ReactInputDateMask
                      mask='mm/dd/yyyy'
                      showMaskOnFocus={true}
                      className={className}
                      value=''
                      onChange={onChange}
                      showMaskOnHover={true}
                      ref={appRef2}
                    />
                    <span className='comment'>mm/dd/yyyy</span>
                </div>

            </label>
        </div>
    );
}

export default App;
