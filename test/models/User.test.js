const User = require("./../../app/models/User")

describe("Unit Tests for User Class", () => {
    
    /**
     * Validacion de la creacion de un objeto de tipo usuario
     * 1er y 2do requerimiento 
     */
    test(`Create user object`, () => {
        const user = new User(1,"LuianOrtiz","Luian","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("LuianOrtiz")
        expect(user.name).toBe("Luian")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    /**
     * Getters para mi clase de tipo usuario
     * 3er Requerimiento
     */
    test(`Add Getters to my user class`, () =>{
        const user = new User(1,"LuianOrtiz", "Luian", "Bio")

        expect(user.getUserName).toBe("LuianOrtiz")
        expect(user.getBio).toBe("Bio")
        expect(user.getDataCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    /**
     * Setters to my User Class
     * 4to Requerimiento
     */
    test(`Add Setters to my user class`, () => {
        const user = new User(1,"LuianOrtiz", "Luian", "Bio")

        user.setUsername = "Mate"
        expect(user.username).toBe("Mate")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })
})