import { render, screen } from "@testing-library/react";
import { AppButton, AppButtonTheme } from "shared/ui";

describe("AppButton", () => {
    test("btn with text", () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("btn with theme clear", () => {
        render(<AppButton theme={AppButtonTheme.REGULAR}>Test</AppButton>);
        expect(screen.getByText("Test")).toHaveClass("clear");
    });
});
