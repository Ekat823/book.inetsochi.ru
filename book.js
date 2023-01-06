//---Modal
const openModal = (num) => {
  const modal = document.getElementById("exp" + num);
  modal.style.display = "block";
}

const closeModal = (num) => {
  const modal = document.getElementById("exp" + num);
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
