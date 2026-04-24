import '../css/Quem-somos.css';

const imgWarehouseBg = 'img/fotos_figma/armazem-hero-quem-somos.png';
const imgDistribution = 'img/fotos_figma/centro-distribuicao-quem-somos.png';
const imgFleet = 'img/fotos_figma/frota-quem-somos.png';
const imgStorage = 'img/fotos_figma/armazenagem-wms-quem-somos.png';
const imgDock = 'img/fotos_figma/doca-carregamento-quem-somos.png';
const imgWhatsapp = 'img/whatsapp-cta-branco.png';
const iconMission = 'img/icones/icon-missao-vermelho.svg';
const iconVision = 'img/icones/icon-visao-vermelho.svg';
const iconValues = 'img/icones/icon-valores-vermelho.svg';

export default function QuemSomos() {
  return (
    <div className="qs-page">
      <main className="qs-main">
        <section className="qs-hero" aria-labelledby="qs-hero-heading">
          <div className="qs-heroBg" aria-hidden="true">
            <img src={imgWarehouseBg} alt="" />
          </div>
          <div className="qs-inner qs-heroContent">
            <p className="qs-heroKicker">Compromisso com o seu crescimento</p>
            <h1 id="qs-hero-heading" className="qs-heroTitle">
              Tradição & <span className="qs-accent">Excelência</span>
            </h1>
          </div>
        </section>

        <section className="qs-intro" aria-labelledby="qs-intro-heading">
          <div className="qs-inner qs-introGrid">
            <div>
              <h2 id="qs-intro-heading" className="qs-introTitle">
                Quando você vende, <span className="qs-accent">a gente cresce</span>
              </h2>
              <p className="qs-body">
                Na Breda Distribuidora, nosso sucesso começa quando o seu produto sai da
                prateleira.
              </p>
              <p className="qs-body">
                Trabalhamos com um mix estratégico pensado para gerar giro, atrair o consumidor
                e aumentar suas vendas no dia a dia.
              </p>
              <p className="qs-body qs-bodyLast">
                Mais do que distribuir produtos, somos parceiros do seu negócio, ajudando você
                a vender mais, com consistência e rentabilidade.
              </p>
            </div>
            <div className="qs-introVisual">
              <div className="qs-introPhoto">
                <img src={imgDistribution} alt="Centro de distribuição Breda" />
                <div className="qs-introPhotoTint" aria-hidden="true" />
              </div>
              <div className="qs-introBadge">
                <p className="qs-introBadgeValue">100%</p>
                <p className="qs-introBadgeLabel">Compromisso com o seu crescimento</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qs-essence" aria-labelledby="qs-essence-heading">
          <div className="qs-inner">
            <h2 id="qs-essence-heading" className="qs-blockTitle">
              Nossa <span className="qs-accent">Essência</span>
            </h2>
            <div className="qs-mvvGrid">
              <article className="qs-mvvCard">
                <div className="qs-mvvIcon">
                  <img src={iconMission} alt="" />
                </div>
                <h3>Missão</h3>
                <p>
                  Prover soluções de distribuição com excelência operacional, conectando marcas
                  líderes ao consumidor final através de uma logística inteligente e humana.
                </p>
              </article>
              <article className="qs-mvvCard">
                <div className="qs-mvvIcon">
                  <img src={iconVision} alt="" />
                </div>
                <h3>Visão</h3>
                <p>
                  Ser reconhecida como a distribuidora mais eficiente e inovadora do Brasil,
                  referência em tecnologia e satisfação do cliente.
                </p>
              </article>
              <article className="qs-mvvCard">
                <div className="qs-mvvIcon">
                  <img src={iconValues} alt="" />
                </div>
                <h3>Valores</h3>
                <p>
                  Integridade absoluta, obsessão pela eficiência, valorização das pessoas e
                  compromisso com resultados sustentáveis.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="qs-bento" aria-labelledby="qs-bento-heading">
          <div className="qs-inner">
            <header className="qs-bentoHeader">
              <h2 id="qs-bento-heading" className="qs-bentoTitle">
                Ações de <span className="qs-accent">Ponta</span>
              </h2>
              <p className="qs-bentoLead">
                Trabalhamos com ações no ponto de venda que fortalecem a exposição, aumentam a
                saída e geram resultado real.
              </p>
            </header>
            <div className="qs-bentoGrid">
              <div className="qs-bentoCell qs-bentoFleet">
                <img src={imgFleet} alt="Frota Breda" />
                <div className="qs-bentoFleetOverlay">
                  <h3>Frota Própria</h3>
                  <p>Veículos monitorados 24/7 com tecnologia de ponta.</p>
                </div>
              </div>
              <div className="qs-bentoCell qs-bentoWms">
                <img src={imgStorage} alt="Sistema de armazenagem" />
                <div className="qs-bentoWmsOverlay">
                  <p className="qs-bentoWmsLabel">Tecnologia WMS</p>
                </div>
              </div>
              <div className="qs-bentoCell qs-bentoDock">
                <img src={imgDock} alt="Doca de carregamento" />
              </div>
              <div className="qs-bentoCell qs-bentoCds">
                <span className="qs-bentoCdsNum" aria-hidden="true">
                  04
                </span>
                <div className="qs-bentoCdsCopy">
                  <h3>CDs Estratégicos</h3>
                  <p>Localizados para agilizar a capilaridade regional.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qs-cta" aria-labelledby="qs-cta-heading">
          <div className="qs-inner">
            <div className="qs-ctaBox">
              <h2 id="qs-cta-heading" className="qs-ctaTitle">
                Pronto para elevar o nível da sua distribuição?
              </h2>
              <a
                className="qs-ctaBtn"
                href="https://wa.me/5549999879224"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgWhatsapp} alt="Whatsapp" />
                <span>Fale com um Especialista</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
