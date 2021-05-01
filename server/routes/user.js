//引入mysql连接池模块
const pool = require("../pool");
const express = require("express");
const jwt = require("jsonwebtoken");
//加载cookieParser模块
var cookieParser = require("cookie-parser");
//创建路由器对象
const user = express.Router();
user.use(cookieParser());
//创建接口
//1.登录模块
user.post("/u1/login", (req, res) => {
  let _uname = req.body.uname;
  let _upwd = req.body.upwd;
  let token = jwt.sign({ user: _uname }, "Fizz", { expiresIn: 60 * 6000 });
  let sql = "select uid,uname from yhq_user where uname=? and upwd=MD5(?)";
  pool.query(sql, [_uname, _upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ res: result, token });
    } else res.send("0");
  });
});
//2.根据电话号码修改密码
user.post("/u1/updateupwd", (req, res) => {
  let _phone = req.body.phone;
  let _upwd = req.body.upwd;
  let sql = "update yhq_user set upwd=MD5(?) where phone=?";
  pool.query(sql, [_upwd, _phone], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) res.send("1");
    else res.send("0");
  });
});
//3.注册用户
user.post("/u1/reg", (req, res) => {
  let _uname = req.body.uname;
  let _phone = req.body.phone;
  let _upwd = req.body.upwd;
  let sql = "insert into yhq_user values(null,?,MD5(?),?)";
  pool.query(sql, [_uname, _upwd, _phone], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) res.send("1");
  });
});
//4.判断用户名是否存在
user.get("/u1/exist", (req, res) => {
  let _uname = req.query.uname;
  let sql = "select uid from yhq_user where uname=?";
  pool.query(sql, [_uname], (err, result) => {
    if (err) throw err;
    if (result.length > 0) res.send("1");
    else res.send("0");
  });
});
//5.获取境外通用券
user.get("/u1/getjy", (req, res) => {
  let token = req.query.token;
  let uname = "";
  jwt.verify(token, "Fizz", function (err, data) {
    if (err) console.log(err);
    uname = data.user;
  });
  let sql = "select jid,jprice,username from yhq_jy where username=?";
  pool.query(sql, [uname], (err, result) => {
    if (err) throw err;
    if (result.length > 0) res.send(result);
    else res.send("0");
  });
});
user.post("/u1/addjy", (req, res) => {
  let token = req.body.token;
  let tprice = req.body.tprice;
  let uname = "";
  jwt.verify(token, "Fizz", function (err, data) {
    if (err) console.log(err);
    uname = data.user;
  });
  let sql = "insert yhq_jy(jprice,username) values(?,?)";
  pool.query(sql, [tprice, uname], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) res.send("1");
    else res.send("0");
  });
});
//导出路由器对象
module.exports = user;
