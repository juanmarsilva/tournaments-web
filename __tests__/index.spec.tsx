/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", {
            name: 'Home!!!',
        });

        expect(heading).toBeDefined();
    });
});