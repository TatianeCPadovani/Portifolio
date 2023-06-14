import React from "react";
import "./SectionExtended.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";

const SectionExtended = (props)=>{
    return(
        <div className="sectionExtended" data-aos="fade-up">

            <div className="companyLogoContainer">
            <CompanyLogo companyLogo="/images/abinbev.png"/>
            <CompanyLogo companyLogo="/images/paypal.jpg"/>
            <CompanyLogo companyLogo="/images/linkedrh.jpg"/>
            </div>

            <div className="sectionExtendedtWO">


                <h1 data-aos="fade-down" data-aos-duration="10000">{props.title}</h1>
                {props.text}
            
            

            </div>
        </div>
    )
}

export default SectionExtended;