import '../../css/Menu.css';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

const imgInstagram = 'img/insta-vermelho.png';
const imgWhatsapp = 'img/whats-vermelho.png';

const NAV_ITEMS = [
  { to: '/', end: true as const, label: 'Página inicial' },
  { to: '/quemsomos', end: false as const, label: 'Quem somos' },
  { to: '/nossasmarcas', end: false as const, label: 'Nossas marcas' },
  { to: '/faleconosco', end: false as const, label: 'Fale conosco' },
] as const;

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ?? 'navMenuSocial'}>
      <a
        className="navMenuSocialBtn"
        href="https://www.instagram.com/breda_distribuidora/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Breda Distribuidora"
      >
        <span className="navMenuSocialBtnInner">
          <img src={imgInstagram} alt="" />
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
          <img src={imgWhatsapp} alt="" />
        </span>
      </a>
    </div>
  );
}

export default function Menu() {
  const isMobile = useMediaQuery('(max-width: 900px)', { noSsr: true });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <div className="navMenuBar">
      <nav
        className={isMobile ? 'navMenu navMenuMobile' : 'navMenu'}
        aria-label="Principal"
      >
        <NavLink to="/" end className="navMenuBrand">
          <span className="navMenuBrandTitle">BREDA</span>
          <span className="navMenuBrandSubtitle">Distribuidora</span>
        </NavLink>

        {isMobile ? (
          <>
            <SocialLinks className="navMenuSocial navMenuSocialMobile" />
            <IconButton
              type="button"
              color="inherit"
              edge="end"
              aria-label="Abrir menu de navegação"
              aria-expanded={drawerOpen}
              aria-haspopup="true"
              onClick={() => setDrawerOpen(true)}
              className="navMenuBurger"
              size="medium"
            >
              <MenuIcon sx={{ color: '#9b0004' }} fontSize="medium" />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={closeDrawer}
              slotProps={{ paper: { className: 'navMenuDrawerPaper' } }}
            >
              <div
                className="navMenuDrawerInner"
                role="navigation"
                aria-label="Seções do site"
              >
                {NAV_ITEMS.map(({ to, end, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive
                        ? 'navMenuLink navMenuLinkActive navMenuDrawerLink'
                        : 'navMenuLink navMenuDrawerLink'
                    }
                    onClick={closeDrawer}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </Drawer>
          </>
        ) : (
          <div className="navMenuRight">
            <div className="navMenuLinks">
              {NAV_ITEMS.map(({ to, end, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    isActive ? 'navMenuLink navMenuLinkActive' : 'navMenuLink'
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
            <SocialLinks />
          </div>
        )}
      </nav>
    </div>
  );
}
