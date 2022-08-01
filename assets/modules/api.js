/* ~~~~~~~~~~~~~ Api Module ~~~~~~~~~~~~~ */
export const Api = (() => {
  const apiEndpoint = (artistName) => {
    const api_endpoint = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;
    return api_endpoint;
  };

  const getResults = (artistName) =>
    fetchJsonp(apiEndpoint(artistName)).then((res) => res.json());

  return {
    getResults,
  };
})();
