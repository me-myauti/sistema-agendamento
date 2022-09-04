export default function passVisible() {
  const password = document.getElementById('password')

  password.type = password.type == 'password' ? 'text' : 'password'

  const confirmpass = document.getElementById('confirmpass')
  confirmpass.type = confirmpass.type == 'password' ? 'text' : 'password'
}
