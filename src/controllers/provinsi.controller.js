const provinsiModel = require('../models/Provinsi');

const getAllProvinsis = async (req, res) => {
  try {
    const provinsis = await provinsiModel.getAllProvinsis();
    res.status(200).json(provinsis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProvinsiById = async (req, res) => {
  const { id } = req.params;

  try {
    const provinsi = await provinsiModel.getProvinsiById(id);
    if (provinsi) {
      res.status(200).json(provinsi);
    } else {
      res.status(404).json({ error: 'Provinsi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProvinsi = async (req, res) => {
  const provinsiData = req.body;

  try {
    const provinsi = await provinsiModel.createProvinsi(provinsiData);
    res.status(201).json(provinsi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProvinsi = async (req, res) => {
  const { id } = req.params;
  const provinsiData = req.body;

  try {
    const provinsi = await provinsiModel.updateProvinsi(id, provinsiData);
    res.status(200).json(provinsi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProvinsi = async (req, res) => {
  const { id } = req.params;

  try {
    await provinsiModel.deleteProvinsi(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProvinsis,
  getProvinsiById,
  createProvinsi,
  updateProvinsi,
  deleteProvinsi
};
