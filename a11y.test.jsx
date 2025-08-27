import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./src/App";

test(`renders the meme image with accessible alt text "One Does Not Simply"`, () => {
    render(<App/>)
    expect(screen.getByAltText("One Does Not Simply")).toBeInTheDocument()
})