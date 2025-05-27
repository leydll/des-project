document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/data");
    const jsonData = await response.json();
    displayData(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = data
    .map((item) => `<p>${item.name}: $${item.price}</p>`)
    .join("");
}
