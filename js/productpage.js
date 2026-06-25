

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 2100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2100|| document.documentElement.scrollTop > 2100) { /* Here We Can Define After How Many Pixel We Want the Butto To Appear */
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


/* For Sorting Elements Accordint to the need of user */
function getPrice(card) {
  const priceText = card.querySelector(".product-price").innerText;
  return Number(priceText.replace(/[^0-9]/g, ""));
}
document.getElementById("sortProducts").addEventListener("change", function () {
  const grid = document.querySelector(".product-grid");
  const cards = Array.from(grid.children);

  let sortedCards;

  switch (this.value) {
    case "name-asc":
      sortedCards = cards.sort((a, b) =>
        a.querySelector(".product-name").innerText.localeCompare(
          b.querySelector(".product-name").innerText
        )
      );
      break;

    case "name-desc":
      sortedCards = cards.sort((a, b) =>
        b.querySelector(".product-name").innerText.localeCompare(
          a.querySelector(".product-name").innerText
        )
      );
      break;

    case "price-low":
      sortedCards = cards.sort((a, b) =>
        getPrice(a) - getPrice(b)
      );
      break;

    case "price-high":
      sortedCards = cards.sort((a, b) =>
        getPrice(b) - getPrice(a)
      );
      break;

    default:
      return;
  }

  // ONLY reorder product cards
  sortedCards.forEach(card => grid.appendChild(card));
});


