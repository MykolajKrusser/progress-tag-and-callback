function userProgress(time){
    var start = 0;
    var time = Math.round(time*10); //interval turn to seconds
    var progressElem = document.getElementById("userProgress"); // element progress bar
    var intervalId = setInterval(function () { //assign setInterval
        if (start > 100){
            clearInterval(intervalId);
            userProgressCallBack(); // callback
        } else {
            progressElem.value = start;
            start++;
        }
    }, time)
}
function userProgressCallBack(){
    document.querySelector(".hidden-block").classList.add("vizBlock"); // callback code
}
userProgress(2); // progress sec