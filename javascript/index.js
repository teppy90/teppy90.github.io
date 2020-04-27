// console.log($);
console.log("modal practice app.js is linked to this index.html");

$(() => {
  //write your code here
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

  const $headerModal = $("<h1>").text("Learn to play Bridge");

  const $firstP = $(
    "<p>Bridge is played with four people sitting at a card table using a standard deck of 52 cards (no jokers). The players across from each other form partnerships as North‑South and East‑West.</p>"
  );

  const $secondP = $(
    "<p>Draw cards to select the person to deal the cards (the dealer). This person distributes the cards face down, in clockwise rotation one at a time, until each player at the table has a hand consisting of 13 cards. </p>"
  );

  const $thirdP = $(
    "<p>After the play of each deal is completed, the opportunity to deal moves around the table clockwise so that each person has a turn to deal out the cards.</p>"
  );

  const $modalTextbox = $("<div>").attr("id", "modal-textbox");
  $divModal.append($modalTextbox);

  $modalTextbox
    .append($anchorModal)
    .append($headerModal)
    .append($firstP)
    .append($secondP)
    .append($thirdP);

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

  // Move the Close button to the bottom of the text box and wrap it in a div to make it easier to style. Give the <div> an id of modal-footer.

  // <div id="modal-footer">
  // <a id="close" href="#">Close</a>
  // </div>
});
