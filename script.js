// Get all pricing options
const pricingOptions = document.querySelectorAll(".pricing-option");
const totalDisplay = document.querySelector(".total");

// Price mapping
const prices = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

// Handle option click
pricingOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    if (e.target.tagName === "SELECT") {
      return;
    }

   
    pricingOptions.forEach((opt) => opt.classList.remove("active"));

   
    this.classList.add("active");

   
    const optionNumber = this.getAttribute("data-option");
    totalDisplay.textContent = `Total : ${prices[optionNumber]}`;
  });
});

// Prevent select dropdowns from toggling the panel
const selects = document.querySelectorAll("select");
selects.forEach((select) => {
  select.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
