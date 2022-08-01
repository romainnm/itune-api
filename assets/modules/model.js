import { Api } from "./api.js";
import { View } from "./view.js";
/* ~~~~~~~~~~~~~ Model Module ~~~~~~~~~~~~~ */
export const Model = ((api, view) => {
  const getResults = api.getResults;

  class State {
    // Initial states
    #albums = [];
    #artistName = "";
    
    get artistName() {
      return this.#artistName;
    }

    get albums() {
      return this.#albums;
    }
    set albums(newAlbums) {
      this.#albums = newAlbums;
      const hookElement = document.querySelector(view.domstr.displayResults);
      const tmp = view.createtmp(this.albums);
      view.render(hookElement, tmp);
    }
  }

  return { getResults, State };
})(Api, View);
