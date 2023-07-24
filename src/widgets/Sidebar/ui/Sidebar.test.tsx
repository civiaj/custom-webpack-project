import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe("Sidebar", () => {
    test("render test", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle test", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
