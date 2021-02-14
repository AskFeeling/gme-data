import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "../App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

function setup() {
  return render(
      <App />
  );
}

jest.mock("axios");

describe("Static assets in App render as expected", () => {
  test("renders pull advertisements header", () => {
    setup();
    const header = screen.getByText(/Pull Advertisements/i);
    expect(header).toBeInTheDocument();
  });

  test("renders airtables link", () => {
    setup();
    const link = screen.getByRole('link', { name: /link-icon.svg/i });
    expect(link).toBeInTheDocument();
  });
});

describe("App renders as expected after form submitted", () => {
  test("successfully triggers scrape API call on valid form submission", async () => {
    const validURL = 'https://megapersonals.eu/hello/test'
    const data = {
      data: {
        result: {
          message: '{"records":[{"id":"receRPF1ngykMi5Ha"}]}',
          success: true,
        },
      },
    };
    axios.mockResolvedValueOnce(data);
    setup();

    const singleURLInput = screen.getByPlaceholderText('https://example.com');
    userEvent.type(singleURLInput, validURL);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
      userEvent.click(submitButton);
    })

    expect(axios).toHaveBeenCalledWith({
      method: "post",
      url: "https://zeara0o9ih.execute-api.eu-west-2.amazonaws.com/dev/scrape",
      data: {
        url: validURL,
      },
    });
    // TODO: Test that success toast notification appears on successful API response
  });

  test("submit button not enabled for invalid form submission", async () => {
    const invalidURL = 'https://invalidhostname.com'
    const data = {
      data: {
        result: {
          message: '{"records":[{"id":"receRPF1ngykMi5Ha"}]}',
          success: true,
        },
      },
    };
    axios.mockResolvedValueOnce(data);
    setup();

    const singleURLInput = screen.getByPlaceholderText('https://example.com');
    userEvent.type(singleURLInput, invalidURL);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
      userEvent.click(submitButton);
    })

    expect(submitButton).toBeDisabled(false);
    expect(axios).toHaveBeenCalledTimes(0);
    // TODO: Test that error toast notification appears on failing API response
  });
});