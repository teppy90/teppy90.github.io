$(() => {
//about the game

  const $modalTextbox = $('#modal-textbox');
  const $openBtn = $("#openModal");
  const $modal = $("#modal");
  const $closeBtn = $("#close");

  const openModal = () => {
    $modal.css("display", "block");
  };
  const closeModal = () => {
    $modal.css("display", "none");
  };
  
  $openBtn.on("click", openModal);
  $closeBtn.on("click", closeModal);

  setTimeout(openModal, 5);

  const $footerDiv = $("<div>").attr("id", "modal-footer");

  $modalTextbox.append($footerDiv);
  $footerDiv.append($("#close"));

//getting weather

$('#generateWeather').click(function(){
  let city = $('#city').val();

  if(city != ''){

    $.ajax({

      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=944cf602c3a4cb7dffdd3923492518c2',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
         const widget = show(data);

         $('#show').html(widget);
        
      }
    })

  } else {
    $('error').html('Field cannot be empty');
  }
   
function show(data){
  return "<h3 style='font-size:40px; font-weight: bold;' class='text-center'> Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +
         "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
         "<h3>Description " + data.weather[0].description + "</h3>" +
         "<h3>Temperature " + data.main.temp + "&deg;C</h3>"
}

//calculating the cost of a cup based on how many lemons, sugar cubes, ice cubes
  const totalCost = () => {
    const $costOfLemons = $('#numberOfLemons').val() * 0.5;
    const $costOfSugarCubes = $('#numberOfSugarCubes').val() * 0.5;
    const $costofIceCubes = $('#numberOfIceCubes').val() * 0.5;
    const $costOfACup = $costOfLemons + $costOfSugarCubes + $costofIceCubes;
    alert ("A cup of your lemonade costs " + $costOfACup + " to produce.");
  }

  const $costOfOneCup = $('#costOfOneCup')
  $costOfOneCup.on("click", totalCost);
  
});

//running store (taking the probability of selling a cup to calculate revenue)
//calculating the ingredients factor
const probabilityOfIngredients = () => {
  const $lemonProbability = $('#numberOfLemons').val() * 0.03;
  const $sugarProbability = $('#numberOfSugarCubes').val() * 0.03;
  const $iceProbability = $('#numberOfIceCubes').val() * 0.03;
  const ingredientsProbability = $lemonProbability + $sugarProbability + $iceProbability;
  
  return (ingredientsProbability);
}

const numberOfCustomers = 200
const priceOfACup = 2 //this will be made into something set by user  

$('#calculateRevenue').click(function(){
  let city = $('#city').val();
  
  if(city != ''){

    $.ajax({

      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=944cf602c3a4cb7dffdd3923492518c2',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        const widget = show(data);

        $('#showResults').html(widget);
      
      } 
    }) 

  } else {
    $('error').html('Field cannot be empty');
  }
function show(data){
  let currentTemperature = data.main.temp;
  let weatherProbability = 0;

  if (currentTemperature < 20) {
  weatherProbability = .3;
  } else if (currentTemperature >= 20 && currentTemperature < 25) {
  weatherProbability = .35;

  } else if (currentTemperature >= 25 && currentTemperature < 30) {
  weatherProbability = .40;

  } else if(currentTemperature >= 30 && currentTemperature < 35) {
  weatherProbability = .45;
  } 

  let totalRevenue = (weatherProbability + probabilityOfIngredients()) * numberOfCustomers * priceOfACup; 
  
    return "<h3>Congratulations! You made $" + totalRevenue + " today.\n" + 
             ((weatherProbability + probabilityOfIngredients()) * numberOfCustomers) + " out of 200 customers bought a cup!" + "</h3>"
  }      
});


//hide/show the different pages
$('#weatherShow').click(function() {
  $('#weatherDiv').css('display','block');
});

$('#weatherHide').click(function() {
  $('#weatherDiv').css('display','none');
});

$('#inventoryShow').click(function() {
  $('#inventoryDiv').css('display','block');
});

$('#inventoryHide').click(function() {
  $('#inventoryDiv').css('display','none');
});

$('#storeShow').click(function() {
  $('#storeDiv').css('display','block');
});

$('#storeHide').click(function() {
  $('#storeDiv').css('display','none');
});

});
