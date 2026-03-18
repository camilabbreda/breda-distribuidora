import '../../css/Menu.css';
import { NavLink } from 'react-router-dom';
export default function Menu() {
  return (
    <nav className="navMenu">
      <img className="logo" src="/img/logo.png" alt="Breda Distribuidora" />
      <div className="menuNavegacao">
        <div className="menuLinks">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'menuLink menuLinkActive' : 'menuLink'
            }
          >
            Página inicial
          </NavLink>
          <NavLink
            to="/quemsomos"
            className={({ isActive }) =>
              isActive ? 'menuLink menuLinkActive' : 'menuLink'
            }
          >
            Quem somos
          </NavLink>
          <NavLink
            to="/nossasmarcas"
            className={({ isActive }) =>
              isActive ? 'menuLink menuLinkActive' : 'menuLink'
            }
          >
            Nossas marcas
          </NavLink>
          <NavLink
            to="/faleconosco"
            className={({ isActive }) =>
              isActive ? 'menuLink menuLinkActive' : 'menuLink'
            }
          >
            Fale conosco
          </NavLink>
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
