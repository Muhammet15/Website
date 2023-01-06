var btn = document.getElementById('btnsend');
btn.addEventListener('click',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').ariaValueMax;
        var message = document.getElementById('message').ariaValueMax;
        var body ='name: '+name+ '<br/> email: '+email+'<br/> subject: '+subject+'<br/> message: '+message;
        Email.send({
            Host : "smtp.gmail.com",
            Username : "muhammetluna@gmail.com",
            Password : "dwemtyjwqolbdcbz",
            To : 'muhammetluna@gmail.com"',
            From : email,
            Subject : subject,
            Body : body
        }).then(
          message => alert(message)
        );
});