const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllkota = async () => {
  return await prisma.mst_kota.findMany();
};

const getKotaById = async (id) => {
  return await prisma.mst_kota.findUnique({
    where: { id_kota: Number(id) },
  });
};

const getKotaByProvinsiId = async (provinsiId) => {
  return await prisma.mst_kota.findMany({
    where: { id_provinsi: Number(provinsiId) },
  });
};

const createKota = async (kotaData) => {
  return await prisma.mst_kota.create({
    data: kotaData,
  });
};

const updateKota = async (id, kotaData) => {
  return await prisma.mst_kota.update({
    where: { id_kota: Number(id) },
    data: kotaData,
  });
};

const deleteKota = async (id) => {
  return await prisma.mst_kota.delete({
    where: { id_kota: Number(id) },
  });
};

module.exports = {
  getAllkota,
  getKotaById,
  getKotaByProvinsiId,
  createKota,
  updateKota,
  deleteKota,
};
