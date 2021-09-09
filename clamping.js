function bringIntoInterval(number,max){
//Check if it's negative
    while(number < 0){
        number = number + max;
    }
// 
    return number % max;

}