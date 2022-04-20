const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUsername(user, newUserName){
        user = new User()
        user.setUsername = newUserName
        return user
    }
}

const update = UserService.updateUserUsername()
console.log(update)

module.exports = UserService