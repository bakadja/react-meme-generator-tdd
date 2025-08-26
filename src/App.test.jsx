import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import App from "./App";



describe("App", () => {

    test("updates the top text", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<App />);
      const topTextbox = screen.getAllByRole("textbox")[0];
    
      // Act
      await user.clear(topTextbox);
      await user.type(topTextbox, "A coder does not simply");
    
      // Assert
      expect(screen.getByText("A coder does not simply")).toBeInTheDocument();
    });

    test("updates the bottom text when user edits the second textbox", async () => {
      //Arrange
      const user = userEvent.setup();
      render(<App />);
      const bottomBox = screen.getAllByRole("textbox")[1];
    
      //Act
      await user.clear(bottomBox);
      await user.type(bottomBox, "Code without coffee");
    
      //Assert
      expect(screen.getByText("Code without coffee")).toBeInTheDocument();
    });

    test(`displays a new image when clicking the "Get a new meme image 🖼" button`, async() => {

        //Arrange
        const user = userEvent.setup()
        render(<App />)
        const button = screen.getByRole("button")

        //Act
        await user.click(button)

        //Assert
        const images = screen.getAllByRole("img")
        expect(images[1].src).toBe("https://i.imgflip.com/1c1uej.jpg")
    })
})


