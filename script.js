window.addEventListener("DOMContentLoaded", getActors);

// fetch data locally
function getActors() {
  fetch("./list/actors.json")
  .then(res => res.json())
    .then(processData);
}

function processData(data){
  console.log(data);
  data.forEach(actor => {

    const copy = document.querySelector("template").content.cloneNode(true);
    console.log(actor.fullname)
    //populate
     copy.querySelector("h2").textContent = actor.fullname;
   
   
     document.querySelector("main").appendChild(copy);

   
    // const modal = document.querySelector('#modal');
    // const btn = document.querySelector(".btn")
    //     btn.addEventListener('click', getRestOfData);
    
    //     function getRestOfData() {
    //       modal.style.display = 'block';
    
    //      document.querySelector('h4').textContent = actor.fullname;
    
    //      document.querySelector('h5').textContent = actor.movie;

    //     }
  });
}