import Db from './db.js'

export default class User {
  static saveUser(name, email, password) {
    const users = Db.getData('users')
    const existingUser = users.find((user) => user.email == email)

    if (existingUser) {
      console.log('user exist')
    } else {
      const user = {
        id: Date.now(),
        name,
        email,
        password,
      }

      users.push(user)

      Db.saveToStorage('users', users)
    }
  }

  static login(email, password) {
    const users = Db.getData('users')
    const existingUser = users.find((user) => user.email == email)

    if (existingUser && existingUser.password == password) {
      return existingUser
    } else {
      return 'Email or password incorrect'
    }
  }

  static deleteUser(id) {
    const users = Db.getData('users')
    const newUsers = users.filter((user) => user.id !== id)

    Db.saveToStorage('users', newUsers)
  }
}
