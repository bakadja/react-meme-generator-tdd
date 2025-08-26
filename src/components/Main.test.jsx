import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Main from "./Main"

describe("Main", () => {

    test(`shows the actual text lines "One does not simply"`, () => {
        render(<Main />)
        expect(screen.getByText("One does not simply")).toBeInTheDocument()
    })

    test(`shows the actual text lines "Walk into Mordor"`, () => {
        render(<Main />)
        expect(screen.getByText("Walk into Mordor")).toBeInTheDocument()
    })

    test(`check that the img with the src`, () => {
        render(<Main />)
        expect(screen.getByRole("img").src).contain("https://i.imgflip.com/1bij.jpg")
    })



})