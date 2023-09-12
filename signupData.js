let fullName = document.getElementById('fullname').value;
let mailId = document.getElementById('mail').value;
let phoneNo = document.getElementById('pno').value;
let password = document.getElementById('password').value;
let button = document.getElementById('btn');

var url = "dataSave.php";

function saveData(){
    if(window.XMLHttpRequest){
        var link = new XMLHttpRequest;
    }
    else{
        var link = new ActiveXObject("Microsoft.XMLHTTP");
    }
}
link.onreadystatechange = function(){
    if(link.readyState == 4 && link.status == 200){
        alert(link.responseText);
    }
}
var val = "Name="+fullName+"&Email="+mailId+"&phone_Number="+phoneNo+"&password="+password;

link.open("POST",url,true);
link.setRequestHeader("content-type","application/x-www-form-urlencoded");
link.setRequestHeader("content-length",val.length);
link.setRequestHeader("connection","close");
link.send(val);