import React, { useState, useEffect } from "react";


function FormSingle({showLoading, onSubmitSingle, onChangeSingle, url}) {
    const [validURL, updateValidURL] = useState(false);

    // Every time the url prop is updated, check if valid and disable submit button if not
    useEffect(() => {
        if (
            // TODO: Use hostnames from Airtables as source of truth for valid hostnames
            // TODO: Check that URL is not already in Airtables before actually scraping, raise informative warning in banner if duplicate
            url != null &&
            url !== "" &&
            url.substring(0,24) === "https://megapersonals.eu"
        ) {
            updateValidURL(true)
        } else {
            updateValidURL(false)
        }
      }, [url]);

    return (
    <form
      className="single-url-scrape"
      autoComplete="off"
      onSubmit={onSubmitSingle}
    >
      <div className="single-input">
        <p>Pull from a specific url:</p>
        <input
          className="search-bar"
          type="text"
          name="url"
          onChange={onChangeSingle}
          placeholder="https://example.com"
          value={url}
        />
        <button
          type="submit"
          className="primary"
          onClick={onSubmitSingle}
          disabled={!validURL || showLoading}
        >
        {showLoading ? `Loading...` : `Submit`} </button>
      </div>
    </form>
    )
};

export default FormSingle