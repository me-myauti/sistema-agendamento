import '../CadastroPaciente/style.css'

export default function CadastroPaciente() {
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1>Cadastro Paciente</h1>
          <form>
            <label className="label" htmlFor="name">
              Nome Completo:
              <input
                id="namePaciente"
                className="input"
                type="name"
                name="name"
                placeholder="Nome Completo"
                required="required"
              />
            </label>

            <label className="label" htmlFor="cpf">
              CPF :
              <input
                id="cpfPaciente"
                className="input"
                type="number"
                name="cpf"
                placeholder="CPF"
                required="required"
              />
            </label>

            <label className="label" htmlFor="contact">
              Contato :
              <input
                id="contatoPaciente"
                className="input"
                type="tel"
                name="contato"
                placeholder="(xx) xxxxx-xxxx"
                required="required"
              />
            </label>

            <label className="label" htmlFor="contact">
              Data de nascimento :
              <input
                id="dataPaciente"
                className="input"
                type="text"
                name="contato"
                placeholder="dd/mm/aaaa"
                required="required"
              />
            </label>

            <div className="button">
              <button className="buttonlogin">Entrar</button>{' '}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
