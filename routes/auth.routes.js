const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('config')
const Product = require('../models/Product');
const router = Router();

module.exports = router