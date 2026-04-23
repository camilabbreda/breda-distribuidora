import '../css/Fale-conosco.css';

const imgHero =
  'https://www.figma.com/api/mcp/asset/b7656804-5609-44a0-9b66-d3612081ccba';
const imgWarehouse =
  'https://www.figma.com/api/mcp/asset/73088107-53ef-432e-8e46-34007ef4bc53';
const imgMapOverlay =
  'https://www.figma.com/api/mcp/asset/aca3a65f-0675-4f88-8ad3-527e3a369430';
const iconPhone =
  'https://www.figma.com/api/mcp/asset/b8c8652a-b050-48f2-a3f1-7aba45733f31';
const iconWhatsapp =
  'https://www.figma.com/api/mcp/asset/74becd8d-3f4e-435c-81a2-d11aa67492a7';
const iconEmail =
  'https://www.figma.com/api/mcp/asset/edf90c91-f939-4cad-b99d-20013a6a74fe';
const iconPin =
  'https://www.figma.com/api/mcp/asset/1693b56c-4267-4291-a294-f631c9381ea3';
const iconClock =
  'https://www.figma.com/api/mcp/asset/3fd92d20-1797-4baf-a503-9cedf4ff91d3';
const iconMapBtn =
  'https://www.figma.com/api/mcp/asset/9288aeee-60e4-4f40-b80b-5670e478550f';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=BR+282+km+520.7+Xaxim+SC';

export default function FaleConosco() {
  return (
    <div className="fc-page">
      <main className="fc-main">
        <section className="fc-hero" aria-labelledby="fc-hero-heading">
          <div className="fc-inner fc-heroGrid">
            <div className="fc-heroCopy">
              <p className="fc-kicker">Contato</p>
              <h1 id="fc-hero-heading" className="fc-heroTitle">
                Estamos prontos
                <br />
                para <span className="fc-accent">ouvir você.</span>
              </h1>
              <p className="fc-heroLead">
                Juntos, encontramos o mix ideal de produtos para fazer seu negócio crescer.
              </p>
            </div>
            <div className="fc-heroVisual">
              <div className="fc-heroTilt">
                <div className="fc-heroPhoto">
                  <img src={imgHero} alt="Equipe pronta para atender" />
                </div>
              </div>
              <div className="fc-heroBadge">
                <p className="fc-heroBadgeValue">24h</p>
                <p className="fc-heroBadgeLabel">Atendimento Logístico</p>
              </div>
            </div>
          </div>
        </section>

        <section className="fc-bento" aria-label="Canais de contato">
          <div className="fc-inner fc-bentoGrid">
            <article className="fc-card">
              <div className="fc-cardIcon">
                <img src={iconPhone} alt="" width={18} height={18} />
              </div>
              <h2 className="fc-cardTitle">Canais Diretos</h2>
              <p className="fc-cardBody">
                Quer ser nosso parceiro, cliente ou fazer parte do time? Estamos prontos para
                você.
              </p>
            </article>
            <article className="fc-card">
              <h2 className="fc-cardHeading">Fale conosco:</h2>
              <ul className="fc-contactList">
                <li>
                  <img src={iconPhone} alt="" width={11} height={11} />
                  <a href="tel:+554933532187">(49) 3353 2187</a>
                </li>
                <li>
                  <img src={iconWhatsapp} alt="" width={12} height={12} />
                  <a href="https://wa.me/5549999879224" target="_blank" rel="noreferrer">
                    WhatsApp: (49) 99987-9224
                  </a>
                </li>
                <li>
                  <img src={iconEmail} alt="" width={12} height={9} />
                  <a href="mailto:bredadistribuidora@gmail.com">bredadistribuidora@gmail.com</a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="fc-logistics" aria-labelledby="fc-log-heading">
          <div className="fc-inner fc-logGrid">
            <div className="fc-logCopy">
              <p className="fc-kickerMuted">Presença no oeste catarinense</p>
              <h2 id="fc-log-heading" className="fc-logTitle">
                Centro Logístico
              </h2>
              <p className="fc-logLead">
                Nossa infraestrutura é estrategicamente posicionada para garantir que o tempo de
                entrega seja o menor possível.
              </p>
              <div className="fc-infoStack">
                <div className="fc-infoRow">
                  <img src={iconPin} alt="" width={20} height={25} />
                  <div>
                    <h3>Endereço Principal</h3>
                    <p>BR 282, km 520,7</p>
                    <p>Xaxim - SC, 89825-000</p>
                  </div>
                </div>
                <div className="fc-infoRow">
                  <img src={iconClock} alt="" width={25} height={25} />
                  <div>
                    <h3>Horário de Funcionamento</h3>
                    <p>Segunda a Sexta: 08:00 - 18:00</p>
                    <p>Sábados: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fc-logMap">
              <img src={imgWarehouse} alt="Centro logístico Breda" className="fc-logMapImg" />
              <div className="fc-logMapTint" aria-hidden="true">
                <img src={imgMapOverlay} alt="" className="fc-logMapOverlay" />
              </div>
              <a className="fc-mapBtn" href={MAPS_URL} target="_blank" rel="noreferrer">
                <img src={iconMapBtn} alt="" width={11} height={11} />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="fc-footer">
        <p>© 2026 BREDA Distribuidora. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
