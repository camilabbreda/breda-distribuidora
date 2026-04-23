import '../../css/Menu.css';
import { NavLink } from 'react-router-dom';

const imgInstagram = 'https://www.figma.com/api/mcp/asset/ff79ef3f-79b4-4fff-b02b-e2307221478c';
const imgWhatsapp = 'https://www.figma.com/api/mcp/asset/9bc36adb-79a2-4c32-a9e2-a6054426d84f';

export default function Menu() {
  return (
    <div className="navMenuBar">
    <nav className="navMenu" aria-label="Principal">
      <NavLink to="/" end className="navMenuBrand">
        <span className="navMenuBrandTitle">BREDA</span>
        <span className="navMenuBrandSubtitle">Distribuidora</span>
      </NavLink>
      <div className="navMenuRight">
        <div className="navMenuLinks">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'navMenuLink navMenuLinkActive' : 'navMenuLink'
            }
          >
            Página inicial
          </NavLink>
          <NavLink
            to="/quemsomos"
            className={({ isActive }) =>
              isActive ? 'navMenuLink navMenuLinkActive' : 'navMenuLink'
            }
          >
            Quem somos
          </NavLink>
          <NavLink
            to="/nossasmarcas"
            className={({ isActive }) =>
              isActive ? 'navMenuLink navMenuLinkActive' : 'navMenuLink'
            }
          >
            Nossas marcas
          </NavLink>
          <NavLink
            to="/faleconosco"
            className={({ isActive }) =>
              isActive ? 'navMenuLink navMenuLinkActive' : 'navMenuLink'
            }
          >
            Fale conosco
          </NavLink>
        </div>
        <div className="navMenuSocial">
          <a
            className="navMenuSocialBtn"
            href="https://www.instagram.com/breda_distribuidora/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Breda Distribuidora"
          >
            <span className="navMenuSocialBtnInner">
              <img src={imgInstagram} alt="" width={30} height={30} />
            </span>
          </a>
          <a
            className="navMenuSocialBtn"
            href="https://wa.me/5549999879224"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Breda Distribuidora"
          >
            <span className="navMenuSocialBtnInner">
              <img src={imgWhatsapp} alt="" width={30} height={31} />
            </span>
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
}
