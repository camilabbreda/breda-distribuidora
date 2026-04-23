import '../css/Nossas-marcas.css';

const imgHero = 'https://www.figma.com/api/mcp/asset/2dcc937e-b828-4799-878b-6a0d025a4a89';
const imgGuloseimas =
  'https://www.figma.com/api/mcp/asset/bd152f81-f7b4-46e4-a3e0-d6b8f2fc0a47';
const imgSnacks =
  'https://www.figma.com/api/mcp/asset/d314a6b4-67ab-4e4e-b98f-5789fc4a085c';
const imgMercearia =
  'https://www.figma.com/api/mcp/asset/d904ef9d-f802-480c-8446-65498637bbd6';
const imgBrinquedos =
  'https://www.figma.com/api/mcp/asset/c37a095e-653e-4a9e-ba7f-03ab2f51ba06';
const imgWhatsapp = 'https://www.figma.com/api/mcp/asset/4d14a846-28d7-4da3-ac8e-b64e9f4be6d4';

const BRANDS: { name: string; src: string; alt: string }[] = [
  { name: 'Dori', src: 'https://www.figma.com/api/mcp/asset/110f55ca-6404-4da6-8f46-37dd51fcadb2', alt: 'Dori' },
  {
    name: 'Danilla Brasil',
    src: 'https://www.figma.com/api/mcp/asset/2578a2b2-5db8-46e0-b660-70b3745a2068',
    alt: 'Danilla Brasil',
  },
  {
    name: 'Seven Boys',
    src: 'https://www.figma.com/api/mcp/asset/3d5f2f17-b114-4d2e-9214-fcde8e9ecbdf',
    alt: 'Seven Boys',
  },
  {
    name: 'Wickbold',
    src: 'https://www.figma.com/api/mcp/asset/8c8d4b6e-a69a-4c0c-873c-db4614880fc2',
    alt: 'Wickbold',
  },
  {
    name: 'Chá Prenda',
    src: 'https://www.figma.com/api/mcp/asset/2600ee98-09c3-43c9-8ad3-c75ead8a02b1',
    alt: 'Chá Prenda',
  },
  {
    name: 'Biosoft',
    src: 'https://www.figma.com/api/mcp/asset/2b37d772-778b-41ac-8868-6b1106b248c2',
    alt: 'Biosoft',
  },
  {
    name: 'Montevergine',
    src: 'https://www.figma.com/api/mcp/asset/062bea70-19f9-4554-a906-c5c61f22a7c1',
    alt: 'Montevergine',
  },
  {
    name: 'Bilu',
    src: 'https://www.figma.com/api/mcp/asset/b360f573-1c1a-403e-a049-668b767d1130',
    alt: 'Bilu',
  },
  {
    name: 'Petry Sabores',
    src: 'https://www.figma.com/api/mcp/asset/2e1da51d-ee0c-4436-9212-0903db9aee21',
    alt: 'Petry Sabores',
  },
  {
    name: 'Doces India',
    src: 'https://www.figma.com/api/mcp/asset/956fb4b8-7373-48ee-9a1a-8ba816099090',
    alt: 'Doces India',
  },
  {
    name: 'Kodilar',
    src: 'https://www.figma.com/api/mcp/asset/f7ad6490-2caa-44fd-aaed-9903c7d0e442',
    alt: 'Kodilar',
  },
  {
    name: 'Florestal',
    src: 'https://www.figma.com/api/mcp/asset/4351b9db-fce3-4b70-b6cc-5efea16738c5',
    alt: 'Florestal',
  },
  {
    name: 'Regina',
    src: 'https://www.figma.com/api/mcp/asset/c954b2f6-430a-49a2-8df4-3970845ed141',
    alt: 'Regina',
  },
  {
    name: 'Natural Life',
    src: 'https://www.figma.com/api/mcp/asset/a8e3bf79-b6fb-41cb-bc6d-b56701994b1f',
    alt: 'Natural Life',
  },
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
      <footer className="nm-footer">
        <p>© 2026 BREDA Distribuidora. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
