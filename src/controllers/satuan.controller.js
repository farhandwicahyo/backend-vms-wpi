const satuanModel = require('../models/Satuan');

const getAllSatuans = async (req, res) => {
  try {
    const satuans = await satuanModel.getAllSatuans();
    res.status(200).json(satuans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSatuanById = async (req, res) => {
  const { id } = req.params;

  try {
    const satuan = await satuanModel.getSatuanById(id);
    if (satuan) {
      res.status(200).json(satuan);
    } else {
      res.status(404).json({ error: 'Satuan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSatuan = async (req, res) => {
  const satuanData = req.body;

  try {
    const satuan = await satuanModel.createSatuan(satuanData);
    res.status(201).json(satuan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSatuan = async (req, res) => {
  const { id } = req.params;
  const satuanData = req.body;

  try {
    const satuan = await satuanModel.updateSatuan(id, satuanData);
    res.status(200).json(satuan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSatuan = async (req, res) => {
  const { id } = req.params;

  try {
    await satuanModel.deleteSatuan(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSatuans,
  getSatuanById,
  createSatuan,
  updateSatuan,
  deleteSatuan
};
