let express = require('express');
let router = express.Router();
let User = require('../models/user.model');
var jwt = require('jsonwebtoken'); // 使用jwt签名
var config = require('../config'); // 引入配置

/* GET users listing. */
//用户注册
router.post('/regist', function(req, res, next) {
  const user = new User(req.body);
  user.save().then(data=>{
    res.json(data);
  })
});

//用户登录
router.post('/login', function(req, res, next) {
  User.findOne({
      username: req.body.username
   }, function(err, user) {
     console.log(user);
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: '未找到授权用户' });
      } else if (user) {
         if (user.password != req.body.password) {
          res.json({ success: false, message: '用户密码错误' });
        } else {
          var token = jwt.sign({}, config.jwtsecret, {
              expiresIn : 60*60*24// 授权时效24小时
          });
          res.json({
            success: true,
            message: '请使用您的授权码',
            token: token
        });
      }   
    }
  });
});

module.exports = router;
