const express = require ('express');
const router = express.Router();
const userRoutes = require ('./users.js');
router.use("/api/users", userRoutes);

module.exports=router;