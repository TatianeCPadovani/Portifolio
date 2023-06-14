import React from "react";
import "./Section.css";




const Section = (props)=>{
    return(
      
        <div className="containerSection" data-aos="fade-up">
            

            
            <section className="containerImage" style={{order: props.orderimage}} >

                <img src={props.image} className="image"></img>

            </section>

            <section className="containerText" style={{order: props.ordertext}}>
                    <h1 className="titleSection" data-aos="slide-up">{props.title}</h1>
                    
                    
                    {props.text}
                </section>
               
        </div>
        
    )
}

export default Section;