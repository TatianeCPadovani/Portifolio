import React from "react";
import "./Section.css";

const Section = (props)=>{
    return(
        <div className="containerSection">
            <section className="containerImage" style={{order: props.orderimage}}>

                <img src={props.image} className="image"></img>

            </section>

            <section className="containerText" style={{order: props.ordertext}}>
                    <h1>{props.title}</h1>
                    {props.text}
                </section>

        </div>
    )
}

export default Section;