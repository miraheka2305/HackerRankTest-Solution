function timeConversion(s) {
    /*
     * Write your code here.
     */
    let convertTime = 0;
    let time = "";
    if (s.substr(-2) === "PM" || s.substr(-2) === "pm"){
        convertTime = parseInt(s.substr(0,2)) + 12;
        if (s.substr(0,2) === "12"){
            time = s.substr(0,8);
        } else {
            time = convertTime+s.substr(2,6);
        }
    } else {
        if (s.substr(0,2) === "12"){
            time = "00" + s.substr(2,6)
        } else {
            
        time = s.substr(0,8);
        }
    }
    return(time);

}