var auth = firebase.auth();
//Assigning the Authentication Library.
var user = firebase.auth().currentUser;
//Getting the Current User who is logged in.
function SignOut() {
    auth.signOut().then(()=>{
        URL = "http://localhost:8080/Sympchecker/LoginUser.html";
        const win = window.open(URL, "_self");
    }
    ).catch(error=>{
        console.log(error);
    })
}
auth.onAuthStateChanged(function(user) {
    if (user) {
        //Returning the email of the currently logged in user.
        email = user.email;
        name = user.displayName;
        console.log("Logged in as : " + email);
        //Displaying Email on Console
        console.log("Name is : " + name);
        //Displaying the Name of the Logged in User on Console.
        //  document.getElementById("DisplayName").innerHTML = UserNmail;
        //Displaying the Email of the User on Website.
        //Retirving The Data of the user.
        console.log("Getting the information of the user");
		document.getElementById("DisplayMail").innerHTML = user.email;
            } else {// When no user is Logged-in then Else part of this code will be executed.
    }
})
//Doctor Appointment : 