import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./FormWrapper.css";

import Scrape from "./Scrape";
import FormSingle from "./FormSingleURL"

function FormWrapper() {
  const [url, updateURL] = useState("");
  const [loading, updateLoading] = useState(false);

  function onChange(e) {
    updateURL(e.currentTarget.value);
  }

  async function onSubmitSingle(e) {
    e.preventDefault();
    updateLoading(true);
    const res = await Scrape(url); // Scrape requested webpage
    updateLoading(false);

    // If an error is returned then raise Error toast
    if (res instanceof Error) {
      if (res.message) {
        toast.error(`Error: ${res.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        toast.error(`Unknown Error: ${res}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    } else {
      if (res && res.data.result) {
        // If the response includes an Airtable result then success
        toast.success(`Success! Your job is in progress!`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        updateURL("");
      } else {
        // Unknown status
        toast.error(`Unexpected response, please contact tiffany.m.moeller@gmail.com`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }
    
  }

  return (
    <div className="form-wrapper">
      <h1 className="form-header">Pull Advertisements</h1>
        <FormSingle showLoading={loading} onSubmitSingle={onSubmitSingle} onChangeSingle={onChange} url={url}/>
    </div>
  );
}

export default FormWrapper;
