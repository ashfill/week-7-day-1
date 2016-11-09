document.write('Hello world');

for(var i = 0; i<3; i++)
{
	document.write('<br/>');
}
var NumberOfThings = 5;
document.write(NumberOfThings);
document.write('<br/>');
document.write(typeof NumberOfThings);
document.write('<br/>');
NumberOfThings = 'five';
document.write(NumberOfThings);
document.write('<br/>');
document.write(typeof NumberOfThings);
document.write('<br/>');

var elem = document.getElementById('demo');
elem.innerHTML = 'Some new text';
elem.style.color = 'blue';
*/
/*
var numDogs = 2;
var numCats = 5;

var numAnimals = numDogs + numCats;
var elem = document.getElementById('demo2');
elem.innerHTML = 'I have' + numAnimals + 'Animals at home';

var cat1Name = 'Socks';
var cat2Name = 'Sammy';
var dog1Name = 'Bruce';
var dog2Name = 'Banner';
var elem = document.getElementById('demo3');

var petNames = cat1Name + ',' + cat2Name +',' + dog1Name + ' &amp; ' + dog2Name;

elem.innerHTML = 'these are the animal name\'s' + petNames;


function myFunction() {
	var elem2 = document.getElementById('demo3');
	elem2.innerHTML = 'Inside my function';
}

myFunction();
function mySquare(someNum){
	return someNum + someNum;
}