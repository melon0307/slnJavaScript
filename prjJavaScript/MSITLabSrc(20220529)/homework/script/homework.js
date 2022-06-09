function checkName() {
    let NameObj = document.getElementById("name1");
    let NameObjVal = NameObj.value;
    let NameObjLen = NameObjVal.length;
    let sp = document.getElementById("span1");
    let flag = false;

    if (NameObjVal == "")
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">姓名不可為空白</span>`;

    else {
        for (let i = 0; i < NameObjLen; i++) {
            let ch = NameObjVal.charCodeAt(i);
            if (ch >= 0x4e00 && ch <= 0x9fff)
                flag = true;
            else
                flag = false;
        }
        if (flag)
            sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
        else
            sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">姓名必須全部為中文</span>`
    }
}
//===================================================================

function checkPwd() {
    let PwdObj = document.getElementById("pass1");
    let PwdObjVal = PwdObj.value;
    let PwdObjLen = PwdObj.value.length;
    let sp = document.getElementById("span2");
    let flag1 = false, flag2 = false, flag3 = false;

    if (PwdObjVal == "")
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">密碼不可為空白</span>`;
    else if (PwdObjLen >= 6) {
        for (let i = 0; i < PwdObjLen; i++) {
            let ch = PwdObjVal.toLowerCase().charAt(i);
            if (ch >= 'a' && ch <= 'z')
                flag1 = true;
            else if (ch >= '0' && ch <= '9')
                flag2 = true;
            else if (ch.lastIndexOf('!@#$%^&*'))
                flag3 = true;
            if (flag1 && flag2 && flag3)
                break;
        }
        if (flag1 && flag2 && flag3)
            sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
        else
            sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">請輸入正確格式</span>`;
    }
    else if (PwdObjLen <= 6)
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">密碼長度需大於6個字</span>`;
}
//===================================================================

function checkDate() {
    let DateObj = document.getElementById("date1");
    let DateObjVal = DateObj.value;
    let strArray = DateObjVal.split('/');
    let theYear = strArray[0];
    let theMonth = strArray[1];
    let theDate = strArray[2];
    let chkDate = new Date(theYear, theMonth - 1, theDate); 
    let sp = document.getElementById("span3");
    
    if (chkDate.getFullYear() == theYear && chkDate.getMonth()+1 == theMonth && chkDate.getDate() == theDate) {
        sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
    }
    else
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">請輸入正確日期</span>`;

}