function init(){

}

function checkUsername(){
    var username = document.getElementById("username");
    if(username.length < 6){
        var check = document.getElementById("userNamecheck");
        check.innerText = "用户名不能小于六位";
    }
}