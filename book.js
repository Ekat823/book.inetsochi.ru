//---Navbar Dropdown Menu

const showBooksMenu = () => {
  const books = document.getElementById("books");

  if (books.style.display === "none") {
    books.style.display = "block";
  } else {
    books.style.display = "none";
  }  
}

const showBooks = () => {
  const books = document.getElementById("books");
  const ch = document.getElementById("chapters");

  if (ch.style.display = "block") {
    ch.style.display = "none"
  }

  if (books.style.display === "none") {
    books.style.display = "block";
  } else {
    books.style.display = "none";
  }  
}

const showChapters = () => {
  const ch = document.getElementById("chapters");
  const books = document.getElementById("books");

  if (books.style.display = "block") {
    books.style.display = "none"
  }

  if (ch.style.display === "none") {
    ch.style.display = "block";
  } else {
    ch.style.display = "none";
  }  
}

window.onclick = function (event) {
  const dd = document.getElementsByClassName("dropdown");
  for (let i = 0; i < dd.length; i++) {
    if (event.target == dd[i]) {
      dd[i].style.display = "none";
    }
  }
}
//---Navbar Dropdown Menu


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
