var cityName = document.getElementById("#cityName") 
var cityCondition = document.getElementById("#cityCondition") 
var cityTemp = document.getElementById("#cityTemp") 
var input = document.getElementById("#textbox")



 conversion = (val) => { 

    return (val-273).toFixed(2)

 } 

  input.addEventListener('input', function() { 

    alert("hello");


  } )
