function $(fn) {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded",function () {
            fn&&fn();
        },false);
    }else {
        document.attachEvent("onreadyStatechange",function () {
            if (document.readyState == "complete") {
                fn&&fn();
            }
        });
    }
}