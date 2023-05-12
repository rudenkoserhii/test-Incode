import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import App from "./App";
import axios from "axios";

// Test1
test("renders App", () => {
  render(<App />);
});

// Test2
test("check rendering Main", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});

// Test3
test("renders Button", () => {
  render(<App />);
  expect(screen.queryByTestId("button")).toHaveTextContent(/^Load issues$/);
});

// Test4
test("renders Input", () => {
  render(<App />);
  expect(screen.getByRole("input")).toHaveProperty(
    "placeholder",
    "Enter repo url"
  );
});

// Test 5
test("test get data", async () => {
  const url =
    "https://api.github.com/repos/facebook/react/issues?state=open&assignee=*&page=1";

  const { data } = await axios.get(url);

  //Check response length
  expect(data.length).toBeLessThanOrEqual(30);
  //Check issue id
  data.forEach((element) => {
    expect(element.id).toBeTruthy();
  });
});
