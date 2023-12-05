function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function opencv(){
    const pdfURL='resume.jpg';
    window.open(pdfURL);
  }
  