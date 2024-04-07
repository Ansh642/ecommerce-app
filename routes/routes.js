const express=require('express');
const router=express.Router();

const {register,login,forgotPassword, findUsers} = require('../controllers/auth');
const {auth,isAdmin} = require('../middleware/middleware');

router.post('/register',register);
router.post('/login',login);
router.post('/forgot-password',forgotPassword);
router.get('/all-users',findUsers);

router.get("/user-auth", auth, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", auth,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});




module.exports = router;


