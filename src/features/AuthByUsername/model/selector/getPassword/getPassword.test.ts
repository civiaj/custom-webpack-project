import { RootState } from "app/providers/StoreProvider";
import { getPassword } from "./getPassword";

describe("getPassword.test", () => {
    test("return login password", () => {
        const state: DeepPartial<RootState> = {
            login: { password: "password" },
        };
        expect(getPassword(state as RootState)).toEqual("password");
    });

    test("empty isLoading", () => {
        const state: DeepPartial<RootState> = {};
        expect(getPassword(state as RootState)).toEqual("");
    });
});
