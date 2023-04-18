$(".rejister").click(function () {
  const id = $("#1-id").val();
  const password = $("#1-ps1").val();
  const passwordre = $("#1-ps2").val();
  const name = $("#1-name").val();
  const birth = $("#birth").val();
  const check1 = $("#check1").val();
  const day = $("#day").val();
  const check2 = $("check2").val();
  const check3 = $("check3").val();

  console.log(
    id,
    password,
    passwordre,
    birth,
    name,
    day,
    check1,
    check2,
    check3
  );


  if(!id){
    alert('아이디을 입력해주세요')
    return    
  }else{
  if(!emailCheck(id)){
    alert('아이디 형식에 맞게 입력해주세요')
    return
  }}

  if(!password){
    alert('비밀번호를 입력해주세요')
    return
  } else {
    if(!pwdCheck(password)){
    alert('비밀번호 형식에 맞게 입력해주세요')
    return
    }
  }
  if(!passwordre){
    alert('비밀번호를 입력해주세요')
    return
  } else {
    if(!pwdCheck(passwordre)){
    alert('비밀번호 형식에 맞게 입력해주세요')
    return
    }
  }
  if(!name){
    alert('이름을 입력해주세요')
    return
  } 
  if(!birth){
    alert('생년월일을 입력해주세요')
    return
  } 
  if(!birth){
    alert('태어난 년도를 입력해주세요')
    return
  } 
  if(!check1){
    alert('태어난 월을 선택해주세요')
    return
  } 
  if(!day){
    alert('태어난 일을 입력해주세요')
    return
  } 
  if(!check2){
    alert('성별을 입력해주세요')
    return
  } 
  if(!check1){
    alert('태어난 월을 입력해주세요')
    return
  } 

alert('회원가입이 완료되었습니다!')
location.href = "./sign.html"



});
