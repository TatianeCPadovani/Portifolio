import React from "react";
import "./SectionExtended.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";

const SectionExtended = (props)=>{
    return(
        <div className="sectionExtended">

            <div className="companyLogoContainer">
            <CompanyLogo companyLogo="/images/abinbev.png"/>
            <CompanyLogo companyLogo="/images/paypal.jpg"/>
            <CompanyLogo companyLogo="/images/linkedrh.jpg"/>
            </div>

            <div className="sectionExtendedtWO">


                <h1>{props.title}</h1>
                {props.text}
            
            

            </div>
        </div>
    )
}

export default SectionExtended;