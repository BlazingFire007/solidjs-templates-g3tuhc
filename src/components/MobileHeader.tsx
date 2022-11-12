import Nav from './Nav';

export default function MobileHeader() {
  function showNav() {
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    if (main) main.classList.toggle('show-nav');
    if (header) header.classList.toggle('show-nav');
  }
  return (
    <section id='header'>
      <header>
        <p id='logo'>
          <a href='#'>Eli Richardson</a>
        </p>
        <div>
          <button onClick={showNav}>
            <i class='fa fa-bars'></i>
          </button>
        </div>
        <aside>
          <Nav />
        </aside>
      </header>
    </section>
  );
}
