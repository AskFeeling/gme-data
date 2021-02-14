import Scrape from "../components/Scrape";
import axios from "axios";

jest.mock("axios");

describe("Submit requests to scrape single target URL", () => {
  test("successfully fetches data from the API", async () => {
    const data = {
      data: {
        result: {
          message: '{"records":[{"id":"receRPF1ngykMi5Ha"}]}',
          success: true,
        },
      },
    };
    axios.mockResolvedValueOnce(data);

    await expect(Scrape("successful")).resolves.toEqual(data);

    expect(axios).toHaveBeenCalledWith({
      method: "post",
      url: "https://zeara0o9ih.execute-api.eu-west-2.amazonaws.com/dev/scrape",
      data: {
        url: "successful",
      },
    });
  });

  test("fails to fetch data from the API", async () => {
    const errMessage = "Request failed with status code 404";
    axios.mockRejectedValueOnce(new Error(errMessage));
    await expect(Scrape("failure")).resolves.toThrow(errMessage);
  });
});
