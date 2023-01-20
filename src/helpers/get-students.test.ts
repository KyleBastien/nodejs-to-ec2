import { getStudents } from "./get-students";

describe("getStudents", () => {
  it("should return two students", () => {
    expect(getStudents().length).toBe(2);
  });
});
