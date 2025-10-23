const form = document.getElementById("gif-form");
const categoryInput = document.getElementById("category");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // prevent page reload
  const category = categoryInput.value.trim();
  if (!category) return alert("Please enter a category");

  try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}&rating=g`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    // Create a new container for the GIF
    const gifBox = document.createElement("div");
    gifBox.classList.add("gif-box");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-btn");

    // Remove only this GIF
    deleteBtn.addEventListener("click", () => gifBox.remove());

    gifBox.appendChild(img);
    gifBox.appendChild(deleteBtn);
    gifContainer.appendChild(gifBox);
  } catch (error) {
    console.error("Error fetching GIF:", error.message);
  }

  // clear input
  categoryInput.value = "";
});

// DELETE ALL button
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
