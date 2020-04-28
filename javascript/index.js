$(() => {

  const $openModalButton = $("<button>")
    .attr("id", "openModal")
    .text("About the Game")
    .addClass("modal-buttons");
  $("body").append($openModalButton);
  const $divModal = $("<div>").attr("id", "modal");
  $("body").append($divModal);
  const $anchorModal = $("<button>")
    .attr("id", "close")
    .attr("href", "#")
    .text("Close")
    .addClass("modal-buttons");

  const $headerModal = $("<h1>").text("Running a Lemonade Stand");

  const $firstP = $(
    "<p>Your goal is to make as much money as you can in 3 hours by selling lemonade at your lemonade stand. </p>"
  );

  const $secondP = $(
    "<p>Buy cups, lemons, sugar, and ice cubes, then set your recipe based on the weather and conditions.  </p>"
  );

  const $thirdP = $(
    "<p>Start with the basic recipe, but try to vary the recipe and see if you can do better. Lastly, set your price and sell your lemonade at the stand.</p>"
  );  

  const $fourthP = $(
    "<p>Try changing up the price based on the weather conditions as well. At the end of the game, you'll see how much money you made. Write it down and play again to try and beat your score!</p>"
  );  

  

  const $modalTextbox = $("<div>").attr("id", "modal-textbox");
  $divModal.append($modalTextbox);

  $modalTextbox
    .append($anchorModal)
    .append($headerModal)
    .append($firstP)
    .append($secondP)
    .append($thirdP)
    .append($fourthP);

  // Grabbing About the Game button
  const $openBtn = $("#openModal");

  // Grabbing modal element
  const $modal = $("#modal");

  // Grabbing close button
  const $closeBtn = $("#close");

  const openModal = () => {
    $modal.css("display", "block");
  };

  const closeModal = () => {
    $modal.css("display", "none");
  };

  $openBtn.on("click", openModal);

  // Event handler to close the modal

  $closeBtn.on("click", closeModal);

  setTimeout(openModal, 5000);

  const $footerDiv = $("<div>").attr("id", "modal-footer");

  $modalTextbox.append($footerDiv);
  $footerDiv.append($("#close"));


$('#weatherShow').click(function() {
  $('#weatherDiv').hide();
});

$('#weatherHide').click(function() {
  $('#weatherDiv').show();
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
