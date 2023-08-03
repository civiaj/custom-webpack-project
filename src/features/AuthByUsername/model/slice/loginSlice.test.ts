import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/LoginSchema";

describe("loginSlic.test", () => {
    test("set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("Test Name")
            )
        ).toEqual({
            username: "Test Name",
        });
    });
    test("set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("Test Password")
            )
        ).toEqual({
            password: "Test Password",
        });
    });
});
