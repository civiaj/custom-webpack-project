import { render, screen } from "@testing-library/react";
import { AppButton, AppButtonTheme } from "shared/ui/AppButton";

describe("AppButton", () => {
    test("btn with text", () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("btn with theme clear", () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug();
    });
});
