import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/LoginSchema";
import { DeepPartial } from "@reduxjs/toolkit";

describe("loginSlic.test", () => {
    test("set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername("Test Name"))).toBe({
            username: "Test Name",
        });
    });
    test("set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword("Test Password"))).toBe({
            password: "Test Password",
        });
    });
});
