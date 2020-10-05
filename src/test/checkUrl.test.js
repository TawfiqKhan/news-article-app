import { validateUrl } from "../client/js/checkUrl";

describe("test validateUrl function", () => {
    test("validateUrl fucntion is defined", () => {
        expect(validateUrl).toBeDefined();
    });

    test("validateUrl should return true when a valid Url is entered", () => {
        const sampleUrls = [
            "https://www.google.com",
            "http://www.google.com",
            "https://google.com",
            "http://google.com",
            "www.google.com",
            "google.com",
            "google.com/path",
        ];

        sampleUrls.forEach((url) => {
            expect(validateUrl(url).toBeTruthy);
        });
    });

    test("validateUrl should return false when an invalid Url is entered", () => {
        expect(validateUrl("google.").toBeFalsy);
    });
});
