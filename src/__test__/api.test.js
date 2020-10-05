import { performAction } from "../client/js/api";

describe("check performAction function's functionality", () => {
	test("performAction function is defined", () => {
		expect(performAction).toBeDefined();
	});

	test("performAction is a function", () => {
		expect(typeof performAction).toBe("function");
	});
});
