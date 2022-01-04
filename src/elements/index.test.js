import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { BrowserRouter as Router } from "react-router-dom";

test("ketika di clik disable", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("ketika di render/ spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("ketika di render  tag <a>", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("ketika di render <Link> Component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
