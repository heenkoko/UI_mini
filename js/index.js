$(function () {
    // let memberList = [];
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList==null){
        memberList = [];

        let member = {
            id: 'admin',
            pwd: 'admin',
            name: '관리자',
            tel: '',
            mobile: '',
            email: 'ej910924@naver.com',
            birthday: '',
            date: ''
        };
        memberList.push(member);

        member = {
            id: 'honggd',
            pwd: 'ghdrlfehd1234',
            name: '홍길동',
            tel: '02',
            mobile: '01012341234',
            email: 'honggd@naver.com',
            birthday: '1986년 2월 9일',
            date: 1458831600000
        };
        memberList.push(member);

        member = {
            id: 'sinsaimdang',
            pwd: 'tlstkdlaekd1234',
            name: '신사임당',
            tel: '0212345678',
            mobile: '01045674567',
            email: 'sinsa@naver.com',
            birthday: '1985년 1월 5일',
            date: 1461510000000
        };
        memberList.push(member);
    }
    localStorage.setItem('memberList', JSON.stringify(memberList));
})