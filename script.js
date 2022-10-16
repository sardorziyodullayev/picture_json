let elBtn = document.getElementById("btn");
elBtn.addEventListener("click", () => {
   fetch("https://jsonplaceholder.typicode.com/photos")
   .then(malumot => malumot.json())
   .then(data => {
      data.forEach(e => {
         const elImg = document.createElement("img");
         content.appendChild(elImg)
         elImg.src = e.url
         elImg.className = "photos"
      });
   })
})