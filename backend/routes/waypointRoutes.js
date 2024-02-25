const express = require('express');
const router = express.Router();
const { getWaypoints, createWaypoint, updateWaypoint, deleteWaypoint } = require('../controllers/waypointController');
const authMiddleware = require('../middleware/authMiddleware');