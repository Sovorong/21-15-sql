/* userid: 6 ~ 24
passwd: 6 ~ 24
passwd === passwd2
email 검증 - 정규표현식사용
 */


var f = document.saveForm;

// 인풋 자체
var useridEl = f.userid;
var passwdEl = f.passwd;
var passwd2El = f.passwd2;
var usernameEl = f.username;
var emailEl = f.email;

// 인풋 문구
var useridTxt = document.querySelector('.userid')
var passwdTxt = document.querySelector('.passwd')
var psswd2Txt = document.querySelector('.apsswd2')
var usernameTxt = document.querySelector('.username')
var emailTxt = document.querySelector('.email')


function onSubmit(e){
  e.preventDefault();



}

//form 초기화
function verifyReset(el,elTxt){
  el.classList.remove('error');
  el.classList.remove('active');
  elTxt.classList.remove('error');
  elTxt.innerhtml='';

}



//id 검증들어간다
function verifyUserid(){
  var userid = useridEl.value.trim();
  verifyReset(useridEl, useridTxt);
  if(userid === '' || userid.length <6 || userid.length>24)
  {
    verifyFalse(useridEl, useridTxt, userid === ''? Error.ID_NULL : Error.ID_LEN);
    return false;
  }
  else{
    verifyTrue(useridEl, useridTxt , ERR.ID_OK);
    return true;
  }
}


function verifyPasswd(){
  var passwd = passwdEl.value.trim();
  verifyReset(passwdEl, passwdTxt)
  if(passwd===''|| passwd.length <6 || passwd.length >24 )
  {verifyFalse( passwd, passwdTxt, passwd ===''? ERR.PW_NULL : ERR.PW_LEN)
  return false;
}
  else{
    verifyTrue(passwdEl,passwdTxt)
    return true;
  }
}

function verifyPasswd2(){
  var passwd2 = passwd2El.value.trim();
  verifyReset(passwd2El, passwd2Txt)
  if(passwd2 === '' || passwd2.length <6 || passwd2.length > 24){
    verifyFalse(passwd2El,passwd2Txt,passwd2 === ''? ERR.PW2_NULL : ERR.PW2_LEN)
  }
 else{
   verifyTrue(passwd2El,passwd2Txt)
   return true;
 }

}


function verifypasswdEqual(){
  var passwd= passwdEl. value.trim();
  var passwd2= passwdEl2.value.trim();
  
  if( !(verifyPasswd() && verifyPasswd2() )){
    return false;
  }

  if(passwd !== passwd2){
    passwdEl.classList.add('error') 
    passwdEl2.classList.add('error') 
    passwdTxt.classList.add('error') 
    passwd2Txt.classList.add('error')
    passwdTxt.innerHtml = ERR.PW_TAKEN;
    passwd2Txt.innerHtml = ERR.PW_TAKEN;
    return false;
  }

else {
  passwdEl.classList.remove('error')
  passwd2El.classList.remove('error')
  passwdTxt.innerHTML = '';
  passwd2Txt.innerHTML = '';
  return true;
}
}

function verifyUsername(){
  
  var username = usernameEl.value.trim();
  varifyReset(usernameEl, usernameTxt)

  if(username === ''){
  verifyFalse(usernameEl, usernameTxt, ERR.NAME_NULL )
    return false;
}
else{
  verifyTrue (usernameEl, usernameTxt);
    return true;
  }
}

function verifyEmail(){
	var regExp = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;

  var email = emailEl.value.trim();
  verifyReset(emailEl, emaiTxt)
  if(email === ''){
    verifyFalse(emailEl, emailTxt, ERR.EMAIL_NULL)
    return false;
  }

  else if (!regExp.test(email)){
    verifyFalse(emailEl,emailTxt, ERR.EMAIL_TAKEN)
    return false;
  }

  else{
    verifyTrue(emailEl, emailTxt)
    return true;
  }




}










function verifyFalse(el,elTxt,msg){
  elTxt.classList.add('error')
  elTxt.innerhtml = msg;
  el.classList.add('error')
}

function verifyTrue(el,elTxt,msg){
  el.classList.add('active')
  elTxt.innerhtml= msg || '';

}