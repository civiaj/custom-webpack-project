import { RootState } from "app/providers/StoreProvider";
import { getUsername } from "./getUsername";

describe("getUsername.test", () => {
    test("return login username", () => {
        const state: DeepPartial<RootState> = {
            login: { username: "Username" },
        };
        expect(getUsername(state as RootState)).toEqual("Username");
    });
    test("empty username", () => {
        const state: DeepPartial<RootState> = {};
        expect(getUsername(state as RootState)).toEqual("");
    });
});
