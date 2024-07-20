function validation()
{
    document.getElementById("result").style.display="block";
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Email";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<8){
        document.getElementById("result").innerHTML="Password must contain atleast 8 characters";
        return false;
    }
    else if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.Password.value !== document.Formfill.Cpassword.value){
        document.getElementById("result").innerHTML="Password does not match";
        return false;
    }
    else{
        document.getElementById("popup").style.display="block";
        return false;
    }
}

function popupRemove(){
    document.getElementById("popup").style.display="none";
    return false;
}