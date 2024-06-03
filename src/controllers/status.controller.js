const statusModel = require('../models/Status');

const getAllStatuses = async (req, res) => {
  try {
    const statuses = await statusModel.getAllStatuses();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStatusById = async (req, res) => {
  const { id } = req.params;

  try {
    const status = await statusModel.getStatusById(id);
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(404).json({ error: 'Status not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStatus = async (req, res) => {
  const statusData = req.body;

  try {
    const status = await statusModel.createStatus(statusData);
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const statusData = req.body;

  try {
    const status = await statusModel.updateStatus(id, statusData);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStatus = async (req, res) => {
  const { id } = req.params;

  try {
    await statusModel.deleteStatus(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
};
