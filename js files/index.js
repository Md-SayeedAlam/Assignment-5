document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document.getElementById("btn-blog2").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// common function

document.getElementById("btn-history").addEventListener("click", function () {
  const navSection = document.getElementById("nav-section");

  const mainSection = document.getElementById("main-section");
  const historyShown = document.getElementById("history-shown");
  const btnHistory = document.getElementById("btn-history");
  const btnDonation = document.getElementById("btn-donation");

  navSection.classList.add("hidden");
  mainSection.classList.add("hidden");
  historyShown.classList.remove("hidden");
  // btnHistory.style.backgroundColor='bg-[#B4F461]'
  btnDonation.classList.remove("bg-[#B4F461]", "text-black");
  btnDonation.classList.add("bg-white", "text-gray-400");
});

document.getElementById("btn-donation").addEventListener("click", function () {
  const navSection = document.getElementById("nav-section");

  const mainSection = document.getElementById("main-section");
  const historyShown = document.getElementById("history-shown");
  const btnHistory = document.getElementById("btn-history");
  const btnDonation = document.getElementById("btn-donation");

  navSection.classList.remove("hidden");
  mainSection.classList.remove("hidden");
  historyShown.classList.add("hidden");
  btnDonation.classList.add("bg-[#B4F461]", "text-black");
  btnHistory.classList.remove("bg-[#B4F461]");
  btnHistory.classList.add("bg-white", "text-gray-400");
});

// document.getElementById("donate-now").addEventListener("click", function () {
//   const donationAmount = parseFloat(
//     document.getElementById("donation-amount").value
//   );
  
//   if (isNaN(donationAmount) || donationAmount <= 0) {
//     return alert("invalid donation amount");
//   }

//   alert("good");
// });

