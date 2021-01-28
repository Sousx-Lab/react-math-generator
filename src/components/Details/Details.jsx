import React, { useState } from "react";
import {Operations, Operation } from '../Operation/Operations';
import { OperationGenerator } from '../../services/OpGenerator';

function Details({ type, description }) {

    const [mode, setMod] = useState('')
    
    return (
        <details className="p-2 m-2">
            <summary className="nes-btn is-info btn-lg btn-block mt-2" >{description}</summary>
            <div className="nes-container p-2 text-center">
                <p className="mb-1">MODE</p>
                <div className="btn-group mb-2">
                    <button className="nes-btn is-success m-2" onClick={() => setMod(10)}>EASY 👶</button>
                    <button className="nes-btn is-primary m-2" onClick={() => setMod(100)}>NORMAL 👱‍♂️</button>
                    <button className="nes-btn is-error m-2" onClick={() => setMod(1000)}>HARD 💀</button>
                </div>
                {mode && (
                    <Operations >
                     {[...new Array(3)].map((v,k) =>{
                        const op = new OperationGenerator(mode, type,)
                        return(
                             <Operation key={k} opType={type} mode={mode} op={op}/>
                        )
                     })}
                     </Operations>
                    )}
            </div>
        </details>
    )
}

export default Details
