import { generateMessage } from "./messages";

test("generates the message correctly", () => {
  const message = generateMessage();
  expect(message).toBe("Hello Papa Moussa FALL");
});
