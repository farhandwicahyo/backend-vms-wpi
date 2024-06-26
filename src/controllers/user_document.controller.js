const userDocumentModel = require("../models/UserDocument");

const getAllUserDocuments = async (req, res) => {
  try {
    const userDocuments = await userDocumentModel.getAllUserDocuments();
    res.status(200).json(userDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserDocumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const userDocument = await userDocumentModel.getUserDocumentById(id);
    if (!userDocument)
      return res.status(404).json({ error: "Document not found" });
    res.status(200).json(userDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserDocumentByIdUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const userDocuments = await userDocumentModel.getUserDocumentByIdUser(
      userId
    );
    return res.status(200).json(userDocuments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserDocumentByIdJenisDocument = async (req, res) => {
  const { jenisDocumentId } = req.params;
  try {
    const userDocuments =
      await userDocumentModel.getUserDocumentByIdJenisDocument(jenisDocumentId);

    res.status(200).json(userDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUserDocument = async (req, res) => {
  try {
    const data = {
      id_user: req.body.id_user,
      nama_document: req.body.nama_document,
      id_jenis_document: Number(req.body.id_jenis_document),
      tanggal_berlaku: req.body.tanggal_berlaku,
      tanggal_berakhir: req.body.tanggal_berakhir,
      file: req.body.file,
      id_status: req.body.id_status,
    };
    console.log(data);
    const newUserDocument = await userDocumentModel.createUserDocument(data);

    res.status(201).json(newUserDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserDocument = async (req, res) => {
  const { id } = req.params;
  const documentData = req.body;

  try {
    const updatedUserDocument = await userDocumentModel.updateUserDocument(
      id,
      documentData
    );
    console.log(updatedUserDocument);
    return res.status(200).json(updatedUserDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserDocument = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await userDocumentModel.deleteUserDocument(id);
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUserDocuments,
  getUserDocumentById,
  getUserDocumentByIdUser,
  getUserDocumentByIdJenisDocument,
  createUserDocument,
  updateUserDocument,
  deleteUserDocument,
};
