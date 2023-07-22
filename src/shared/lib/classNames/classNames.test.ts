import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass", {}, [])).toBe("someClass");
    });

    test("with additional class", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            expected
        );
    });

    test("with additional class and different mods", () => {
        const expected = "someClass class1 class2 class3 class4";
        expect(
            classNames(
                "someClass",
                {
                    class3: true,
                    class4: true,
                    class5: undefined,
                    class6: false,
                },
                ["class1", "class2"]
            )
        ).toBe(expected);
    });
});
