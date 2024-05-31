const User = require("../models/User")

const UserController = {
    getAll: async (req, res) => {
        try {
            const response = User.getAll()

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

module.exports = UserController