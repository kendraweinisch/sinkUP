const express = require ('express');
const router = express.Router();
const userRoutes = require ('./users.js');
const cors = require ('cors');
router.use("/api/users", cors(), userRoutes);

module.exports=router;