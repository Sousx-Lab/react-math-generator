import React, { useReducer, useRef } from "react";
import Details from '../components/Details/Details';

function ExoPage() {
    return (
        <div>
            <div className="message-list d-flex justify-content-start">
                <div className="message-left">
                    <i className="nes-kirby"></i>
                    <div className="nes-balloon from-left">
                        <p> Ici tu peux choisire les opérations 
                            mathématiques<br/> et le niveau de difficulté.
                        </p>
                    </div>
                 </div>
                </div>
                <section className="">
                    <Details type={'X'} description="Les Multiplications (10 ✖ 5)" />
                    <Details type={'-'} description="Les Soustractions (10 ➖ 5)" />
                    <Details type={'+'} description="Les Additions (10 ➕ 5)" />
                    <Details type={'/'} description="Les Divisions (10 ➗ 5)" />
                </section>
            </div>
   )
}

export default ExoPage;