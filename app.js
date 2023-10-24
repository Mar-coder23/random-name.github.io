let boyOutput = document.querySelector('.boy-output');
let girlOutput = document.querySelector('.girl-output');

let boyBtn = document.querySelector('.boy-btn');
let girlBtn = document.querySelector('.girl-btn');

let boyNames = ['Aiden', 'Alex', 'Austin', 'Billy', 'Blake', 'Carter',
'Chase', 'Cooper', 'Dean', 'Dennis', 'Elijah', 'Enzo', 'George',
'Harry', 'Hudson', 'Ivan', 'Jack', 'Jake', 'Joseph', 'Killian', 
'Leo', 'Lincoln', 'Luka', 'Marcus', 'Mario', 'Isaiah', 'Nick',
'Donovan', 'Evan', 'Oliver', 'Ozzy', 'Riley', 'Noah', 'Ryder', 
'Thomas', 'Tim', 'Wally', 'Xander', 'Xavier', 'William']

let girlNames = ['Abigail', 'Alexa', 'Aria', 'Belle', 'Bailey',
'Claire', 'Charlotte', 'Daisy', 'Elena', 'Ella', 'Emilee', 
'Ivy', 'Janet', 'June', 'Laura', 'Lily', 'Luna', 'Mackenzie',
'Madeline', 'Maya', 'Mia', 'Molly', 'Nina', 'Olivia', 'Zoe',
'Rosie', 'Ruby', 'Sadie', 'Sally', 'Sasha', 'Savannah', 'Vera',
'Zoey', 'Calista', 'Angelique', 'Anna', 'Cora', 'Loni', 'Macie', 'Ally']

function boyGen(){
    boyOutput.innerHTML = boyNames[Math.floor(Math.random() * boyNames.length)];
    
}
function girlGen(){
    girlOutput.innerHTML = girlNames[Math.floor(Math.random() * girlNames.length)];
}

