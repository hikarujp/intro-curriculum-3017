"use strict";var http=require("http"),pug=require("pug"),auth=require("http-auth"),basic=auth.basic({realm:"Enquetes Area."},function(e,r,t){t("guest"===e&&"xaXZJQmE"===r)}),server=http.createServer(basic,function(e,r){if(console.info("Requested by "+e.connection.remoteAddress),"/logout"===e.url)return r.writeHead(401,{"Content-Type":"text/plain; charset=utf-8"}),void r.end("ログアウトしました");switch(r.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),e.method){case"GET":"/enquetes/yaki-shabu"===e.url?r.write(pug.renderFile("./form.pug",{path:e.url,firstItem:"焼き肉",secondItem:"しゃぶしゃぶ"})):"/enquetes/rice-bread"===e.url?r.write(pug.renderFile("./form.pug",{path:e.url,firstItem:"ごはん",secondItem:"パン"})):"/enquetes/sushi-pizza"===e.url&&r.write(pug.renderFile("./form.pug",{path:e.url,firstItem:"寿司",secondItem:"ピザ"})),r.end();break;case"POST":var t="";e.on("data",function(e){t+=e}).on("end",function(){var e=decodeURIComponent(t);console.info("投稿: "+e),r.write('<!DOCTYPE html><html lang="ja"><body><h1>'+e+"が投稿されました</h1></body></html>"),r.end()})}}).on("error",function(e){console.error("Server Error",e)}).on("clientError",function(e){console.error("Client Error",e)}),port=process.env.PORT||8e3;server.listen(port,function(){console.info("Listening on "+port)});