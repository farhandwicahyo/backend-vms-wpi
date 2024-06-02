const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByEmailOrUsername = async (identifier) => {
  return await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { username: identifier }
      ]
    }
  });
};

const updateUserTokens = async (userId, accessToken, refreshToken) => {
  return await prisma.user.update({
    where: { id_user: userId },
    data: { accessToken, refreshToken }
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id_user: id }
  });
};

const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData
  });
};

const updateUser = async (id, userData) => {
  return await prisma.user.update({
    where: { id_user: id },
    data: userData
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id_user: id }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmailOrUsername,
  updateUserTokens
};
