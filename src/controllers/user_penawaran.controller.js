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

const createUserPenawaran = async (req, res) => {
  try {
    const data = {
      no_penawaran: req.body.no_penawaran,
      id_user: Number(req.body.id_user),
      id_product: Number(req.body.id_product),
      tanggal_dibuat_penawaran: req.body.tanggal_dibuat_penawaran,
      tanggal_mulai_penawaran: req.body.tanggal_mulai_penawaran,
      tanggal_berakhir_penawaran: req.body.tanggal_berakhir_penawaran,
      Terms_of_Payment: req.body.Terms_of_Payment,
      Terms_of_Delivery: req.body.Terms_of_Delivery,
      description: req.body.description,
      id_status_penawaran: Number(req.body.id_status_penawaran),
      id_status_proses_penawaran: Number(req.body.id_status_proses_penawaran),
    };
    console.log(data);
    const newUserPenawaran = await userPenawaranModel.createUserPenawaran(data);
    return res.status(201).json({
      message: "Penawaran baru berhasil dibuat",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Kesalahan saat membuat user penawaran" });
  }
};

const updateUserPenawaran = async (req, res) => {
  const { id } = req.params;
  const documentData = req.body;

  try {
    const updatedUserPenawaran = await userPenawaranModel.updateUserPenawaran(
      id,
      documentData
    );
    console.log(updatedUserPenawaran);
    return res.status(200).json({
      message: `User penawaran dengan ID ${id} berhasil diperbarui`,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Kesalahan saat memperbarui user penawaran" });
  }
};

const deleteUserPenawaran = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await userPenawaranModel.deleteUserPenawaran(id);
    return res.status(204).send();  // No content needed in the response body
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Kesalahan saat menghapus user penawaran" });
  }
};

module.exports = {
  getAllUserPenawaran,
  getUserPenawaranDetail,
  getUserPenawaranByIdUser,
  getUserPenawaranByStatusPenawaran,
  getUserPenawaranByStatusProsesPenawaran,
  createUserPenawaran,
  updateUserPenawaran,
  deleteUserPenawaran,
};
