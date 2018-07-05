function  findInArr(aClass,sClass) {
    for(var i=0;i<aClass.length;i++){
        if(aClass[i]!=sClass){
            return false;
        }
    }
    return true;
}
function $_(obj,sClass){
    var aResult = [];
    if(obj.getElementsByClassName){
        aResult = obj.getElementsByClassName(sClass);
    }else{
        var oUl = obj.getElementsByTagName("*");
        for(var i = 0;i < oUl.length;i++){
            if(findInArr(oUl,sClass)){
                aResult.push(oUl[i]);
            }
        }
    }
    return aResult;
}
