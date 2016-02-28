var ffir = $('#ffir');
var sfir = $('#sfir');
var sec = $('#sec');
var fans = $('#fans');
var sans = $('#sans');
var ffirstnum = Math.floor((Math.random() * 9) + 1);
var sfirstnum = Math.floor((Math.random() * 9) + 1);
var secondnum = Math.floor((Math.random() * 9) + 1);
while (((ffirstnum + secondnum) < 10) || (secondnum + ffirstnum + 10 * sfirstnum) >= 100) {
    var ffirstnum = Math.floor((Math.random() * 9) + 1);
    var sfirstnum = Math.floor((Math.random() * 9) + 1);
    var secondnum = Math.floor((Math.random() * 9) + 1);
}
var sum = secondnum + ffirstnum + 10 * sfirstnum;
ffir[0].src = 'images3/' + ffirstnum + '.png';
sfir[0].src = 'images3/' + sfirstnum + '.png';
sec[0].src = 'images3/' + secondnum + '.png';
//ans[0].src = 'images3/'+(firstnum+secondnum)+'.png';
fans[0].src = 'images3/' + (sum % 10) + '.png';
sans[0].src = 'images3/' + (Math.floor(sum / 10)) + '.png';
fans.hide();
sans.hide();
$('#addthem').click(function () {
    $('#hdanda').delay(1200).fadeIn();
    $(this).fadeOut();
    $('#fans').delay(1600).fadeIn();
    $('#sans').delay(4100).fadeIn();
    $('#carrynum').delay(2800).fadeIn();
});