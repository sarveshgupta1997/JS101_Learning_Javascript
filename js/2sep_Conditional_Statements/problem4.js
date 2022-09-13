// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

var stored_user= "sarvesh";
var stored_pass= "gupta";
var input_user= "sarvesh";
var input_pass= "gupta";

if(stored_user===input_user){
  if(stored_pass===input_pass){
    console.log("Login Successful");
  }else{
    console.log("Incorrect Password");
  }
}else{
  if(stored_pass!==input_pass){
    console.log("Username and password does not match");
  }else{
    console.log("Incorrect Username");
  }
}
// Meathod 2
// if(stored_user===input_user && stored_pass===input_pass){
//   console.log("Login Successful");
// }else{
//   console.log("Login Unsuccessful");
//   if(stored_user!=input_user && stored_pass!=input_pass){
//     console.log("Username and password does not match.");
//   }else if(stored_user!=input_user && stored_pass==input_pass){
//     console.log("Username does not match.");
//   }else{
//     console.log("Password does not match.");
//   }
// }
