import '../css/Fale-conosco.css';

const imgHero = 'img/fotos_figma/equipe-fale-conosco-hero.png';
const iconPhone = 'img/icones/icon-telefone-vermelho.svg';
const iconWhatsapp = 'img/icones/icon-whatsapp-vermelho.svg';
const iconEmail = 'img/icones/icon-email-vermelho.svg';
const iconPin = 'img/icones/icon-pin-local-vermelho.svg';
const iconClock = 'img/icones/icon-relogio-vermelho.svg';
const iconMapBtn = 'img/icones/icon-maps-seta-vermelho.svg';

/** Short link → Breda Distribuidora no Google Maps */
const MAPS_URL = 'https://maps.app.goo.gl/Ns92dGy1ZEqpWcTP9';

/** Incorporar mapa (Google); se o embed parar de carregar, gere de novo em Maps → Compartilhar → Incorporar mapa */
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.3532590103364!2d-52.5428753!3d-26.9557103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4c8bd7b3d54f9%3A0x815640870e56a7ca!2sBreda%20Distribuidora%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr';

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
                    <p>BR 282, km 520,7 — interior</p>
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
              <iframe
                className="fc-logMapFrame"
                title="Mapa: Breda Distribuidora — BR 282 km 520,7, Xaxim"
                src={MAPS_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="fc-mapBtn" href={MAPS_URL} target="_blank" rel="noreferrer">
                <img src={iconMapBtn} alt="" width={11} height={11} />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
