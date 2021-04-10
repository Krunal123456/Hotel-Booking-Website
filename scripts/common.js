


function setFooterTemplates(){
    var footerTemplate='<span class="contactStyle">'
    +'<button type="button" class="btn btn-info btn-sm" data-toggle="modal"data-target="#example-modal-signup" id="sign-up-button" onclick="modalContact()">Contact Us</button>'
+'</span>'
+'<div class="iconsty">'
  +'<a href="https://www.facebook.com" target="_blank" style="text-decoration: none;"><img class="SocialMediaImage" src="assests/images/facebook.png" alt="Facebook" /></a>'
  +'<a href="https://www.instagram.com" target="_blank" style="text-decoration: none;"><img class="SocialMediaImage" src="assests/images/instagram.png" alt="Instagram" /></a>'
  +'<a href="https://twitter.com" target="_blank" style="text-decoration: none;"><img class="SocialMediaImage" src="assests/images/twitter.png" alt="Twitter " /></a>'
+'</div><br />'
+'<p class="copyrightSty"> <span>&#169;</span>'
  +'2020 ROOM SEARCH PVT LTD</p>';

  document.getElementById('footer').innerHTML +=footerTemplate;
}

function setHeaderTemplates(){
    var headerTemplate= '<a href="./index.html" target="_self"><img src="./assests/images/logo.png" alt="logo" class="logo" /></a>'
  +'<span class="loginStyle">'
    +'<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#login" id="login-button"style="padding: -0.625rem.75rem;"  data-dismis="modal" onclick="modalHeader()">LOGIN</button>'
 +'</span>'
  +'<br />';



  document.getElementById('header').innerHTML +=headerTemplate;
}





// login modal
  function modalHeader(){
  let ifLogin = document.getElementById("login-button").innerText == "LOGOUT";
    if(ifLogin){
      document.getElementById("login-button").innerText = "LOGIN";
      if($("#payment")[0]){
        $("#payment")[0].disabled = true;
      }
    return;
    } else {
      document.getElementById("login-button").setAttribute("data-target", "#login");

    }
      var modalHeader=  '<div class="modal" tabindex="-1" role="dialog" id="login" class="modal fade" data-backdrop="false">'
        +'<div class="modal-dialog" role="document">'
         +'<div class="modal-content">'
            +'<div class="modal-header">'
              +'<h5 class="modal-title" id="modal-header">Please Login</h5>'
              +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                +'<span aria-hidden="true">&times;</span>'
              +'</button>'
            // <!--login-->
            +'<div class="modal" tabindex="-1" role="dialog" id="login">'
            +'<div class="modal-dialog" role="document">'
            +'<div class="modal-content">'
            +'<div class="modal-header">'
            +'<h5 class="modal-title" id="modal-header">Please'
            +'Login</h5>'
            +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
            +'<span aria-hidden="true">&times;</span>'
            +'</button>'
            +'</div>'
            +'<div class="modal-body" style="margin-left: 7%;margin-right: 7%;">'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="name">Username:</label><br />'
                            +'<input type="text"  onchange="updateUserName()" id="name" placeholder="Enter Username" required />'
                            +'</p>'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="example-input-password">Password:</label><br />'
                            +'<input type="password" id="example-input-password" placeholder="Enter Password" required'
                            +'autocomplete="off" />'
                            +'</p>'

                            +' </div>'
                            +'<div class="modal-footer">'
                            +'<button type="button" class="btn btn-primary'
                            +' btn-sm" style="display: flex; margin: auto; " data-dismiss="modal">Login2</button>'
                            +' </div>'
                            +'</div>'
                            +'</div>'
                            +'</div></div>'
                            +'<div class="modal-body" style="margin-left: 7%;'
                            +'margin-right: 7%;">'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="name">Username:</label><br />'
                            +'<input type="text" id="name2" placeholder="Enter'
                            +' Username" required />'
                                    +'</p>'
                                    +'<p style="display: flex; float: left;">'
                                    +'<label style="margin-right: 25%;" for="example-input-password">Password:</label><br />'
                                    +'<input type="password" id="example-input-password2" placeholder="Enter Password" required'
                                    +'autocomplete="off" />'
                                    +'</p>'

                                    +'</div>'
                                    +'<div class="modal-footer">'
                                    +'<button type="button" data-dismiss="modal" class="btn btn-primary'
                                    +' btn-sm" style="display: flex; margin: auto;" onclick="myFunction()">Login</button>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +' </div>';

           document.getElementById('header').innerHTML+=modalHeader;                        
  }

  function modalContact(){
      var modalContact= '<div class="modal" tabindex="-1" role="dialog" id="example-modal-signup" class="modal fade" data-backdrop="false">'
      +'<div class="modal-dialog" role="document">'
      +'<div class="modal-content">'
      +' <div class="modal-header">'
      +' <h5 class="modal-title" id="modal-header">Get in touch</h5>'
      +' <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
      +'  <span aria-hidden="true">&times;</span>'
      +' </button>'
      +' </div>'
      +' <div class="modal-body">'
      +' <form>'
      +'   <p>Thank you for reaching out!!!<br />'
      +'     Please enter you email and we will get back to you</p>'
      +'   <p style="display: flex; float: left;">'
      +'      <label for="email">Email:</label><br />'
      +'      <input type="email" id="email" placeholder="Enter your email id" required />'
      +'     </p>'

      +'  </form>'
      +' </div>'
      +' <div class="modal-footer">'
      +'   <button type="button" class="btn btn-primary btn-sm">Submit</button>'
      +'  </div>'
      +' </div>'
      +' </div>'
      +'</div>';

      document.getElementById('footer').innerHTML+=modalContact;
  }



  localStorage.setItem("login-id", "admin");
  localStorage.setItem("login-pswd", "admin");

  function updateUserName(){
    console.log("updated");
  }

function myFunction() {
  let ifLogin = document.getElementById("login-button").innerText == "LOGOUT";
  if(ifLogin){

    document.getElementById("login-button").innerText = "LOGIN";
    return;
  }

  let userid = document.getElementById("name2").value;
  let userpswd = document.getElementById("example-input-password2").value;

  let storedId = localStorage.getItem("login-id");
  let storedPswd = localStorage.getItem("login-pswd");
  //console.log(userpswd,userid,storedId,storedPswd);
  if(userid == storedId && userpswd == storedPswd){
      alert("Successfully logged_in"); 
   document.getElementById("login-button").innerText="LOGOUT";
   document.getElementById("login-button").setAttribute("data-target", "")
  if($("#payment")[0]){
    $("#payment")[0].disabled = false;
  }


  } else {
    alert("failed"); 
  }

  }


setFooterTemplates();
setHeaderTemplates();
modalHeader();
modalContact();
