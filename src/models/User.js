const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

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
  const user = await prisma.user.findUnique({
    where: { id_user: id }
  });
  if (user) {
    const { password, ...userData } = user;
    return userData;
  } else {
    return null;
  }
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const createUser = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  return await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword
    }
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
  updateUserTokens,
  comparePassword
};
