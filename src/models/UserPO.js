const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUserPO = async () => {
//   return await prisma.$queryRaw`
//       SELECT 
//          user_po.no_po,
//          user_penawaran.no_penawaran,
//          user.nama_perusahaan,
//          user_product.brand,
//          user_po.tanggal_dibuat_po,
//          user_po.tanggal_mulai_po,
//          user_po.tanggal_berakhir_po,
//          user_po.Terms_of_Payment,
//          user_po.Terms_of_Delivery,
//          user_po.description
//       FROM user_po
//       LEFT JOIN user ON user_po.id_user = user.id_user
//       LEFT JOIN user_penawaran ON user_po.no_penawaran = user_penawaran.no_penawaran
//       LEFT JOIN user_product ON user_po.id_product = user_product.id_product
//     `;
};

const getUserPO = async () => {
  return await prisma.$queryRaw`
      SELECT 
         user_po.no_po,
         user_penawaran.no_penawaran,
         user.nama_perusahaan,
         user_product.brand,
         user_po.tanggal_dibuat_po,
         user_po.tanggal_mulai_po,
         user_po.tanggal_berakhir_po,
         user_po.Terms_of_Payment,
         user_po.Terms_of_Delivery,
         user_po.description
      FROM user_po
      LEFT JOIN user ON user_po.id_user = user.id_user
      LEFT JOIN user_penawaran ON user_po.no_penawaran = user_penawaran.no_penawaran
      LEFT JOIN user_product ON user_po.id_product = user_product.id_product
    `;
};

module.exports = {
  getAllUserPO,
  getUserPO,
};
