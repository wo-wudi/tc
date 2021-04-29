//引入mysql连接池模块
const pool = require("../pool");
const express = require("express");
//创建路由器对象
const index = express.Router();
//创建接口
index.get("/gethl", (req, res) => {
  let sql = "select hid,hprice,hmoney,hrmb from yhq_hl";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ code: 200, res: result });
  });
});
index.get("/getzx", (req, res) => {
  let sql = "select zid,zname,zprice,zdl,zchoice from yhq_zx";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ code: 200, res: result });
  });
});
index.get("/getty", (req, res) => {
  let sql = "select tid,tname,tenglish,tprice,tmoney,tuse from yhq_ty";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ code: 200, res: result });
  });
});
index.get("/getsp", (req, res) => {
  let sql = "select sid,sname,sprice,soldprice from yhq_sp";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ code: 200, res: result });
  });
});
//导出路由器对象
module.exports = index;
