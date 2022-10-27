// src/app2.js
const express = require("express");
const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
  next();
});

// 定义一个接口，index.html页面请求这个接口就是跨域（因为端口不同）
app.get("/anotherService", (req, res) => {
    console.log(req.headers.cookie)
    res.cookie("nnn", "aaa", { maxAge: 2000000, httpOnly: true });
    res.json({ code: 0, msg: "这是8003端口返回的" });
    
});
app.use("/stb", express.static("./staticb"));

app.listen("9003", () => {
  console.log("app2 running at port 9003");
});
