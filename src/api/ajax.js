const apiHost =
  "https://newsapi.org/v2/top-headlines?category=health&totalResults=5&country=ca&apiKey=f70df9a1a7944b5f82755078b8c6c642";

export default {
  async fetchInitialNews() {
    try {
      let response = await fetch(apiHost + "");
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
};
