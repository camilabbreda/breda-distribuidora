import '../css/Pagina-inicial.css';
import { Link } from 'react-router-dom';

const imgHeroShelf =
  'https://www.figma.com/api/mcp/asset/5d6c2e44-6541-4527-a0bd-15d52b715e73';
const imgWhatsappBadge =
  'https://www.figma.com/api/mcp/asset/cc8bff00-a80a-4361-9fe6-33b0d2d5dd6f';
const imgDori = 'https://www.figma.com/api/mcp/asset/208404ed-708c-4f5d-b665-25690b0486bc';
const imgSevenBoys =
  'https://www.figma.com/api/mcp/asset/1b5c151c-4c2a-40a4-b84f-b526cdb6e4b9';
const imgDanilla =
  'https://www.figma.com/api/mcp/asset/560ae4a3-12dd-4e01-a1a3-b898d1b6fabe';
const imgPrateleiras =
  'https://www.figma.com/api/mcp/asset/47310099-866b-4b06-9c19-ee1a2e4fa16f';
const iconSales =
  'https://www.figma.com/api/mcp/asset/3884c13e-ec2d-436e-9a9c-aef86a54447b';
const iconDeposit =
  'https://www.figma.com/api/mcp/asset/0b6b5f43-ced0-440d-aeaf-2d4f77019bc3';
const iconPicking =
  'https://www.figma.com/api/mcp/asset/2626f239-7c75-4d73-b97f-c0c420c9f006';
const iconInvoice =
  'https://www.figma.com/api/mcp/asset/535aa15c-b859-48e8-b0c7-fa8695d1278f';
const iconDelivery =
  'https://www.figma.com/api/mcp/asset/1903a56f-3621-47cd-b88f-4e36b26b3406';
const iconArrow =
  'https://www.figma.com/api/mcp/asset/dead0699-8d04-4ac5-bf00-515305cc315f';

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
                  <img src={imgPrateleiras} alt="" />
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
      <footer className="pi-footer">
        <p>© 2026 BREDA Distribuidora. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
