const container = document.querySelector(".detailsContainer");
const title = document.querySelector("#title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.freetogame.com/api/game?id=" + id;

const corsUrl = "https://noroffcors.herokuapp.com/" + url;

console.log(url);

async function gameDetails() {
  try {
    const response = await fetch(corsUrl);

    const game = await response.json();

    console.log(game);

    title.innerHTML = `F2P Games | ${game.title}`;

    console.log(title.innerHTML);

    container.innerHTML = `<div class="details">
                                    <div class="header">
                                        <div>
                                            <h2>${game.title}</h2>
                                            <p>${game.short_description}</p>
                                        </div>
                                        <a href="${game.game_url}" class="btn-details">Check it out</a>
                                    </div>
                                    <h3>About</h3>
                                    <p>${game.description}</p>
                                    <img src="${game.screenshots[0].image}">
                                    <img src="${game.screenshots[1].image}">
                                    <p>Developer: ${game.developer}</p>
                                    <p>Publisher: ${game.publisher}</p>
                                    <p>Platform(s): ${game.platform}</p>
                                    <p>Genre: ${game.genre}</p>
                                    <p>Release date: ${game.release_date}</p>
                                </div>`;
  } catch (error) {
    console.log(error);
    container.innerHTML = errorMessage(
      "An error occured when fetching game details"
    );
  }
}

gameDetails();
