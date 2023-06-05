import React from "react";
import "./CompanyLogo.css";

const CompanyLogo = (props)=>{
    return(
           
                <div className="companyLogoContainer">
                    <img className="companyLogo" src={props.companyLogo} />
                </div>
            
    )
}

export default CompanyLogo;