import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Main from "./Main"

describe("Main", () => {

    test("renders the expected texts and image in the Main component", () => {
        render(<Main />)

        expect(screen.getByText("One does not simply")).toBeInTheDocument()
        expect(screen.getByText("Walk into Mordor")).toBeInTheDocument()
        expect(screen.getByRole("img").src).toBe("https://i.imgflip.com/1bij.jpg")
        
    } )

    test("renders the labels, input fields and button in the Main component", () => {
        render(<Main />)

        expect(screen.getByText("Top Text")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument()
        expect(screen.getByRole("button").textContent).toBe("Get a new meme image 🖼")

    })


})