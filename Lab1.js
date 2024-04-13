// Lesson 1

var str = new Date()

var time = str.toString()

var weekday = time.substring(0,3)


if (weekday === 'Mon')
    weekday = 'Today is ' +'Monday'
else if(weekday === 'Tue')
weekday = 'Today is ' +'Tuesday'
else if(weekday === 'Wed')
weekday = 'Today is ' +'Wednesday'
else if(weekday === 'Thu')
weekday = 'Today is ' +'Thursday'
else if(weekday === 'Fri')
weekday = 'Today is ' +'Friday'
else if(weekday ==='Sat')
weekday = 'Today is ' +'Saturday'
else if(weekday ==='Sun')
weekday = 'Today is ' +'Sunday'

console.log(weekday)


var precisetime = time.substring(16,25)

var daytime = time.substring(16,18)

if(daytime<24)
daytime = daytime + 'AM'
else
{
    daytime = daytime - 12;
    daytime = daytime + 'PM'
}

daytime = 'Current time is: ' + daytime


console.log(daytime + ':' +time.substring(19,25))


// Lesson 1+2

var DATE = time.substring(4,7)

function getMonth(DATE)
{
if(DATE === 'Jan')
    DATE = '01';
else if(DATE === 'Feb')
    DATE = '02';
else if(DATE === 'Mar')
    DATE = '03';
else if(DATE === 'Apr')
    DATE = '04';
else if(DATE === 'May')
    DATE = '05';
else if(DATE === 'Jun')
    DATE = '06';
else if(DATE ==='Jul')
    DATE = '07';
else if(DATE === 'Aug')
    DATE = '08';
else if(DATE === 'Sep')
    DATE = '09';
else if(DATE === 'Oct')
    DATE = '10';
else if(DATE === 'Nov')
    DATE = '11';
else if(DATE === 'Dec')
    DATE = '12';

console.log(DATE+'/'+time.substring(8,10)+'/'+time.substring(11,15))
}
getMonth(DATE)


// Lesson 3

function convertCel(Cel)
{
var resultFahrenheit = Cel*9/5 + 32
console.log(resultFahrenheit)
}
function convertFah(Fah)
{
var resultCelsius = (Fah-32)*5/9
console.log(resultCelsius)
}

convertCel(60)
convertFah(45)


// Lesson 4
function Reverse(word)
{
    var splitword = word.split("")
    var reverse = splitword.reverse();
    var joinArray = reverse.join("")
    console.log(joinArray)
}

Reverse('reverse')
    // Lesson 5

    function findMath(x,y,z)
    {
        if (x + y === z)
            console.log("$ can be replaced with +")
        else if(x - y === z)
            console.log("$ can be replaced with -")
        else if(x * y === z)
            console.log("$ can be replaced with *")
        else if(x / y === z && y != 0)
            console.log("$ can be replaced with /")
        else
            console.log("No expression can satisfy.")
    }

    findMath(12,12,1)

    // Lesson 6

    function largestInt(array)
    {
        var largest = array[0]
        for (var i = 0;i<array.length; i++)
        {
            if(array[i] > largest)
            largest = array[i]
        }
        console.log(largest)
    }

    var test =[3,4,7,32,12,6,23]

    largestInt(test)