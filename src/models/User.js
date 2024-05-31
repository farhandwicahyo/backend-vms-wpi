const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
  deleteUser
};
