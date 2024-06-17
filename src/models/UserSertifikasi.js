const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUserSertifikasi = async () => {
  try {
    return await prisma.$queryRaw`
        SELECT user_sertifikasi.id_sertifikasi, user.nama_perusahaan, user_sertifikasi.nama_sertifikasi, mst_jenis_sertifikasi.nama_sertifikasi AS 'jenis_sertifikasi', user_sertifikasi.tanggal_berlaku, user_sertifikasi.tanggal_berakhir, user_sertifikasi.file  FROM user_sertifikasi
        LEFT JOIN User ON user_sertifikasi.id_user = user.id_user 
        LEFT JOIN mst_jenis_sertifikasi ON user_sertifikasi.id_jenis_sertifikasi = mst_jenis_sertifikasi.id_jenis_sertifikasi
    `;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserSertifikasiById = async (id) => {
  try {
    return await prisma.$queryRaw`
    SELECT user_sertifikasi.id_sertifikasi, user.nama_perusahaan, user_sertifikasi.nama_sertifikasi, mst_jenis_sertifikasi.nama_sertifikasi AS 'jenis_sertifikasi', user_sertifikasi.tanggal_berlaku, user_sertifikasi.tanggal_berakhir, user_sertifikasi.file FROM user_sertifikasi
    LEFT JOIN User ON user_sertifikasi.id_user = user.id_user 
    LEFT JOIN mst_jenis_sertifikasi ON user_sertifikasi.id_jenis_sertifikasi = mst_jenis_sertifikasi.id_jenis_sertifikasi
    WHERE user_sertifikasi.id_sertifikasi = ${Number(id)}
  `;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserSertifikasiByIdUser = async (userId) => {
  try {
    const response = await prisma.$queryRaw(Prisma.sql`
      SELECT 
          user_sertifikasi.id_sertifikasi, 
          user.nama_perusahaan, 
          user_sertifikasi.nama_sertifikasi, 
          mst_jenis_sertifikasi.nama_sertifikasi AS 'jenis_sertifikasi', 
          user_sertifikasi.tanggal_berlaku, 
          user_sertifikasi.tanggal_berakhir, 
          user_sertifikasi.file
      FROM user_sertifikasi
      LEFT JOIN User ON user_sertifikasi.id_user = user.id_user
      LEFT JOIN mst_jenis_sertifikasi ON user_sertifikasi.id_jenis_sertifikasi = mst_jenis_sertifikasi.id_jenis_sertifikasi
      WHERE user.id_user = ${userId}
    `);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserSertifikasiByIdJenisSertifikasi = async (jenisSertifikasiId) => {
  try {
    return await prisma.$queryRaw`
        SELECT user_sertifikasi.id_sertifikasi, user.nama_perusahaan, user_sertifikasi.nama_sertifikasi, mst_jenis_sertifikasi.nama_sertifikasi AS 'jenis_sertifikasi', user_sertifikasi.tanggal_berlaku, user_sertifikasi.tanggal_berakhir 
        FROM user_sertifikasi
        LEFT JOIN User ON user_sertifikasi.id_user = user.id_user 
        LEFT JOIN mst_jenis_sertifikasi ON user_sertifikasi.id_jenis_sertifikasi = mst_jenis_sertifikasi.id_jenis_sertifikasi
        WHERE user_sertifikasi.id_jenis_sertifikasi = ${Number(
          jenisSertifikasiId
        )}
      `;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createUserSertifikasi = async (sertifikasiData) => {
    try {
        const {
          id_user,
          nama_sertifikasi,
          id_jenis_sertifikasi,
          tanggal_berlaku,
          tanggal_berakhir,
          file,
        } = sertifikasiData;
    
        const response = await prisma.$queryRaw`
          INSERT INTO user_sertifikasi (id_user, nama_sertifikasi, id_jenis_sertifikasi, tanggal_berlaku, tanggal_berakhir, file)
          VALUES (${id_user}, ${nama_sertifikasi}, ${id_jenis_sertifikasi}, ${tanggal_berlaku}, ${tanggal_berakhir}, ${file})
        `;
    
        return response;
      } catch (error) {
        throw new Error(error.message);
      }
};

const updateUserSertifikasi = async (id, sertifikasiData) => {
    try {
        const {
          id_user,
          nama_sertifikasi,
          id_jenis_sertifikasi,
          tanggal_berlaku,
          tanggal_berakhir,
          file,
        } = sertifikasiData;
    
        const response = await prisma.$queryRaw`
          UPDATE user_sertifikasi
          SET id_user = ${id_user},
              nama_sertifikasi = ${nama_sertifikasi},
              id_jenis_sertifikasi = ${id_jenis_sertifikasi},
              tanggal_berlaku = ${tanggal_berlaku},
              tanggal_berakhir = ${tanggal_berakhir},
              file = ${file}
          WHERE id_sertifikasi = ${id}
        `;
    
        return response;
      } catch (error) {
        throw new Error(error.message);
      }
};

const deleteUserSertifikasi = async (id) => {
    try {
        const response = await prisma.$queryRaw`
          DELETE FROM user_sertifikasi WHERE id_sertifikasi = ${id}
        `
    
        return response
      } catch (error) {
        throw new Error(error.message)
      }
};

module.exports = {
  getAllUserSertifikasi,
  getUserSertifikasiById,
  getUserSertifikasiByIdUser,
  getUserSertifikasiByIdJenisSertifikasi,
  createUserSertifikasi,
  updateUserSertifikasi,
  deleteUserSertifikasi,
};
