const UserService = require('./../services/UserService')

class UserView{

    /**
     * 
     * @param {UserService} payload 
     * @returns User object
     */
    static createUser(payload){
        if(payload === null){
            return {error: "payload no existe"}
        }
        else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
            return UserService.create(payload.id, payload.username, payload.name)
        }else{
            return {error: "Necesitan tener un valor valido"}
        }
    }

}

module.exports = UserView