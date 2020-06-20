function send() {
    let email = $('#email').val();
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    for(let i=0; i<memberList.length; i++){
        if(email == memberList[i].email){
            let name = memberList[i].name;
            let id = memberList[i].id;
            let pwd = memberList[i].pwd;
            let email = memberList[i].email;
            
            emailJs(name, id, pwd, email);
            return;
        }
    }
    alert("일치하는 메일이 없습니다.")
}

$('#email').focusin(function () {
    $('#inputField').css('border-bottom', '3px solid #4267B2');
});

// emailJS
function emailJs(name, id, pwd, email) {
    var template_params = {
        "memberEmail": email,
        "memberName": name,
        "memberId": id,
        "memberPW": pwd
    }

    var service_id = "loveeeeunju_gmail_com";
    var template_id = "template_pNRUfy9q";
    emailjs.send(service_id, template_id, template_params);
    alert('이메일 전송 완료!');
    location.href = 'sendEmail.html';
}