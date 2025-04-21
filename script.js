document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const usernameInput = document.getElementById("user-input");

  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");

  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");

  const cardStatsContainer = document.querySelector(".stats-card");

  // Example demo functionality: Update circles on search
  searchButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username === "") return;

    // Dummy data for progress (can be replaced with actual API logic)
    const easy = 75;
    const medium = 50;
    const hard = 25;

    easyProgressCircle.style.setProperty("--progress-degree", `${easy * 3.6}%`);
    mediumProgressCircle.style.setProperty("--progress-degree", `${medium * 3.6}%`);
    hardProgressCircle.style.setProperty("--progress-degree", `${hard * 3.6}%`);

    easyLabel.textContent = `${easy}%`;
    mediumLabel.textContent = `${medium}%`;
    hardLabel.textContent = `${hard}%`;

    cardStatsContainer.innerHTML = `<p>User: <strong>${username}</strong></p>`;
  });
});
