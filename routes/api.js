const express = require("express");
const router = require("express-promise-router")();
const fileuploadController = require("./../controllers/fileuploadController");
const userController = require("../controllers/users");
const userDetailController = require("../controllers/userDetail");
const teamDetailController = require('./../controllers/teamDetailController')
//User Registeration Mechanism
//user
router.post("/users/register", userController.registerUser);
router.post("/users/auth/facebook", userController.logInWithFaceBook);
router.post("/users/auth/twitch", userController.logInWithTwitch);
router.post("/users/login", userController.signIn);
router.post("/users/profile", userController.profile);
router.post("/users/check", userController.checkUser);
router.post("/users/logout", userController.logOut);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put(
  "/users/update-detail",
  userDetailController.updateUserAdditionalDetail
);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUser);
//Port-Folio page
router.post("/users/add-detail", userDetailController.addAdditionalDetail);
router.get("/users/:id/bio", userDetailController.getUserAdditionalDetail);
router.delete(
  "/users/delete-detail",
  userDetailController.removeUserAdditionalDetail
);

//team page
router.post("/user/add-team", teamDetailController.addTeam);
router.get("/user/get-team/:id", teamDetailController.getTeam);
router.put("/user/update-team", teamDetailController.updateTeam);

router.put("/add-team-member/:teamId", teamDetailController.addTeamMember);

router.put("/player/change-status", teamDetailController.changeStatusOfPlayer);


//experimental api's
router.post("/generateToken/:teamId", teamDetailController.generateToken);
router.post("/decode-token", teamDetailController.decodeToken);

router.delete("/user/delete-team/:userId", teamDetailController.removeTeam);
router.get("/sendAnEmail", userDetailController.sendEmail);

//file upload
router.post(
  "/file/upload",
  fileuploadController.uploadFile,
  fileuploadController.sendResponse
);
module.exports = router;