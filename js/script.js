function calculateTrip() {
  let destination = document.getElementById("destination").value;
  let travellers = Number(document.getElementById("travellers").value);
  let days = Number(document.getElementById("days").value);
  let style = document.getElementById("style").value;

  // Basic validation
  if (!destination || travellers <= 0 || days <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid trip details.";
    return;
  }

  let dailyRate = 150;
  let multiplier = 1;
  let packageName = "Budget Travel Package";

  if (style === "standard") {
    multiplier = 1.5;
    packageName = "Standard Travel Package";
  } else if (style === "luxury") {
    multiplier = 2;
    packageName = "Luxury Travel Package";
  }

  let totalCost = travellers * days * dailyRate * multiplier;

  document.getElementById("result").innerText =
    `Estimated cost for ${travellers} travellers to ${destination} for ${days} days: $${totalCost.toLocaleString()} – ${packageName}.`;
}
