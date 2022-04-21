const User = require('./../models/User')

class UserService{

    
    /**
     * 
     * @param {number} id 
     * @param {string} username 
     * @param {string} name 
     * @returns new user object
     */
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    /**
     * 
     * @param {User} user 
     * @returns userList
     */
    static getInfo(user){
        return Object.values(user)
    }

    /**
     * 
     * @param {User} user 
     * @param {string} newUserName 
     * @returns User Object
     */
    static updateUserUsername(user, newUserName){
        user.setUsername = newUserName;
        return user
    }
    
    /**
     * 
     * @param {User []} usersList 
     * @returns usernameList
     */
    static getAllUsernames(usersList){
        const usernameList = usersList.map(function(user) {
            return user.username
        })
        return usernameList
    }
}

module.exports = UserService