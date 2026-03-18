import '../css/Fale-conosco.css';

export default function FaleConosco() {
  return (
    <section className="section">
      <div>
        <p className="title">Fale conosco pelos canais:</p>
        <table>
          <tr>
            <td>
              <img
                className="icon"
                src="/img/whatsapp-icone.png"
                alt="whatsapp"
              />
            </td>
            <td>49 99987 9224</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="/img/phone-icone.png"
                alt="telefone comercial"
              />
            </td>
            <td>49 3353 2187</td>
          </tr>
          <tr>
            <td>
              <img className="icon" src="/img/email-icone.png" alt="" />
            </td>
            <td>bredadistribuidora@gmail.com</td>
          </tr>
        </table>
      </div>
    </section>
  );
}
