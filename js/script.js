const container = document.querySelector(".listContainer");

const url = "https://www.freetogame.com/api/games";

const corsUrl = "https://noroffcors.herokuapp.com/" + url;

async function apiCall() {
  try {
    const response = await fetch(corsUrl);

    const results = await response.json();

    container.innerHTML = "";

    // console.log(results[0]);

    for (let i = 0; i < results.length; i++) {
      if (i === 12) {
        break;
      }

      const game = results[i];

      container.innerHTML += `<a href="details.html?id=${game.id}" class="card">
                                <h2>${game.title}</h2>
                                <p>${game.developer}</p>
                                <img src="${game.thumbnail}" alt="${game.title}">
                            </a>`;
    }
  } catch (error) {
    console.log(error);
    container.innerHTML = errorMessage("An error occured when calling the API");
  }
}

apiCall();
