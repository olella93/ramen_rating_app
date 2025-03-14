const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 function displayRamens(ramens) {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen=>{
        const ramenDiv = document.createElement("div");
        ramenDiv.className = "ramen";
        ramenDiv.innerHTML = `
            <img src="img/${ramen.image}" alt="${ramen.name}">
            <h2>${ramen.name}</h2>
            <h3>${ramen.restaurant}</h3>
        `;
        ramenMenu.appendChild(ramenDiv);
    })
 }

    displayRamens(ramens);