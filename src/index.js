let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch("http://localhost:3000/toys").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    data.forEach(element => {
      let myCard = document.createElement("div");
      myCard.classList.add("card");

      let myName = document.createElement("h2");
      myName.textContent = element.name;
      myCard.appendChild(myName);


      let myImg = document.createElement("img");
      myImg.classList.add("toy-avatar");
      myImg.src = element.image;
      myCard.appendChild(myImg);


      let myLikes = document.createElement("p");
      myLikes.textContent = `Likes: ${element.likes}`;
      myCard.appendChild(myLikes);

      let likeBtn = document.createElement("button");
      likeBtn.classList.add("like-btn");
      likeBtn.textContent = "Like ❤️";
      myCard.appendChild(likeBtn);

      likeBtn.addEventListener("click", () => {
        myLikes.textContent = `Likes: ${element.likes += 1}`;
      });

      document.querySelector("#toy-collection").appendChild(myCard);
    });
  })
});
