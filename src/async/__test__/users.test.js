import axios from "axios";
import getUsers from "../users";
// eslint-disable-next-line no-unused-vars

jest.mock("axios");

describe("users", () => {
  // eslint-disable-next-line jest/expect-expect
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValueOnce({ data: "hello" });
    await expect(getUsers()).resolves.toBe("hello");
  });

  test("should get users data with mock axios get version 2", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValueOnce({ data: "world" });
    await getUsers().then((data) => {
      expect(data).toBe("world");
    });
  });
});
