
(function() {
    emailjs.init("user_le7RzrH2dEfZUBwduOLOt");
    })();
function sendMail(params){
    var tempParams = {
    name: document.getElementById("senderName").value,
    email: document.getElementById("senderEmail").value,
    subject: document.getElementById("subject").value,
    description: document.getElementById("message").value,
};
    emailjs.send("service_yaxw7pg","template_g67emzc",tempParams)
        .then(function(res){
            console.log("success!");
});
}

// clear the form
document.querySelector("form").onsubmit=e=>{
    e.target.submit();
    e.target.reset();
    return false;
}
//send success Sweet Alert Toasts messeage
document.querySelector(".second").addEventListener('click', function(){
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Mail sent successfully',
      animation: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  });

