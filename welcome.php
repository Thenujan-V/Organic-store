<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Signup Spices</title>
<link rel="stylesheet" href="signup.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
<div class="signup">
    <div class="container row">
        <div class="col-lg-6 col-md-8 col-12">
            <h1>Sign up</h1>
            <form action="save.php" method="post">
                <div class="form-group">
                    <input type="text" id="fullname" name="FullName" data-name="Full Name" placeholder="Full Name" class="form-control">
                    <p></p>
                </div>
                <div class="form-group">
                    <input type="text" id="mail" name="mail" data-name="E-mail" placeholder="E-mail" class="form-control ">
                    <p></p>
                </div>
                <div class="form-group">
                    <input type="text" id="pno" name="PhoneNumber" data-name="Phone Number" placeholder="Phone Number" class="form-control">
                    <p></p>
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="Password" data-name="Password" placeholder="Password" class="form-control">
                    <p></p>
                </div>
                <div class="form-group">
                    <input type="password" id="confirmpassword" data-name="Confirmation password" placeholder="Confirm Password" class="form-control">
                    <p></p>
                </div>
                <input type="submit" id="btn" class="form-control" name="submit">
            </form>
            <div class="connect">
                <div class="connectwith">
                    <div class="line"></div>
                    <h5 class="text-center my-3">or connect with</h5>
                    <div class="line"></div>
                </div>
                <div class="brands text-center">
                    <a href="" class="text-decoration-none text-reset"><img src="Media/google.png" alt=""></a>
                    <a href="" class="text-decoration-none text-reset"><img src="Media/facebook.png" alt=""></a>
                    <a href="" class="text-decoration-none text-reset"><img src="Media/apple-logo.png" alt=""></i></a>
                </div>     
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="FormValidation.js"></script>

</body>
</html>

<?php

?>