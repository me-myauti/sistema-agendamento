import './style.css'
import passVisible from '../Login/passvisible'

export default function CadastroAdmin() {
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1>Cadastro Admin</h1>
          <form>
            <label className="label" htmlFor="name">
              Nome Completo:
              <input
                id="nameAdmin"
                className="input"
                type="name"
                name="name"
                placeholder="Nome"
                required="required"
              />
            </label>

            <label className="label" htmlFor="cpf">
              CPF :
              <input
                id="cpfAdmin"
                className="input"
                type="number"
                name="cpf"
                placeholder="CPF"
                required="required"
              />
            </label>

            <fieldset className="fieldset">
              <legend>Escolha quem você quem cadastrar</legend>

              <div className="section-radio">
                <input type="radio" name="radio" id="medico" value="radio" />
                <label htmlFor="medico"> Médico </label>

                <input type="radio" name="radio" id="atendente" value="radio" />
                <label htmlFor="atendente">Atendente</label>
              </div>
            </fieldset>

            <label className="label" htmlFor="password">
              Senha :
              <input
                id="password"
                className="input"
                type="password"
                name="password"
                placeholder="Senha"
                required="required"
              />
            </label>

            <label className="label" htmlFor="confirmpass">
              Confirmar Senha :
              <input
                id="confirmpass"
                className="input"
                type="password"
                name="confirmpass"
                placeholder="Senha"
                required="required"
              />
            </label>

            <div className="checkbox">
              <label className="checkpass" htmlFor="checkPass">
                Ver senha
              </label>
              <input
                id="inputpass"
                onClick={passVisible}
                className="inputpass"
                type="checkbox"
              />
            </div>

            <div className="button">
              <button className="buttonlogin">Entrar</button>{' '}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
