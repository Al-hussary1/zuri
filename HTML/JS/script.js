const screenDisplay = document.getElementById('display');
const myDetails = {
    firstName :"Ridwan",
    lastName : "Gbadamosi",
    height : 6.0,
    country : "Nigeria"
}

screenDisplay.innerHTML = '<h4>' +'First Name: ' + myDetails.firstName + '<br>' 
+'Last Name: ' + myDetails.lastName + '<br>' +'Height: ' + myDetails.height +'<br>'
+'Country: ' + myDetails.country +'</h4>';

console.log(myDetails);