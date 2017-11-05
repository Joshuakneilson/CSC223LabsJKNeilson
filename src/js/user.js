function rand(){
    
    y = Math.floor(Math.random()*5);
    return y;
    
}
    
x =  [];
x.push('"I have had the best experience with this company. Would recommend." - John');
x.push('"A++++, loved the service." - Maggie');
x.push('"Exactly what I needed." - Daryl');
x.push('"Fast, Efficient work." - Carol');
x.push('"I am a life long customer now." - Rick');
document.getElementById("userReview").innerHTML = x[rand()];