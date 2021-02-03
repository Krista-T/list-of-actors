window.addEventListener("DOMContentLoaded", getActors);
document.querySelector("#modal").classList.add("hide");
// fetch data locally
function getActors() {
  fetch("./list/actors.json")
    .then(res => res.json())
    .then(getData);
}

function getData(data) {
  console.log(data);
  data.forEach(actor => {

    const copy = document.querySelector("template").content.cloneNode(true);
    console.log(actor.fullname)
    //populate
    copy.querySelector("h3").textContent = actor.fullname;

    //event for modal
    const modal = document.querySelector("#modal");
    const btn = copy.querySelector(".btn button");
    const close = document.querySelector(".close");

    btn.addEventListener("click", getMoreData);

    function getMoreData() {
      modal.classList.remove("hide");
      document.querySelector(".name").textContent = actor.fullname;
      document.querySelector(".movie").textContent = "MOVIE:" + ` ${actor.movie}`;
    }

    close.addEventListener("click", hideModal);

    function hideModal() {
      modal.classList.add("hide");
    }
    //append
    document.querySelector("main").appendChild(copy);
  });
}