var fir = $('#fir');
var sec = $('#sec');
var fans = $('#fans');
var sans = $('#sans');
var firstnum = Math.floor((Math.random()*9) + 1);
var secondnum = Math.floor((Math.random()*9) + 1);
while((firstnum+secondnum) < 10){
firstnum = Math.floor((Math.random()*9) + 1);
secondnum = Math.floor((Math.random()*9) + 1);
}
var sum = firstnum + secondnum;

fir[0].src = 'images3/'+ firstnum +'.png';
sec[0].src = 'images3/'+ secondnum +'.png';
fans[0].src = 'images3/' + (sum%10)+'.png';
sans[0].src = 'images3/' + (Math.floor(sum/10)) + '.png';
fans.hide();
sans.hide();

function first_number(firstnum){
var count = 0;
for(var i=0;i<firstnum;i++){
    var x = document.createElement('img');
    x.src = 'icons/danda.png';
    x.style.position = 'absolute';
    x.style.left = 170 + (count*44)+ 'px';
    x.style.top = 8 + 'px';
    count++;
    var sp = $('#space');
    $(x).delay(25000).appendTo('body');
}
}

function second_number(secondnum){
var count2 = 0;
for(var i=0;i<secondnum;i++){
    var x = document.createElement('img');
    x.src = 'icons/danda.png';
    x.style.position = 'absolute';
    x.style.left = 170 + (count2*44)+ 'px';
    x.style.top = 109 + 'px';
    count2++;
    document.getElementById('space').appendChild(x);
}
}

function third_number(thirdnum){
var count3 = 0;
for(var i=0;i<thirdnum;i++){
    var x = document.createElement('img');
    x.src = 'icons/danda.png';
    x.style.position = 'absolute';
    x.style.left = 170 + (count3*44)+ 'px';
    x.style.top = 210 + 'px';
    count3++;
    document.getElementById('space').appendChild(x);
}
}

setTimeout(function(){
first_number(firstnum);
},2000);
setTimeout(function(){
second_number(secondnum);
$('#addthem').fadeIn();
},3331);
$('#addthem').click(function(){
$('#hdanda').delay(2000).fadeIn();
$(this).delay(2100).fadeOut();
third_number(firstnum+secondnum);
$('#fans').delay(1200).fadeIn();
$('#sans').delay(2100).fadeIn();
});