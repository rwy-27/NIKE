let man = document.querySelector('#man');
let woman = document.querySelector('#woman');
let child = document.querySelector('#child');
let special = document.querySelector('#special');
let nav = document.querySelector('#nav-List');
let Help = document.querySelector('#Help');
let help = document.querySelector('#help-wrap');
let regBtn = document.querySelector('.rl');
let mask = document.querySelector('#mask');
let regpage = document.querySelector('#reg');
let logpage = document.querySelector('#login');
let rm = document.querySelector('.rm');
let rm1 = document.querySelector('.rm1');
let changereg = document.querySelector('.changereg');
let changelog = document.querySelector('.changelog');
let user = document.querySelector('#user');
let pass = document.querySelector('#pass');
let Regbtn =document.querySelector('.regbtn');

console.log(123);

console.log(user);



//导航栏
man.onmouseover = function(){
    nav.style.display= 'block';
}
man.onmouseleave = function(){
    nav.style.display= 'none';
}

woman.onmouseover = function(){
    nav.style.display= 'block';
}
woman.onmouseleave = function(){
    nav.style.display= 'none';
}

child.onmouseover = function(){
    nav.style.display= 'block';
}
child.onmouseleave = function(){
    nav.style.display= 'none';
}
special.onmouseover = function(){
    nav.style.display= 'block';
}
special.onmouseleave = function(){
    nav.style.display= 'none';
}

nav.onmouseover = function(){
    nav.style.display= 'block';
}
nav.onmouseleave = function(){
    nav.style.display= 'none';
}




//帮助按钮
Help.onmouseover = function(){
    help.style.display= 'block';
    Help.style.borderBottom ='2px solid #000'
}
Help.onmouseleave = function(){
    help.style.display= 'none';
    Help.style.borderBottom ='none'
}
help.onmouseover = function(){
    help.style.display = 'block';
    Help.style.borderBottom ='2px solid #000'
}
help.onmouseleave = function(){
    help.style.display= 'none';
    Help.style.borderBottom ='none'
}




//首先点击登录界面
regBtn.onclick = function(){
    mask.style.display = 'block';
    logpage.style.display = 'block';
}

//关闭登录界面
rm1.onclick = function(){
    mask.style.display = 'none';
    logpage.style.display = 'none';
}

//跳到注册界面
changereg.onclick = function(){
    mask.style.display = 'block';
    regpage.style.display = 'block';
    logpage.style.display = 'none';
}

//关闭注册界面
rm.onclick = function(){
    mask.style.display = 'none';
    regpage.style.display = 'none';
}


//跳到登录界面
changelog.onclick = function(){
    mask.style.display = 'block';
    regpage.style.display = 'none';
    logpage.style.display = 'block';
}



//注册界面用户名验证
user.onblur = function () {

    var reg = /^[0-9]{11}$/i;

    if (reg.test(this.value)) {
        this.nextElementSibling.innerHTML = "√";
    } else {
        this.nextElementSibling.innerHTML = "×";
    }
}
//注册界面密码验证
pass.onblur = function () {

    var reg = /^[\da-zA-Z]{6,18}$/i;

    if (reg.test(this.value)) {
        this.nextElementSibling.innerHTML = "√";
    } else {
        this.nextElementSibling.innerHTML = "×";
    }
}

//注册界面确认密码验证
Rpass.onblur = function () {
    if (Rpass.value == pass.value) {
        this.nextElementSibling.innerHTML = "√";
    } else {
        this.nextElementSibling.innerHTML = "×";
    }

}




// 点击注册按钮，用ajax发送请求，完成注册
Regbtn.onclick = function(){
    // 1、创建对象
    let xhr = new XMLHttpRequest();
    // 2、设置请求的配置
    xhr.open("post","regSave.php",true);
    // 3、设置响应的事件处理函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            let result = xhr.responseText;
            if(result==1){
                
                // 注册成功
                // $("messageBox").style.cssText="color:green";
                // $("messageBox").innerHTML="注册成功，请<a href='login03.html'>登录</a>！";
                alert("注册成功，去登录吧！")
                logpage.style.display = 'block';
                regpage.style.display = 'none';
            }else if(result==0){
                
                // 注册失败
                // $("messageBox").style.cssText="color:red";
                // $("messageBox").innerHTML="注册失败，请重新注册！";
                alert("注册失败，请重新注册！")
            }
        }
    }

    // post请求时，必须要设置请求头。
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    // 4、发送请求
    // post请求，就需要把发送给后端的数据（键值对的方式）写在send函数的参数里。
    let sendStr = `username=${user.value}&userpass=${pass.value}`;
    xhr.send(sendStr);

}


// Regbtn.onclick = function (){
//     ajax({
//     type: 'get',
//     url: 'user.php',
//     data: {
//         type: 'add',
//         user: user.value,
//         pass: pass.value
//     },
//     success: function (data){
//         var json = data;
//         if (json.err == 0){
//             alert(json.msg);
//         }
//     }
// });
// }
