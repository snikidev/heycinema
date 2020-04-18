export const getMovies = (query: string) =>
  fetch(`/api?t=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    return res.json();
  });
