import {
    addCommentFormActions,
    addCommentFormReducer,
} from "./addCommentFormSlice";
import { addCommentFormSchema } from "../types/addCommentFormSchema";

describe("addCommentFormSlice.test", () => {
    test("setText", () => {
        const state: addCommentFormSchema = {
            text: "Test",
        };
        expect(
            addCommentFormReducer(
                state,
                addCommentFormActions.setText("New Text")
            )
        ).toBe("New Text");
    });
});
