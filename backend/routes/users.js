const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.findAll);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);

module.exports = router;
