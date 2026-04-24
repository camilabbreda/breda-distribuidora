import '../css/Pagina-inicial.css';
import { Link } from 'react-router-dom';

const imgHeroShelf =
  'img/fotos_figma/prateleira-mercado.png';
const imgWhatsappBadge =
  'img/whats-branco.png';
const imgDori = 'img/marcas/logo-dori.png';
const imgSevenBoys =
  'img/marcas/logo-sevenboys.png';
const imgDanilla =
  'img/marcas/logo-danilla.png';
const imgPrateleiras =
  'img/icones/icon-prateleira-vermelho.png';
const iconSales =
  'img/icones/icon-pessoas-vermelho.svg';
const iconDeposit =
  'img/icones/icon-termometro-vermelho.svg';
const iconPicking =
  'img/icones/icon-maquina-vermelho.svg';
const iconInvoice =
  'img/icones/icon-papel-vermelho.svg';
const iconDelivery =
  'img/icones/icon-caminhao-vermelho.svg';
const iconArrow =
  'img/icones/rigth-arrow-vermelha.svg';

export default function PaginaInicial() {
  return (
    <div className="pi-page">
      <main className="pi-main">
        <section className="pi-hero" aria-labelledby="pi-hero-heading">
          <div className="pi-inner pi-heroGrid">
            <div className="pi-heroCopy">
              <p className="pi-kicker">
                A distribuidora de alimentos do oeste de Santa Catarina
              </p>
              <h1 id="pi-hero-heading" className="pi-heroTitle">
                Seu parceiro para <span className="pi-textAccent">vender mais</span>
              </h1>
              <p className="pi-heroLead">
                Um portfólio estratégico de produtos que atrai o consumidor, gira no
                estoque e fortalece o seu resultado.
              </p>
              <div className="pi-heroCtaWrap">
                <a
                  className="pi-btnConsultor"
                  href="https://wa.me/5549999879224"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={imgWhatsappBadge} alt="" className="pi-btnConsultorIcon" />
                  <span>Falar com um Consultor</span>
                </a>
              </div>
            </div>
            <div className="pi-heroVisual">
              <div className="pi-heroPhotoWrap">
                <div className="pi-heroPhotoTilt">
                  <div className="pi-heroPhoto">
                    <img src={imgHeroShelf} alt="Prateleiras de supermercado bem abastecidas" />
                  </div>
                </div>
              </div>
              <div className="pi-heroStatCard">
                <p className="pi-heroStatValue">1.2k+</p>
                <p className="pi-heroStatLabel">
                  PDVs
                  <br />
                  ABASTECIDOS
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pi-stats" aria-label="Números da empresa">
          <div className="pi-inner pi-statsGrid">
            <article className="pi-statCard">
              <p className="pi-statNumber">30+</p>
              <p className="pi-statCaption">Anos de Mercado</p>
            </article>
            <article className="pi-statCard">
              <p className="pi-statNumber">40+</p>
              <p className="pi-statCaption">cidades atendidas</p>
            </article>
            <article className="pi-statCard">
              <p className="pi-statNumber">500+</p>
              <p className="pi-statCaption">Pontos de Venda</p>
            </article>
          </div>
        </section>

        <section className="pi-brands" aria-labelledby="pi-brands-heading">
          <div className="pi-inner">
            <div className="pi-brandsHeader">
              <div>
                <p className="pi-kickerSmall">Nosso portfólio</p>
                <h2 id="pi-brands-heading" className="pi-sectionTitle">
                  Marcas líderes confiadas à nossa <span className="pi-textAccent">Distribuição</span>
                </h2>
              </div>
              <Link className="pi-portfolioLink" to="/nossasmarcas">
                Ver portfólio completo
                <img src={iconArrow} alt="" width={16} height={16} />
              </Link>
            </div>
            <div className="pi-brandCards">
              <div className="pi-brandCard">
                <img src={imgDori} alt="Logo Dori Alimentos" />
              </div>
              <div className="pi-brandCard">
                <img src={imgSevenBoys} alt="Logo Seven Boys" />
              </div>
              <div className="pi-brandCard">
                <img src={imgDanilla} alt="Logo Danilla" />
              </div>
            </div>
          </div>
        </section>

        <section className="pi-operation" aria-labelledby="pi-operation-heading">
          <div className="pi-inner">
            <header className="pi-operationHeader">
              <p className="pi-kickerCenter">Fluxo de excelência</p>
              <h2 id="pi-operation-heading" className="pi-operationTitle">
                Nossa Operação ponta a ponta
              </h2>
              <p className="pi-operationLead">
                Processos rigorosos para garantir que o melhor mix de produtos chegue à mesa
                do consumidor final com total integridade.
              </p>
            </header>
            <div className="pi-stepsGrid">
              <article className="pi-stepCard">
                <div className="pi-stepIcon">
                  <img src={iconSales} alt="" />
                </div>
                <h3 className="pi-stepTitle">Equipe de Vendas</h3>
                <p className="pi-stepText">
                  Consultoria estratégica focada em rentabilidade e definição do mix ideal
                  para seu perfil de cliente.
                </p>
              </article>
              <article className="pi-stepCard">
                <div className="pi-stepIcon">
                  <img src={iconDeposit} alt="" />
                </div>
                <h3 className="pi-stepTitle">
                  Depósito e
                  <br />
                  Armazenagem
                </h3>
                <p className="pi-stepText">
                  Controle rigoroso de temperatura, higiene e cumprimento de todas as normas
                  sanitárias vigentes.
                </p>
              </article>
              <article className="pi-stepCard">
                <div className="pi-stepIcon">
                  <img src={iconPicking} alt="" />
                </div>
                <h3 className="pi-stepTitle">Equipe de Separação</h3>
                <p className="pi-stepText">
                  Precisão absoluta e agilidade no picking, garantindo que o pedido chegue
                  exatamente como solicitado.
                </p>
              </article>
              <article className="pi-stepCard">
                <div className="pi-stepIcon">
                  <img src={iconInvoice} alt="" />
                </div>
                <h3 className="pi-stepTitle">Faturamento</h3>
                <p className="pi-stepText">
                  Processamento ágil e digital de pedidos para garantir janelas de entrega
                  otimizadas.
                </p>
              </article>
              <article className="pi-stepCard">
                <div className="pi-stepIcon">
                  <img src={iconDelivery} alt="" />
                </div>
                <h3 className="pi-stepTitle">Entrega Eficiente</h3>
                <p className="pi-stepText">
                  Frota própria e rastreada, garantindo a integridade dos produtos e rapidez
                  no descarregamento.
                </p>
              </article>
              <article className="pi-stepCard">
                <div className="pi-stepIcon pi-stepIconShelf">
                  <img src={imgPrateleiras} alt="Merchandising no PDV" />
                </div>
                <h3 className="pi-stepTitle">Merchandising no PDV</h3>
                <p className="pi-stepText">
                  Nosso diferencial: reposição e organização estratégica dos produtos nas
                  prateleiras para o cliente final.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
