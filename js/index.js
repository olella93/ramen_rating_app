const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "img/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "img/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "img/tonkotsu.jpg" }
 ];

 // display all ramens in menu
 function displayRamenMenu() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen=>{
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.className = "ramen-thumbnail";
        img.addEventListener("click", () => displayRamenDetails(ramen));
        ramenMenu.appendChild(img);
    });
}

// details of selected ramen
    function displayRamenDetails(ramen){
        document.getElementById("ramen-image").src = ramen.image;
        document.getElementById("ramen-name").textContent = ramen.name;
        document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
        document.getElementById("ramen-rating").textContent = ramen.rating;
        document.getElementById("ramen-comment").textContent = ramen.comment;
    }

    // add new ramen
    document.getElementById("ramen-form").addEventListener("submit", (e) => {e.preventDefault();
        const newRamen ={
            id: ramens.length +1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: parseInt(document.getElementById("new-rating").value),
            comment: document.getElementById("new-comment").value
        };
        ramens.push(newRamen);
        displayRamenMenu();
        displayRamenDetails(newRamen);
        e.target.removeEventListener();
    });

    displayRamenMenu();
    displayRamenDetails(ramens[0]);
