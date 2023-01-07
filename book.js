//---Modal
const openModal = (id) => {
  const modal = document.getElementById(id);
  modal.style.display = "block";
}

const closeModal = (id) => {
  const modal = document.getElementById(id);
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementsByClassName("modal");
    
  for (let i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}
//---End Modal
