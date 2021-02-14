import React from "react";
import "./InfoBar.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as AirtableLink } from "../assets/link-icon.svg";

function InfoBar() {
  return (
    <div className="infobar">
      <div className="logo">
        <Logo aria-labelledby="new-name-logo" className="svg-content" />
      </div>
      <div className="airtable">
        <h2>Go to Airtable View</h2>
        <a href="https://airtable.com/tblA0176ZvEpHfyvB/viwXYVPPJwlsPDFBh?blocks=hide">
          <AirtableLink className="svg-content" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
