const axios = require("axios");

export default async function Scrape(target) {
  if (target != null && target !== "") {
    return await axios({
        method: "post",
        url:
          "https://zeara0o9ih.execute-api.eu-west-2.amazonaws.com/dev/scrape",
        data: {
          url: target,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    // TODO: Add banner at top of page which will give error message when error encountered
  }
}
