var btn = document.getElementById('btnsend');
var btncancel = document.getElementById('btncancel');

btn.addEventListener('click',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email_id').value;
        var tel = document.getElementById('no').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        var body =
        '<b>name:</b> '+name+ 
        '<br/>  <b>email: </b>'+email+
        '<br/> <b>subject: </b>'+subject+
        '<br/> <b>tel:</b>'+tel+
        '<br/> <b>message: </b>'+message;
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
        
        // console.log(name);
        // console.log(email);
        // console.log(subject);
        // console.log(message);
        // console.log(tel);
        // console.log(body);
      //   Email.send({
      //     SecureToken : "a276723c-85c8-44a3-9cb8-ff1341e98689",
      //     To : 'them@website.com',
      //     From : "you@isp.com",
      //     Subject : "This is the subject",
      //     Body : "And this is the body"
      // }).then(
      //   message => alert(message)
      // );
      if(email && name && message )
      {
        if(validateEmail(email)){
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "muhammetluna@gmail.com",
            Password : "*******",
            To :  'muhammetluna@gmail.com',
            From : 'muhammetluna@gmail.com',
            Subject : subject,
            Body : body
        }).then(
          message => alert("Mailiniz gönderilmiştir..")
        );
        }
        else{
          alert("Mail Yanlış..");
        }
      }
      else{
        alert("Eksik Bilgiler var..");
      }
       
});
