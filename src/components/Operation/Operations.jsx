import React, { useState } from 'react';

export function Operations({ children }){
    const[ childrenArray, setChildrenArray] = useState(React.Children.toArray(children))

    
    function showResultat() {
        let newChildren = childrenArray.map(child =>{
            return React.cloneElement(child, {show: true})
        })
        setChildrenArray(newChildren);
    }
    return (
        
        <div className="m-4">
            {childrenArray}
            <div className="mt-4">
                <button type="submit" className="nes-btn is-success" onClick={showResultat}>Correction</button>
            </div>
        </div>
    )
}

export function Operation({opType, mode, op, show}){
    
    return(
        <div className="d-flex align-items-center mt-2 justify-content-center">
            {mode && (
                <>
                <div className="lead">{op.num1 + " " + opType + " " + op.num2 + "" + "="}</div>
                <div style={{ width: "120px" }}>
                    <input className={`ml-3 nes-input ${show ? 'is-success' : ''}`} name={"response"} style={{ maxHeight: "30px", paddingRight: "0" }} type="number" pattern="[0-9]" />
                </div>
                <div className="ml-4" hidden={!show}>{op.resultat}</div>
                </>
            )}
                
        </div>
        )
}