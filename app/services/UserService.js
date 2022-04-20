const User = require('./../models/User')

class UserService{

    /**
     * Creacion de un usuario mediante UserService
     * 
     */
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

     /**
     * Convertir el objeto user a una lista de atributos
     */
    static getInfo(user){
        return Object.values(user)
    }

    /**
     * Cambiar el nombre de usuario
     * 
     */
    static updateUserUsername(user, newUserName){
        user.setUsername = newUserName;
        return user
    }
}

module.exports = UserService