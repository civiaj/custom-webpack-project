import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { RenderOnTestWrapper } from "shared/config/tests/RenderOnTestWrapper";

describe("Sidebar", () => {
    test("render test", () => {
        RenderOnTestWrapper(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle test", () => {
        RenderOnTestWrapper(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
