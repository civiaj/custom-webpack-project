// import { fireEvent, screen } from "@testing-library/react";
// import { Counter } from "./Counter";
// import { RenderOnTestWrapper } from "shared/config/tests/RenderOnTestWrapper";

// describe("Counter", () => {
//     test("render test", () => {
//         RenderOnTestWrapper(<Counter />, {
//             preloadedState: { counter: { value: 10 } },
//         });
//         expect(screen.getByTestId("value-title")).toHaveTextContent("10");
//     });
//     test("increment", () => {
//         RenderOnTestWrapper(<Counter />, {
//             preloadedState: { counter: { value: 10 } },
//         });
//         const incrBtn = screen.getByTestId("incr-btn");
//         fireEvent.click(incrBtn);
//         expect(screen.getByTestId("value-title")).toHaveTextContent("11");
//     });
//     test("decrement", () => {
//         RenderOnTestWrapper(<Counter />, {
//             preloadedState: { counter: { value: 10 } },
//         });
//         const decrBtn = screen.getByTestId("decr-btn");
//         fireEvent.click(decrBtn);
//         expect(screen.getByTestId("value-title")).toHaveTextContent("9");
//     });
// });
