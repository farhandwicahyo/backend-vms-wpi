const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProvinsis = async () => {
  return await prisma.mst_provinsi.findMany();
};

const getProvinsiById = async (id) => {
  return await prisma.mst_provinsi.findUnique({
    where: { id_provinsi: Number(id) },
  });
};

const createProvinsi = async (provinsiData) => {
  return await prisma.mst_provinsi.create({
    data: provinsiData,
  });
};

const updateProvinsi = async (id, provinsiData) => {
  return await prisma.mst_provinsi.update({
    where: { id_provinsi: Number(id) },
    data: provinsiData,
  });
};

const deleteProvinsi = async (id) => {
  return await prisma.mst_provinsi.delete({
    where: { id_provinsi: Number(id) },
  });
};

module.exports = {
  getAllProvinsis,
  getProvinsiById,
  createProvinsi,
  updateProvinsi,
  deleteProvinsi,
};
