<?php
    $connect = new mysqli("localhost:3307","root","","spices_data");

    $Name = $_POST["Name"];
    $Email = $_POSt["Email"];
    $phone_Number = $_POSt["phone_Number"];
    $password = $_POSt["password"];

    $sql = "INSERT INTO datas (Name,Email,phone_Number,password) 
            VALUES ('{$Name}','{$Email}','{$phone_Number}','{$password}')";

    if($connect->query($sql)){
        echo "data saved";
    }
    else{
        echo "Error in data saving data";
    }
?>