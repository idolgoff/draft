import { fetchRetry } from "./fetch-retry";

test("Fetch retry", async () => {
  const result = await fetchRetry("http://ya.ru");
});
