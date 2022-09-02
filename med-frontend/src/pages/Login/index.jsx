import './style.css'
import passVisible from './passvisible'

export default function Login() {
  return (
    <div className="main">
      <div className="content">
        <h1>LOGIN</h1>
        <form>
          <label className="label" htmlFor="cpf">
            CPF :
            <input
              className="input"
              type="number"
              name="cpf"
              placeholder="CPF"
              required="required"
            />
          </label>

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
            <button className="buttonlogin">Enviar</button>{' '}
          </div>
        </form>
      </div>
    </div>
  )
}
