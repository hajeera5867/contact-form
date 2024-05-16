document.getElementById('contact-form')
.addEventListener('submit',function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "new message from" +name;
    var body = "name: " + name +"\nemail: " + email + "\nmessage: " +message;
    var mailto_link = 'mailto:bibihajeera5867@gmail.com' + '?subject=' + subject + '&body=' + encodeURIComponent(body);
    window.location.href = mailto_link;

});