const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    
    /**
     * Creacion de un usuario mediante UserService
     * 
     */
    test(`1. Create a new user using the UserService`, () => {

        const user = UserService.create(1, "LuianOrtiz", "Luian")
        
        expect(user.username).toBe("LuianOrtiz")
        expect(user.name).toBe("Luian")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    /**
     * Convertir el objeto user a una lista de atributos
     */
    test(`2. Get all user data in a list`, () => {
        const user = UserService.create(1, "LuianOrtiz", "Luian")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("LuianOrtiz")
        expect(userInfoList[2]).toBe("Luian")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    /**
     * 
     * 
     */
    test(`3. Update username`, () => {
        const user = UserService.create(1, "LuianOrtiz", "Luian")
        UserService.updateUserUsername(user, "Angel")
        expect(user.username).toBe("Angel")
    })

    test(`4. Given a list of users five me the list of usernames`, () => {
        const user1 = UserService.create(1, "LuianOrtiz1", "Luian")
        const user2 = UserService.create(1, "LuianOrtiz2", "Luian")
        const user3 = UserService.create(1, "LuianOrtiz3", "Luian")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        
        expect(usernames).toContain("LuianOrtiz1")
        expect(usernames).toContain("LuianOrtiz2")
        expect(usernames).toContain("LuianOrtiz3")
    } )

})