const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

const User = {
    getAll: async () => {
        try {
            const users = await prisma.user.findMany()

            return users
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getById: async (id) => {
        try {
            const user = await prisma.$queryRaw`
                SELECT * FROM User WHERE id = ${id}
            `

            return user
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = User