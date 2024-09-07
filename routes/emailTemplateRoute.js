// src/routes/emailTemplate.routes.js
const express = require("express");
const router = express.Router();
const emailTemplateController = require("../controller/emailTemplateController");

router.get("/", emailTemplateController.getAllTemplates);
router.post("/", emailTemplateController.createTemplate);
router.get(
  "/:id",
  emailTemplateController.getTemplateMiddleware,
  emailTemplateController.getTemplate
);
router.put(
  "/:id",
  emailTemplateController.getTemplateMiddleware,
  emailTemplateController.updateTemplate
);
router.delete(
  "/:id",
  emailTemplateController.getTemplateMiddleware,
  emailTemplateController.deleteTemplate
);

module.exports = router;
