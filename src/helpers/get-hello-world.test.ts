import { getHelloWorld } from "./get-hello-world";

describe("getHelloWorld", () => {
  it("returns hello world", () => {
    expect(getHelloWorld()).toEqual("Hello World");
  });
});
