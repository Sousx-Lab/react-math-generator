import React, { useEffect, useState } from 'react';

export function Operations({ children, mode }){
    
    const [childrenArray, setChildrenArray] = useState(React.Children.toArray(children))

    function showResultat() {
        let newChildren = childrenArray.map(child =>{
            return React.cloneElement(child, {show: true})
        })
        setChildrenArray(newChildren);
    }
  
    useEffect(() => {
        setChildrenArray(React.Children.toArray(children))
    },[mode])
    
    return (
        <div className="m-4">
            {childrenArray}
            <div className="mt-4">
                <button type="submit" className="nes-btn is-success" onClick={showResultat}>Correction</button>
            </div>
        </div>
    )
}

export function Operation({opType, op, show = false}){
    
    const [response, SetResponse] = useState({
        value: '',
        success: ''
    })
    function onResponse({ currentTarget }){
        SetResponse({value : parseInt(currentTarget.value, 10)})
    }

    useEffect(() => {
        SetResponse({value : '', success : ''})
    },[op])

    useEffect(()=> {
        if(show && response.value === op.resultat){
            SetResponse({success :'is-success'})
        }else if (show && response.value !== op.resultat ){
           SetResponse({success : ' is-error'})
        }
    },[show])
    return(
        <div className="d-flex align-items-center mt-2 justify-content-center">
           <div className="lead">{op.num1 + " " + opType + " " + op.num2 + " " + "="}</div>
                <div style={{ width: "120px" }}>
                    <input className={`ml-3 nes-input ${response.success}`} onChange={onResponse} value={response.value} style={{ maxHeight: "30px", paddingRight: "0" }} type="number" pattern="[0-9]" />
                </div>
                <div className="ml-4" hidden={!show}>{op.resultat}</div>
            </div>
        )
}