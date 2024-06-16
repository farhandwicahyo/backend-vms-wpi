const userPenawaranModel = require("../models/UserPenawaran");

const getAllUserPenawaran = async (req, res) => {
  try {
    const userPenawaran = await userPenawaranModel.getAllUserPenawaran();
    res.status(200).json(userPenawaran);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserPenawaranDetail = async (req, res) => {
  const { penawaranId } = req.params;
  try {
    const userPenawaran = await userPenawaranModel.getUserPenawaranDetail(
      penawaranId
    );
    return res.status(200).json(userPenawaran);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserPenawaranByIdUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const userPenawaran = await userPenawaranModel.getUserPenawaranByIdUser(
      userId
    );
    if (!userPenawaran) {
      return res.status(404).json({ error: "User penawaran not found" });
    }
    return res.status(200).json(userPenawaran);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserPenawaranByStatusPenawaran = async (req, res) => {
  const { statuspenawaranId } = req.params;
  try {
    const userPenawaran =
      await userPenawaranModel.getUserPenawaranByStatusPenawaran(
        statuspenawaranId
      );
    if (!userPenawaran) {
      return res.status(404).json({ error: "User penawaran not found" });
    }
    return res.status(200).json(userPenawaran);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserPenawaranByStatusProsesPenawaran = async (req, res) => {
  const { statusprosespenawaranId } = req.params;
  try {
    const userPenawaran =
      await userPenawaranModel.getUserPenawaranByStatusProsesPenawaran(
        statusprosespenawaranId
      );
    if (!userPenawaran) {
      return res.status(404).json({ error: "User penawaran not found" });
    }
    return res.status(200).json(userPenawaran);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// const createUserPenawaran = async (req, res) => {
//   try {
//     const data = {
//       id_user: req.body.id_user,
//       brand: req.body.brand,
//       price: req.body.price,
//       id_kurs: Number(req.body.id_kurs),
//       stock: req.body.stock,
//       volume: req.body.volume,
//       id_satuan: Number(req.body.id_satuan),
//       address: req.body.address,
//       item_image: req.body.item_image,
//       description: req.body.description,
//       id_jenis_product: Number(req.body.id_jenis_product),
//       id_provinsi: Number(req.body.id_provinsi),
//       id_kota: Number(req.body.id_kota),
//       company_category: req.body.company_category,
//       storage_type: req.body.storage_type,
//       packaging: req.body.packaging,
//     };
//     console.log(data);
//     const newUserPenawaran = await userPenawaranModel.createUserPenawaran(data);
//     res.status(201).json(newUserPenawaran);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const updateUserPenawaran = async (req, res) => {
//   const { id } = req.params;
//   const documentData = req.body;

//   try {
//     const updatedUserPenawaran = await userPenawaranModel.updateUserPenawaran(
//       id,
//       documentData
//     );
//     console.log(updatedUserPenawaran);
//     return res.status(200).json(updatedUserPenawaran);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const deleteUserPenawaran = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   try {
//     await userPenawaranModel.deleteUserPenawaran(id);
//     res.status(204).send();
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
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
