<?php
    $server = 'localhost:3307';
    $username = 'root';
    $password = '';
    $db_name = 'signupdata';
   
    $connection = '';

    $connection = mysqli_connect($server,$username,$password,$db_name);
    if(isset($_POST["login"])){
        $username = $_POST["username"];
        $password = $_POST["password"];

        $sql = "SELECT * FROM datas WHERE mail = '$username'";
        $result = mysqli_query($connection,$sql);

        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result) > 0){
            if($password == $row["password"]){
                $_SESSION["login"] = true;
                header("location:loginpage.html");
            }
            else{
                echo
                "<script>alert('sonething wrong...')</script>";
            }
        }
        else{
            echo
                "<script>alert('username wrong...')</script>";
        }
    }
?>