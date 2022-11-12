export default function MobileHeader() {
  function showNav() {
    const nav = document.querySelector('main');
    if (nav) nav.classList.toggle('show-nav');
  }
  return (
    <section id="header">
      <header>
        <p id="logo">
          <a href="#">Eli Richardson</a>
        </p>
        <div>
          <button onClick={showNav}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </header>
    </section>
  );
}
