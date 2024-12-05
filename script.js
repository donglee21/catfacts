document.getElementById("getButton").addEventListener("click", () => {
    const factsContainer = document.getElementById("facts");
    factsContainer.textContent = "Loading..."; // Show a loading message
  
    // Fetch cat fact from an open API
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Display the fetched fact
        factsContainer.textContent = data.fact;
      })
      .catch((error) => {
        // Handle errors
        factsContainer.textContent = "Failed to fetch a cat fact: " + error.message;
      });
  });









// async function getFact({
//     const button= document.getElementById("generateButton");
//     const factSpace= document.getElementById('fact')
// });


// factSpace.style.display = "block";
// button.disabled = true;
// button.textContent= "loading";
// try{
//     const reply= await fetch("https://catfact.ninja/fact");
//     const data = await reply.json();

//   const text= document.createElement("p");
//   text.textContent = data.fact;
//   text.classList.add("facts");
// }
// catch(error) {
//     factSpace.textContent = "Error fetching cat fact.";
// }
// finally {
//     button.disabled =false;
//     button.textContent = "Get fact"
// }
