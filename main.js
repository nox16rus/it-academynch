var x = document.getElementById('number1')
var y = document.getElementById('number2')



//объекты для взаимодействия с браузером и их методы
document.getElementById('1').addEventListener('click', function() {
	document.write(+x.value + +y.value);
})

document.getElementById('2').addEventListener('click', function(){
	document.write(+x.value - +y.value);
})

document.getElementById('3').addEventListener('click', function(){
	document.write(+x.value / +y.value);
})

document.getElementById('4').addEventListener('click', function(){
	document.write(+x.value * +y.value);
})

/*
terty
reyry
gde
*/
console.log(document.getElementById('1'));


undefined
