# **개인 홈페이지**

HTML, CSS, Java Script, JQuery를 이용하여 화면 설계

## **메뉴 구성**

- **HOME**
- **INFO:** *자기소개*
    - 기본적인 소개 (ROADMAP 연결)
    - 좋아하는 것 (ZERO WASTE 연결)
    - 좋았던 여행지
    - 꿈
- **ROADMAP:** *개발자로써 계획*
- **ZERO WASTE:** *관심사 소개*
- **SIGN IN:** *로그인 페이지*
    - 로그인
    - 회원가입
    - 비밀번호 찾기 (Email JS 이용)
    - 관리자 로그인시 멤버 리스트 확인 가능

## **로그인 페이지 기능**

### **local storage**

처음 index.html 접속시 local storage에 3개의 정보 자동으로 저장

- ID admin PW admin ** * 관리자 **
- ID honggd PW ghdrlfehd1234 (홍길동1234)
- ID siasaimdang PW tlstkdlaekd1234 (신사임당1234)

일반 회원 로그인시 home으로 이동 관리자 로그인시 멤버리스트 확인 페이지로 이동

### **Email JS**

[https://www.emailjs.com/](https://www.emailjs.com/)

비밀번호 찾기 페이지에서 가입한 이메일 입력시 ID와 비밀번호가 해당 메일로 발송 * 무료 계정 이용으로 메일발송 200개 제한, 비밀번호 찾기 200회 이상 실행하면 메일 발송이 안될 수도 있습니다 😊..