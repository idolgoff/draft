export const fetchRetry = async (url, attempts = 5) => {
  let attemptsLeft = attempts;

  const makeRequest = async () => {
    attemptsLeft--;
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (e) {
      if (attemptsLeft) return makeRequest();
      return e;
    }
  };

  return makeRequest();
};
