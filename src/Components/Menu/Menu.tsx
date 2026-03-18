import '../../css/Menu.css';
export default function Menu() {
  return (
    <nav className="navMenu">
      <img className="logo" src="img/logo.png" alt="Breda Distribuidora" />
      <div className="menuNavegacao">
        <div className="menuLinks">
          <a className="menuLink" href="/">
            Página inicial
          </a>
          <a className="menuLink" href="/quemsomos">
            Quem somos
          </a>
          <a className="menuLink" href="/nossasmarcas">
            Nossas marcas
          </a>
          <a className="menuLink" href="/faleconosco">
            Fale conosco
          </a>
          <a
            className="menuLink"
            target='_blank'
            rel='noreferrer'
            href="https://www.instagram.com/breda_distribuidora/"
          >
            <img
              src="/img/instagram-icone.png"
              alt="instagram breda distribuidora"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
