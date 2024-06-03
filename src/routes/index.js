require("dotenv").config();
const express = require("express");
const router = express.Router();
const UserRoutes = require("./user.routes");
const AuthRoutes = require("./auth.routes");
const RoleRoutes = require("./role.routes");
const JenisDocumentRoutes = require("./jenis_document.route");
const JenisSertifikasi = require("./jenis_sertifikasi.routes");
const SatuanRoutes = require("./satuan.routes");
const KursRoutes = require("./kurs.routes");
const JenisProductRoutes = require("./jenis_product.routes");
const StatusRoutes = require("./status.routes");
const ProvinsiRoutes= require("./provinsi.routes");
const Kota = require("./kota.routes");

router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);
router.use("/role", RoleRoutes);
router.use("/jenis-document", JenisDocumentRoutes);
router.use("/jenis-sertifikasi", JenisSertifikasi);
router.use("/satuan", SatuanRoutes);
router.use("/kurs", KursRoutes);
router.use("/jenis-product", JenisProductRoutes);
router.use("/status", StatusRoutes);
router.use("/provinsi", ProvinsiRoutes);
router.use("/kota", Kota);

module.exports = router;
  