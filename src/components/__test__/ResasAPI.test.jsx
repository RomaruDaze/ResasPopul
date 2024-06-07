import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ResasAPI from "../ResasAPI";

jest.mock("../../../Hooks/useResasAPI", () => ({
  __esModule: true,
  default: () => ({
    data: [
      { year: 2020, value: 100 },
      { year: 2021, value: 110 },
    ],
    setCityCode: jest.fn(),
    setPrefCode: jest.fn(),
    setCategory: jest.fn(),
  }),
}));

jest.mock("react-chartjs-2", () => ({
  Line: () => <div>Line Chart</div>,
}));

jest.mock("../../constants/CityOptions", () => ({
  default: jest.fn().mockReturnValue(Promise.resolve([])),
}));

describe("ResasAPI Component", () => {
  test("renders correctly", () => {
    render(<ResasAPI />);
    expect(screen.getByText("Line Chart")).toBeInTheDocument();
  });

  test("interaction with search box", () => {
    render(<ResasAPI />);
    const button = screen.getByRole("button", { name: "県名" });
    userEvent.click(button);
  });

  test("calls setPrefCode on selection", () => {
    render(<ResasAPI />);
    const button = screen.getByRole("button", { name: "県名" });
    userEvent.click(button);

  });
});
