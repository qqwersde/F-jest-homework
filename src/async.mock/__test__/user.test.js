import axios from "axios";
import { register } from "../user";
// eslint-disable-next-line jest/no-mocks-import
import { verifyUsername } from "../__mocks__/verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const userName = "mock username";
    const password = "mock password";
    axios.post.mockResolvedValueOnce({ data: { userName, password } });
    await register(userName, password).then((data) => {
      expect(data).toStrictEqual({ userName, password });
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const userName = "mock username";
    const password = "mock password";
    verifyUsername.mockReturnValueOnce(false);
    axios.post.mockRejectedValueOnce(new Error("wrong username or password"));
    // eslint-disable-next-line jest/valid-expect-in-promise
    await expect(register(userName, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
