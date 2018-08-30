const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.findAll);
router.param("id", userController.idparam);
router.get("/:id", userController.getBYID)
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);
router.post("/", userController.create);


module.exports = router;
