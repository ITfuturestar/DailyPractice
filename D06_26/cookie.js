let express = require("express");

let service = express();

service.listen(4040);
/**
 * addCookie 创建cookie
 * @param cname cookie的名字
 * @param cvalue cookie的值
 * @param cdate 过期时间
 */
function addCookie(cname,cvalue,cdate) {
    if (cdate) {
        let oDate = new Date();
        oDate.setFullYear(oDate.getDate()+cdate);
        document.cookie=cname+"="+cvalue+"; PATH=/; EXPRESS="+oDate;
        document.cookie=cname+"="+cvalue+"; "+"PATH=/"+"; "+ "EXPRESS="+oDate;
    }else {
        document.cookie=cname+"="+cvalue+";";
    }
}

/**
 * getCookie 获取cookie的值
 * cname 值
 * @param cname
 */
function getCookie(cname) {
    let arr = document.cookie.split("; ");
    for (let i = 0;i < arr.length;i++) {
        let arr2 = arr[i].split("=");
        if (arr2[0] == cname) {
            return cname;
        }
    }
}

/**
 * removerCookie 删除cookie
 * cname 根据cookie的值删除
 * @param cname
 */
function removerCoookie(cname){
    addCookie(cname,1,-1);
}
service.use(express.static("cookie"));

