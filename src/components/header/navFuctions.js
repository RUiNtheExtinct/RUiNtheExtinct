export const slideLinks = () => {
    const links = document.querySelectorAll(".linkNav");

    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      window.scroll({
        top: offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

export const navFuntion =()=>{
    const navegacion = document.querySelector('nav');
    navegacion.classList.toggle('fadeIn',window.scrollY>0);

    const retornar = document.querySelector('#return');
    retornar.classList.toggle('mostrar',window.scrollY>0);
}