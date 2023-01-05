const popUp = () => {
  const popup = document.getElementById("exp");
  popup.classList.toggle("show");
}

const popUpOne = () => {
  const popup1 = document.getElementById("exp1");
  popup1.classList.toggle("show");
}

const popUpTwo = () => {
  const popup2 = document.getElementById("exp2");
  popup2.classList.toggle("show");
}

const popUpThree = () => {
  const popup3 = document.getElementById("exp3");
  popup3.classList.toggle("show");
}

const popUpFour = () => {
  const popup4 = document.getElementById("exp4");
  popup4.classList.toggle("show");
}

const popUpFive = () => {
  const popup5 = document.getElementById("exp5");

  popup5.classList.toggle("show");
}



const openModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
