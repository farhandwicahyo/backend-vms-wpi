const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUserDocuments = async () => {
  // return await prisma.user_Document.findMany();
  return await prisma.$queryRaw`
        SELECT user_document.id_document, user.nama_perusahaan, user_document.nama_document, mst_jenis_document.nama_document AS 'jenis_document', user_document.tanggal_berlaku, user_document.tanggal_berakhir  FROM user_document
        LEFT JOIN User ON user_document.id_user = user.id_user 
        LEFT JOIN mst_jenis_document ON user_document.id_jenis_document = mst_jenis_document.id_jenis_document
    `;
};

const getUserDocumentById = async (id) => {
  // return await prisma.user_Document.findUnique({
  //   where: { id_document: Number(id) },
  // });
  return await prisma.$queryRaw`
    SELECT user_document.id_document, user.nama_perusahaan, user_document.nama_document, mst_jenis_document.nama_document AS 'jenis_document', user_document.tanggal_berlaku, user_document.tanggal_berakhir FROM user_document
    LEFT JOIN User ON user_document.id_user = user.id_user 
    LEFT JOIN mst_jenis_document ON user_document.id_jenis_document = mst_jenis_document.id_jenis_document
    WHERE user_document.id_document = ${Number(id)}
  `;
};

const getUserDocumentByIdUser = async (userId) => {
  return await prisma.user_Document.findMany({
    where: { id_user: Number(userId) },
  });
};

const getUserDocumentByIdJenisDocument = async (jenisDocumentId) => {
  // return await prisma.user_Document.findMany({
  //   where: { id_jenis_document: Number(jenisDocumentId) },
  // });
  return await prisma.$queryRaw`
  SELECT user_document.id_document, user.nama_perusahaan, user_document.nama_document, mst_jenis_document.nama_document AS 'jenis_document', user_document.tanggal_berlaku, user_document.tanggal_berakhir 
  FROM user_document
  LEFT JOIN User ON user_document.id_user = user.id_user 
  LEFT JOIN mst_jenis_document ON user_document.id_jenis_document = mst_jenis_document.id_jenis_document
  WHERE user_document.id_jenis_document = ${Number(jenisDocumentId)}
`;
};

const createUserDocument = async (documentData) => {
  return await prisma.user_Document.create({
    data: documentData,
  });
};

const updateUserDocument = async (id, documentData) => {
  return await prisma.user_Document.update({
    where: { id_document: Number(id) },
    data: documentData,
  });
};

const deleteUserDocument = async (id) => {
  return await prisma.user_Document.delete({
    where: { id_document: Number(id) },
  });
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
