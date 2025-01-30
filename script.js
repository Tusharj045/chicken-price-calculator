document.getElementById('priceCalculator').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get input values
  const liverWeight = parseFloat(document.getElementById('liverWeight').value) || 0;
  const liverPrice = parseFloat(document.getElementById('liverPrice').value);
  const chickenWeight = parseFloat(document.getElementById('chickenWeight').value) || 0;
  const chickenPrice = parseFloat(document.getElementById('chickenPrice').value);

  // Validate inputs
  if (isNaN(liverWeight) || isNaN(liverPrice) || isNaN(chickenWeight) || isNaN(chickenPrice)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate prices
  const liverPricePerGram = liverPrice / 1000;
  const chickenPricePerGram = chickenPrice / 1000;

  const totalLiverPrice = liverWeight * liverPricePerGram;
  const totalChickenPrice = chickenWeight * chickenPricePerGram;

  const finalPrice = totalLiverPrice + totalChickenPrice;

  // Display result
  document.getElementById('result').innerText = `Final Price: ₹${finalPrice.toFixed(2)}`;
});