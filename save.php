<?php
    $server = 'localhost:3307';
    $username = 'root';
    $password = '';
    $db_name = 'signupdata';
   
    $connection = '';

    $connection = mysqli_connect($server,$username,$password,$db_name);
    if(isset($_POST['submit'])){
        $name = $_POST['FullName'];
        $mail = $_POST['mail'];
        $phone_No = $_POST['PhoneNumber'];
        $password = $_POST['Password'];

        $sql = "insert into datas(name, mail, phone_no, password) 
        values ('$name', '$mail', '$phone_No', '$password')";

        mysqli_query($connection,$sql);
        header('location:welcome.html');
    }
    else{
        echo 'something went to wrong...';
    }




?>