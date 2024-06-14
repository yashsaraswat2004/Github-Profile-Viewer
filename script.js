let input = document.querySelector("input");

async function fetchUser(username) {
  let response = await fetch(`https://api.github.com/users/${username}`);
  let result = await response.json();
  userData(result);
}

document.querySelector(".btn").addEventListener("click", () => {
  let userId = input.value;
  fetchUser(userId);
});

function userData(result) {
  const { avatar_url, name, bio, followers, following, public_repos } = result;
  let card = document.querySelector(".card");
  card.innerHTML = `<div class="imagesec">
                            <img
                            class="dp"
                            src=${avatar_url}
                            alt="User Profile/DP image"
                            />
                                <div>
                                    <h3>${name}</h3>
                                    <p>${bio}</p>
                                </div>
                        </div>
                        <div class="rightsec">
                            <div>
                                <p>Followers</p>
                                <p>${followers}</p>
                            </div>
                            <div>
                                <p>Following</p>
                                <p>${following}</p>
                            </div>
                            <div>
                                <p>Repositories</p>
                                <p>${public_repos}</p>
                            </div>
                            <div class="visit"> <a href="${result.html_url}"> Visit Profile </a>
                            </div>
                        </div>
                    </div>`;
  card.classList.remove("hidden");
}
