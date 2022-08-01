/* ~~~~~~~~~~~~~ View Module ~~~~~~~~~~~~~ */
export const View = (() => {
  const domstr = {
    displayResults: ".display-results",
    searchbox: ".searchbar",
    header: ".header",
    load: ".load"
  };

  const render = (hook, tmp) => {
    hook.innerHTML = tmp;
  };

  const createtmp = (data) => {
    // reset html content
    let tmp = "";

    data.forEach((album) => {
      const { artworkUrl100, collectionName } = album;
      tmp += `
         <li class="display-results__item">
          <img src="${artworkUrl100}" alt="${collectionName}" />
          <p>${collectionName}</p>
      </li>
      `;
    });
    return tmp;
  };

  const loading = () => {
    const headElement = document.querySelector(domstr.header);
    let para = document.createElement("p");
    para.className = 'load'
    para.textContent = "Loading...";
    headElement.appendChild(para);
  };

  const removeLoading = () => {
    const loading = document.querySelector(domstr.load);
    loading.remove();
  };

  return { domstr, render, createtmp, loading, removeLoading };
})();
