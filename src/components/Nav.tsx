export default function Nav() {
  return (
    <nav class="sidenav">
      <div class="avatar">
        <img
          src="https://placeimg.com/1000/1000/people"
          alt="Photo of Eli Richardson."
        />
      </div>
      <p class="name">Eli Richardson</p>
      <p class="desc">
        Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
        Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus
        commodo ac mi lacus.
      </p>
      <ul class="refs">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skillset">Skillset</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
