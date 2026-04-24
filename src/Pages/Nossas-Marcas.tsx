import '../css/Nossas-marcas.css';

const imgHero = 'img/fotos_figma/nossas-marcas-hero.png';
const imgGuloseimas = 'img/fotos_figma/categoria-doces-guloseimas.jpg';
const imgSnacks = 'img/fotos_figma/categoria-snacks-biscoitos.jpg';
const imgMercearia = 'img/fotos_figma/categoria-mercearia.jpg';
const imgBrinquedos = 'img/fotos_figma/categoria-doces-brinquedos.png';
const imgWhatsapp = 'img/whatsapp-cta-branco.png';

const BRANDS: { name: string; src: string; alt: string }[] = [
  { name: 'Dori', src: 'img/marcas/logo-dori.png', alt: 'Dori' },
  { name: 'Danilla Brasil', src: 'img/marcas/logo-danilla-brasil.png', alt: 'Danilla Brasil' },
  { name: 'Seven Boys', src: 'img/marcas/logo-sevenboys.png', alt: 'Seven Boys' },
  { name: 'Wickbold', src: 'img/marcas/logo-wickbold.png', alt: 'Wickbold' },
  { name: 'Chá Prenda', src: 'img/marcas/logo-cha-prenda.jpg', alt: 'Chá Prenda' },
  { name: 'Biosoft', src: 'img/marcas/logo-biosoft.jpg', alt: 'Biosoft' },
  { name: 'Montevergine', src: 'img/marcas/logo-montevergine.png', alt: 'Montevergine' },
  { name: 'Bilu', src: 'img/marcas/logo-bilu.jpg', alt: 'Bilu' },
  { name: 'Petry Sabores', src: 'img/marcas/logo-petry-sabores.png', alt: 'Petry Sabores' },
  { name: 'Doces India', src: 'img/marcas/logo-doces-india.png', alt: 'Doces India' },
  { name: 'Kodilar', src: 'img/marcas/logo-kodilar.png', alt: 'Kodilar' },
  { name: 'Florestal', src: 'img/marcas/logo-florestal.png', alt: 'Florestal' },
  { name: 'Regina', src: 'img/marcas/logo-regina.png', alt: 'Regina' },
  { name: 'Natural Life', src: 'img/marcas/logo-natural-life.jpg', alt: 'Natural Life' },
];

export default function NossasMarcas() {
  return (
    <div className="nm-page">
      <main className="nm-main">
        <section className="nm-hero" aria-labelledby="nm-hero-heading">
          <div className="nm-heroVisual" aria-hidden="true">
            <div className="nm-heroVisualInner">
              <img src={imgHero} alt="" />
            </div>
          </div>
          <div className="nm-heroCopy">
            <p className="nm-pill">Portfólio diversificado</p>
            <h1 id="nm-hero-heading" className="nm-heroTitle">
              As Melhores <span className="nm-accent">Marcas</span>
              <br />
              no Seu PDV
            </h1>
            <p className="nm-heroLead">
              Curadoria estratégica de doces, guloseimas e variedades com alto giro.
              <br />
              Mix inteligente entre marcas reconhecidas e produtos acessíveis que garantem
              rentabilidade para o seu negócio.
            </p>
          </div>
        </section>

        <section className="nm-cats" aria-labelledby="nm-cats-heading">
          <div className="nm-inner">
            <header className="nm-catsHeader">
              <h2 id="nm-cats-heading" className="nm-catsTitle">
                Categorias <span className="nm-accent">Estratégicas</span>
              </h2>
              <div className="nm-catsRule" aria-hidden="true" />
            </header>
            <div className="nm-bento">
              <article className="nm-bentoCard nm-bentoDoces">
                <img src={imgGuloseimas} alt="" className="nm-bentoBg" />
                <div className="nm-bentoGrad" />
                <div className="nm-bentoText">
                  <h3>Doces e Guloseimas</h3>
                  <p>
                    Mix completo de balas, pirulitos e gominhas que encantam o consumidor no seu
                    check-out.
                  </p>
                </div>
              </article>
              <article className="nm-bentoCard nm-bentoSnacks">
                <img src={imgSnacks} alt="" className="nm-bentoBg" />
                <div className="nm-bentoGrad" />
                <div className="nm-bentoText nm-bentoTextPadSm">
                  <h3>Snacks e Biscoitos</h3>
                  <p>Praticidade e crocância para o consumo on-the-go.</p>
                </div>
              </article>
              <article className="nm-bentoCard nm-bentoBrinquedos">
                <img src={imgBrinquedos} alt="" className="nm-bentoBg nm-bentoBgFlip" />
                <div className="nm-bentoGrad nm-bentoGradTall" />
                <div className="nm-bentoText nm-bentoTextAbs">
                  <h3>Doces com brinquedos</h3>
                  <p>
                    Diversão e sabor em produtos que conquistam as crianças e impulsionam suas
                    vendas.
                  </p>
                </div>
              </article>
              <article className="nm-bentoCard nm-bentoMercearia">
                <img src={imgMercearia} alt="" className="nm-bentoBg nm-bentoBgFlip" />
                <div className="nm-bentoGrad nm-bentoGradWide" />
                <div className="nm-bentoText nm-bentoTextMercearia">
                  <h3>Mercearia</h3>
                  <p>
                    Sua seleção de cereais, pipocas e granolas. Itens essenciais selecionados para
                    um estilo de vida mais saudável e prático.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="nm-partners" aria-labelledby="nm-partners-heading">
          <div className="nm-inner">
            <header className="nm-partnersHeader">
              <p className="nm-partnersKicker">Nossa Rede de Confiança</p>
              <h2 id="nm-partners-heading" className="nm-partnersTitle">
                Marcas <span className="nm-accent">Parceiras</span>
              </h2>
            </header>
            <div className="nm-partnersGrid">
              {BRANDS.map((b) => (
                <article key={b.name} className="nm-partnerCell">
                  <div className="nm-partnerLogo">
                    <img src={b.src} alt={b.alt} />
                  </div>
                  <p className="nm-partnerName">{b.name}</p>
                </article>
              ))}
              <div className="nm-partnerCell nm-partnerCellEmpty" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="nm-cta" aria-labelledby="nm-cta-heading">
          <div className="nm-inner">
            <div className="nm-ctaBox">
              <h2 id="nm-cta-heading" className="nm-ctaTitle">
                Pronto para abastecer seu negócio com o melhor?
              </h2>
              <a
                className="nm-ctaBtn"
                href="https://wa.me/5549999879224"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgWhatsapp} alt="" width={66} height={66} />
                <span>Fale com um Consultor</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
