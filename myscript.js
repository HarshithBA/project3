function validate()
{
    //1. Take input from name and contact fields , store them in variables
    var name = document.getElementById("userName").value;
    var mobileNumber = document.getElementById("contactInput").value;

    //2. calculate length of contact number and store i a variable named  "digitCount"
    var digitCount= mobileNumber.length;
    console.log(digitCount);
    
    //3. if name input is blank, display the 'errorName' span, else hide it
    if(name==''){
        document.getElementById('errorName').style.display="block";
    }
    else{
        document.getElementById('errorname').styie.display="none";
    }
    

    //4. if digitCount is not equal to 10, display the 'errorContact' span, else hide it
    if(digitCount !=10){
        document.getElementById('errorContact').style.display="block";
    }
    else{
        document.getElementById('errorContact').style.display="none";
    }
    
    
}

