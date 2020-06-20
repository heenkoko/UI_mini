function signUp () {
    let member = {
        id: $('#id').val(),
        pwd: $('#password').val(),
        name: $('#name').val(),
        tel: $('#locationNum').val()+$('#tel2').val()+$('#tel3').val(),
        mobile: $('#phoneNum').val()+$('#mobile2').val()+$('#mobile3').val(),
        email: $('#email').val(),
        birthday: $('#year').val()+'년 '+$('#month').val()+'월 '+$('#day').val()+'일',
        date: Date.now()
    }
 
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    memberList.push(member);

    localStorage.setItem('memberList', JSON.stringify(memberList));
}

function validate() {
    let id = $('#id');
    let pwd1 = $('#password');
    let pwd2 = $('#confirm');
    let name = $('#name');
    let email = $('#email');
    let year = $('#year');

    // 아이디
    let regExp = /^[a-z\d]{4,16}$/;
    if(!regExp.test(id.val())){
        alert('아이디를 확인해주세요.');
        id.val('');
        id.focus();
        return false;
    }

    // 비밀번호
    regExp = /^[a-zA-Z\d!@#$%^&*]{10,16}$/;
    if((pwd1.val()).search(/\s/) != -1) { 
        alert('비밀번호 공백 입력 불가');
        pwd1.val('');
        pwd1.focus();
        return false; 
    }
    if(!regExp.test(pwd1.val())){
        alert('비밀번호를 확인해주세요.');
        pwd1.val('');
        pwd1.focus();
        return false;
    }
    let char_type = 0;
    if(/[a-zA-Z]/.test(pwd1.val()))
        char_type += 1;
    if(/[0-9]/.test(pwd1.val()))
        char_type += 1;
    if (/[~!@#$%^&*]/.test(pwd1.val())) 
        char_type += 1;
    if(char_type<2){
        alert('비밀번호는 2가지 이상 조합해주세요.');
        pwd1.val('');
        pwd1.focus();
        return false;
    }
    
    // 비번 동일한지 확인
    if(pwd1.val() != pwd2.val()){
        alert("입력하신 비밀번호가 다릅니다");
        pwd1.val('');
        pwd2.val('');
        pwd1.focus();
        return false;
    }

    // 이름
    regExp = /^[가-힣]{2,}$/;
    if(!regExp.test(name.val())){
        alert("이름을 확인해주세요.");
        name.val('');
        name.focus();
        return false;
    }

    // 이메일
    regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(!regExp.test(email.val())){
        alert('이메일을 확인해주세요');
        email.val('');
        email.focus();
        return false;
    }

    // 생년
    regExp = /(19|20)\d{2}/;
    if(!regExp.test(year.val())){
        alert('출생년도를 확인해주세요');
        year.val('');
        year.focus();
        return false;
    }
    alert(name.val()+'님 회원가입 완료 😊');
    location.href = 'signin.html';
    return true;
}
$('form').css({
    'width': '50%',
    'height': '100%',
    'margin': '7% auto',
    'padding-left': '10%'
});
$('p, label').css('font-family', '"Open Sans", sans-serif');
$('p').css({
    'font-size': '18px',
    'font-weight': '800'
})
$('label').css({
    'display': 'inline-block',
    'width': '24%',
    'font-size': '15px',
    'font-weight': '600',
    'margin-left': '5%'
})
$('[id$=Field').css({
    'width': '80%',
    'margin-bottom': '5%',
    'border-bottom': '1px solid black'
});
$('input').not($('[type=submit]')).css({
    'display': 'inline-block',
    'width': '66%',
    'outline-style': 'none',
    'box-shadow': 'none',
    'border-color': 'transparent',
    'font-family': '"Open Sans", sans-serif',
    'font-size': '15px'
}).attr('autocomplete','off');
$(function () {
    let field = $('[id$=Field]');
    field.each(function () {
        let input = $(this).children('input');
        if(input.length == 2)
            input.css({
                'width': '14%',
                'padding-left': '5%'
            });
    })
})
$('#passwordCondition').children('p').css({
    'font-family': '"Open Sans", sans-serif',
    'font-size': '12px',
    'color': 'red'
});
$('#password').focusin(function () {
    $('#passwordCondition').css('display', 'block');
}).focusout(function () {
    $('#passwordCondition').css('display', 'none');
})
$('select').css({
    '-webkit-appearance': 'none',
    'border': 'none',
    'font-family': '"Open Sans", sans-serif',
    'font-size': '15px',
    'padding': '1% 2%'
})
$('#year').css('width', '25%');
$('#id').focusout(function () {
    let newId = $(this).val();
    let memberList = JSON.parse(localStorage.getItem('memberList'));

    let regExp = /^[a-z\d]{4,16}$/;
    if(!regExp.test(newId)){
        alert('아이디를 확인해주세요.');
        return false;
    }


    for(let i=0; i<memberList.length; i++){
        let member = memberList[i];
        if(newId==member.id){
            alert('중복된 아이디입니다.');
            $(this).val('');
            return;
        }
    }
    alert('사용가능한 아이디입니다.');
})