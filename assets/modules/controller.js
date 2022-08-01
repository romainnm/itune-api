import { Model } from "./model.js";
import { View } from "./view.js";
/* ~~~~~~~~~~~~~ Controller Module ~~~~~~~~~~~~~ */
export const Controller = ((model, view) => {
  const state = new model.State();

  const search = () => {
    const searchbox = document.querySelector(view.domstr.searchbox);
    searchbox.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        view.loading();
        model.getResults(event.target.value).then((albumData) => {
          state.albums = albumData.results;
          view.removeLoading();
        });

        event.target.value = "";
      }
    });
  };

  // If need to fetch data on init
  /*   const init = () => {
    model.getResults(state.artistName).then((albumData) => {
      state.albums = albumData.results;
    });
  };
 */

  const bundle = () => {
    search();
  };

  return { bundle };
})(Model, View);
