import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormSingleURL from "../components/FormSingleURL";

describe("Form to submit requests to scrape single target URL", () => {
  test("user input successfully calls parent onChange function for each keystroke", async () => {
    // Mount form, add url input and submit
    const onChange = jest.fn().mockResolvedValueOnce(true);
    const onSubmit = jest.fn().mockResolvedValueOnce(true);

    render(<FormSingleURL onChangeSingle={onChange} onSubmitSingle={onSubmit}/>);
    const singleURLInput = screen.getByPlaceholderText('https://example.com');
    userEvent.type(singleURLInput, "123456789" );
    
    expect(onChange).toHaveBeenCalledTimes(9);
  })
});
