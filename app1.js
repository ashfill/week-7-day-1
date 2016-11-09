var Hello = 'Hello world';
document.write(Hello);
document.write('<br/>')
var Num = 1492;
document.write('Columbus sailed the worild in'+" " +Num);
document.write('<br/>')
var DogAtHome = true;
document.write('Is is it true that I have a dog at homw' + " " + DogAtHome);
document.write('<br/>')
var currentDate = new Date();
var day = currentDate.getDate()
var month = currentDate.getMonth()+1
var year = currentDate.getFullYear()
document.write('Today is' + '<b>' + day + '/' + month + '/' + year + '</b>')
document.write('<br/>')
var price = '$5.45';
document.write('I spent'+ " " + price + " " + 'on a cheeseburger');
document.write('<br/>')
var x = 'x';
document.write(x + " " + 'marks the spot');
document.write('<br/>')
var array = []
array[0] = 'Sublime';
array[1] = 'Reel Big Fish';
array[2] = 'The Dirty Heads';
array[3] = 'Slightly Stoopid';
console.log(array.join());
array.splice(2,0,'Bad Fish');
console.log(array.join());
delete array[2]ty
document.write(array);

