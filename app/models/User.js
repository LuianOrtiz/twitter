class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getUserName(){
        return this.username
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    get getBio(){
        return this.bio
    }
    set setBio(newBio){
        this.bio = newBio
    }
    get getDataCreated(){
        return this.dataCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
}
module.exports = User