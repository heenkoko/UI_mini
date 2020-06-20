function login() {
    let id = $('#id');
    let pwd = $('#password');
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    for(let i=0; i<memberList.length; i++){
        let member = memberList[i];
        if(id.val()==member.id){
            console.log(member.pwd);
            
            if(pwd.val()==member.pwd){
                alert('반갑습니다!'+member.name+'님 😊');
                if(id.val()=='admin'){
                    location.href = 'member.html';
                    return;
                }
                else{
                    location.href = 'index.html';
                    return;
                }
            }
            alert('아이디와 비밀번호를 확인해주세요.');
            return;
        }
    }
    alert('아이디와 비밀번호를 확인해주세요.');
}

$('#main').children().not('#bottom').css({
    'width': '50%',
    'height': '8%',
    'margin-left': '25%',
    'margin-bottom': '5%'
});
$('[id$="Field"]').css({
    'border-bottom': '5px solid black',
    'width': '0px'
    });
$('[id$="Field"]').animate({
  width: "512px",
}, 1500 );
$('label').css({
    'display': 'inline-block',
    'width': '26%',
    'margin-left': '1%',
    'margin-top': '3%',
    'font-family': '"Open Sans", sans-serif',
    'font-weight': '800',
    'font-size': '20px'
});
$('[id$=Field]').children('input').css({
    'height': '60%',
    'width': '70%',
    'outline-style': 'none',
    'box-shadow': 'none',
    'border-color': 'transparent',
    'font-family': '"Open Sans", sans-serif',
    'font-weight': '800',
    'font-size': '20px'
});
$('[id$=Icon]').css({
    'width':'22%',
    'height': '100%'
})
$('#usingSNS div').css('float','left');
$('input').attr('autocomplete','off');