const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUserPenawaran = async () => {
  return await prisma.$queryRaw`
      SELECT 
          user_penawaran.no_penawaran,
          user_product.brand,
          user_product.price,
          mst_kurs.nama_kurs,
          user_product.stock,
          mst_satuan.nama_satuan,
          user_penawaran.tanggal_dibuat_penawaran,
          user_penawaran.tanggal_mulai_penawaran,
          user_penawaran.tanggal_berakhir_penawaran,
          user_penawaran.Terms_of_Payment,
          user_penawaran.Terms_of_Delivery,
          user_penawaran.description,
          status_penawaran.nama_status AS nama_status_penawaran,
          status_proses.nama_status AS nama_status_proses_penawaran
      FROM user_penawaran 
      LEFT JOIN user_product ON user_penawaran.id_product = user_product.id_product
      LEFT JOIN mst_kurs ON user_product.id_kurs = mst_kurs.id_kurs
      LEFT JOIN mst_satuan ON user_product.id_satuan = mst_satuan.id_satuan
      LEFT JOIN mst_status AS status_penawaran ON user_penawaran.id_status_penawaran = status_penawaran.id_status
      LEFT JOIN mst_status AS status_proses ON user_penawaran.id_status_proses_penawaran = status_proses.id_status;
    `;
};

const getUserPenawaranDetail = async (id) => {
  try {
    const data = await prisma.$queryRaw`
    SELECT
        user_penawaran.id_penawaran, 
        user_penawaran.no_penawaran,
        user.nama_perusahaan,
        user_product.brand, 
        user_product.price, 
        mst_kurs.nama_kurs, 
        user_product.stock, 
        user_product.volume, 
        mst_satuan.nama_satuan, 
        user_product.address, 
        user_product.item_image, 
        user_product.description, 
        mst_jenis_product.nama_jenis_product, 
        mst_provinsi.nama_provinsi, 
        mst_kota.nama_kota, 
        user_product.company_category, 
        user_product.storage_type, 
        user_product.packaging, 
        user_penawaran.tanggal_dibuat_penawaran,
        user_penawaran.tanggal_mulai_penawaran,
        user_penawaran.tanggal_berakhir_penawaran,
        user_penawaran.Terms_of_Payment,
        user_penawaran.Terms_of_Delivery,
        user_penawaran.description,
        status_penawaran.nama_status AS nama_status_penawaran,
        status_proses.nama_status AS nama_status_proses_penawaran
    FROM user_penawaran 
    LEFT JOIN User ON user_penawaran.id_penawaran = user.id_user 
    LEFT JOIN user_product ON user_penawaran.id_product = user_product.id_product
    LEFT JOIN mst_kurs ON user_product.id_kurs = mst_kurs.id_kurs
    LEFT JOIN mst_satuan ON user_product.id_satuan = mst_satuan.id_satuan
    LEFT JOIN mst_jenis_product ON user_product.id_jenis_product = mst_jenis_product.id_jenis_product
    LEFT JOIN mst_provinsi ON user_product.id_provinsi = mst_provinsi.id_provinsi
    LEFT JOIN mst_kota ON user_product.id_kota = mst_kota.id_kota
    LEFT JOIN mst_status AS status_penawaran ON user_penawaran.id_status_penawaran = status_penawaran.id_status
    LEFT JOIN mst_status AS status_proses ON user_penawaran.id_status_proses_penawaran = status_proses.id_status
    WHERE user_penawaran.id_penawaran =  ${Number(id)}
  `;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserPenawaranByIdUser = async (userId) => {
  try {
    const data = await prisma.$queryRaw`
    SELECT 
        user_penawaran.no_penawaran,
        user_product.brand,
        user_product.price,
        mst_kurs.nama_kurs,
        user_product.stock,
        mst_satuan.nama_satuan,
        user_penawaran.tanggal_dibuat_penawaran,
        user_penawaran.tanggal_mulai_penawaran,
        user_penawaran.tanggal_berakhir_penawaran,
        user_penawaran.Terms_of_Payment,
        user_penawaran.Terms_of_Delivery,
        user_penawaran.description,
        status_penawaran.nama_status AS nama_status_penawaran,
        status_proses.nama_status AS nama_status_proses_penawaran
    FROM user_penawaran 
    LEFT JOIN user_product ON user_penawaran.id_product = user_product.id_product
    LEFT JOIN mst_kurs ON user_product.id_kurs = mst_kurs.id_kurs
    LEFT JOIN mst_satuan ON user_product.id_satuan = mst_satuan.id_satuan
    LEFT JOIN mst_status AS status_penawaran ON user_penawaran.id_status_penawaran = status_penawaran.id_status
    LEFT JOIN mst_status AS status_proses ON user_penawaran.id_status_proses_penawaran = status_proses.id_status
    WHERE user_penawaran.id_user =  ${Number(userId)}
  `;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserPenawaranByStatusPenawaran = async (statuspenawaranId) => {
  try {
    const data = await prisma.$queryRaw`
        SELECT 
            user_penawaran.no_penawaran,
            user_product.brand,
            user_product.price,
            mst_kurs.nama_kurs,
            user_product.stock,
            mst_satuan.nama_satuan,
            user_penawaran.tanggal_dibuat_penawaran,
            user_penawaran.tanggal_mulai_penawaran,
            user_penawaran.tanggal_berakhir_penawaran,
            user_penawaran.Terms_of_Payment,
            user_penawaran.Terms_of_Delivery,
            user_penawaran.description,
            status_penawaran.nama_status AS nama_status_penawaran,
            status_proses.nama_status AS nama_status_proses_penawaran
        FROM user_penawaran 
        LEFT JOIN user_product ON user_penawaran.id_product = user_product.id_product
        LEFT JOIN mst_kurs ON user_product.id_kurs = mst_kurs.id_kurs
        LEFT JOIN mst_satuan ON user_product.id_satuan = mst_satuan.id_satuan
        LEFT JOIN mst_status AS status_penawaran ON user_penawaran.id_status_penawaran = status_penawaran.id_status
        LEFT JOIN mst_status AS status_proses ON user_penawaran.id_status_proses_penawaran = status_proses.id_status
        WHERE user_penawaran.id_status_penawaran = ${Number(statuspenawaranId)}
          `;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserPenawaranByStatusProsesPenawaran = async (
  statusprosespenawaranId
) => {
  try {
    const data = await prisma.$queryRaw`
        SELECT 
          user_penawaran.no_penawaran,
          user_product.brand,
          user_product.price,
          mst_kurs.nama_kurs,
          user_product.stock,
          mst_satuan.nama_satuan,
          user_penawaran.tanggal_dibuat_penawaran,
          user_penawaran.tanggal_mulai_penawaran,
          user_penawaran.tanggal_berakhir_penawaran,
          user_penawaran.Terms_of_Payment,
          user_penawaran.Terms_of_Delivery,
          user_penawaran.description,
          status_penawaran.nama_status AS nama_status_penawaran,
          status_proses.nama_status AS nama_status_proses_penawaran
      FROM user_penawaran 
      LEFT JOIN user_product ON user_penawaran.id_product = user_product.id_product
      LEFT JOIN mst_kurs ON user_product.id_kurs = mst_kurs.id_kurs
      LEFT JOIN mst_satuan ON user_product.id_satuan = mst_satuan.id_satuan
      LEFT JOIN mst_status AS status_penawaran ON user_penawaran.id_status_penawaran = status_penawaran.id_status
      LEFT JOIN mst_status AS status_proses ON user_penawaran.id_status_proses_penawaran = status_proses.id_status
      WHERE user_penawaran.id_status_proses_penawaran = ${Number(
        statusprosespenawaranId
      )}
            `;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// const createUserPenawaran = async (documentData) => {
//   try {
//     const {
//       id_user,
//       brand,
//       price,
//       id_kurs,
//       stock,
//       volume,
//       id_satuan,
//       address,
//       item_image,
//       description,
//       id_jenis_product,
//       id_provinsi,
//       id_kota,
//       company_category,
//       storage_type,
//       packaging,
//     } = documentData;

//     const response = await prisma.$queryRaw`
//         INSERT INTO user_product
//           (
//               id_user,
//               brand,
//               price,
//               id_kurs,
//               stock,
//               volume,
//               id_satuan,
//               address,
//               item_image,
//               description,
//               id_jenis_product,
//               id_provinsi,
//               id_kota,
//               company_category,
//               storage_type,
//               packaging
//           )
//         VALUES
//           (
//             ${id_user},
//             ${brand},
//             ${price},
//             ${id_kurs},
//             ${stock},
//             ${volume},
//             ${id_satuan},
//             ${address},
//             ${item_image},
//             ${description},
//             ${id_jenis_product},
//             ${id_provinsi},
//             ${id_kota},
//             ${company_category},
//             ${storage_type},
//             ${packaging}
//           )
//       `;

//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const updateUserPenawaran = async (id, documentData) => {
//   try {
//     const {
//       id_user,
//       brand,
//       price,
//       id_kurs,
//       stock,
//       volume,
//       id_satuan,
//       address,
//       item_image,
//       description,
//       id_jenis_product,
//       id_provinsi,
//       id_kota,
//       company_category,
//       storage_type,
//       packaging,
//     } = documentData;

//     const response = await prisma.$queryRaw`
//         UPDATE user_product
//         SET
//           id_user = ${id_user},
//           brand = ${brand},
//           price = ${price},
//           id_kurs = ${id_kurs},
//           stock = ${stock},
//           volume = ${volume},
//           id_satuan = ${id_satuan},
//           address = ${address},
//           item_image = ${item_image},
//           description = ${description},
//           id_jenis_product = ${id_jenis_product},
//           id_provinsi = ${id_provinsi},
//           id_kota = ${id_kota},
//           company_category = ${company_category},
//           storage_type = ${storage_type},
//           packaging = ${packaging}
//         WHERE id_product = ${id}
//       `;

//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const deleteUserPenawaran = async (id) => {
//   try {
//     const response = await prisma.$queryRaw`
//       DELETE FROM user_product WHERE id_product = ${id}
//     `;

//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

module.exports = {
  getAllUserPenawaran,
  getUserPenawaranDetail,
  getUserPenawaranByIdUser,
  getUserPenawaranByStatusPenawaran,
  getUserPenawaranByStatusProsesPenawaran,
  //   createUserPenawaran,
  //   updateUserPenawaran,
  //   deleteUserPenawaran,
};
