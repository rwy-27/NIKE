<?php
    header("content-type:text/html;charset=utf-8");
    // 一、获取前端发送来的数据（用户名和密码）
    $name = $_POST["user"];
    $pass = $_POST["pass"];

    // 二、连接数据库进行处理（增？？）
    // 1、连接数据库
    $conn = mysqli_connect("localhost","root","root","2002item");
    if (!$conn) {
        die('连接失败：'.mysqli_connect_error());
    }
    mysqli_set_charset($conn,'utf8');

    // 2、执行sql语句
    $sql = "insert into vip (username,userpass) values ('$name','$pass')";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        die('注册失败：'.mysqli_error());
    }
    // 3、关闭数据库
  

    // 三、响应(就是使用echo)
    if($result){
        echo "1"; //1 表示注册成功
    }else{
        echo "0"; //0 表示注册失败
    }


    mysqli_close($conn);

?>