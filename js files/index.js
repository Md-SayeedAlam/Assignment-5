document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document.getElementById("btn-blog2").addEventListener("click", function () {
  window.location.href = "blog.html";
});


// common function starts here
function getInputId (id){
  return parseFloat(document.getElementById(id).innerText)
}

function removeClass (id){
  document.getElementById(id).classList.remove('hidden');
  return;
}
function addClass (id){
  document.getElementById(id).classList.add('hidden');
  return;
}

function getElementId(id){
  return document.getElementById(id);
  
}
// common function ends here





document.getElementById("btn-history").addEventListener("click", function () {

  // const navSection = document.getElementById("nav-section");
  const navSection = getElementId('nav-section')

  // const mainSection = document.getElementById("main-section");
  const mainSection = getElementId('main-section')
  
  // const historyShown = document.getElementById("history-shown");
  const historyShown = getElementId('history-shown')

  // const btnHistory = document.getElementById("btn-history");
  const btnHistory = getElementId('btn-history')

  // const btnDonation = document.getElementById("btn-donation");
  const btnDonation =getElementId('btn-donation')

  navSection.classList.add("hidden");
  mainSection.classList.add("hidden");
  historyShown.classList.remove("hidden");
 
  btnDonation.classList.remove("bg-[#B4F461]", "text-black");
  btnDonation.classList.add("bg-white", "text-gray-400");
});

document.getElementById("btn-donation").addEventListener("click", function () {

  const navSection = getElementId('nav-section')
  const mainSection = getElementId('main-section')
  const historyShown = getElementId('history-shown')
  const btnHistory = getElementId('btn-history')
  const btnDonation =getElementId('btn-donation')

  // const navSection = document.getElementById("nav-section");
  // const mainSection = document.getElementById("main-section");
  // const historyShown = document.getElementById("history-shown");
  // const btnHistory = document.getElementById("btn-history");
  // const btnDonation = document.getElementById("btn-donation");

  navSection.classList.remove("hidden");
  mainSection.classList.remove("hidden");
  historyShown.classList.add("hidden");
  btnDonation.classList.add("bg-[#B4F461]", "text-black");
  btnHistory.classList.remove("bg-[#B4F461]");
  btnHistory.classList.add("bg-white", "text-gray-400");
});

// 1st card 

document.getElementById("donate-now").addEventListener("click", function () {
  
  const donationAmount = parseFloat(
    document.getElementById("donation-amount").value
  );

  // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
  // const mainBalance2 = parseFloat(document.getElementById('main-balance-2').innerText);
  const mainBalance = getInputId('main-balance')
  const mainBalance2 = getInputId('main-balance-2');


if (isNaN(donationAmount) || donationAmount <= 0) {
  document.getElementById("donation-amount").value='';

  return alert("invalid donation amount");
  }

if(mainBalance < donationAmount){
  document.getElementById("donation-amount").value='';
  alert('No Money in your account for donation');
  return;
}else{
  
 
  // const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
  const noakhaliBalance = getInputId('noakhali-balance');
  
  
  const newBalance = mainBalance-donationAmount;
  
  document.getElementById('main-balance').innerText= newBalance.toFixed(2);
  document.getElementById('main-balance-2').innerText= newBalance.toFixed(2);
  
     const total = noakhaliBalance + donationAmount;
     document.getElementById('noakhali-balance').innerText = total.toFixed(2) ;
}

  
const newDiv = document.createElement('div')
newDiv.innerHTML=`<div class="flex flex-col gap-4 ">
            <div class="p-5 border rounded-2xl">
                <h3>${donationAmount} Taka is Donated for famine-2024 at Noakhali -Feni, Bangladesh</h3>
                
                 <p>Date: ${new Date()}</p>
            </div>
          `
const container = document.getElementById('new-div-history');
container.appendChild(newDiv);
  
  const modal = document.getElementById('modal');
  // document.getElementById('modal').classList.remove('hidden');
  removeClass('modal');
  modal.style.display = "block";
  
  const navSection = document.getElementById("nav-section");
  navSection.classList.remove('sticky','glass');

  document.getElementById("donation-amount").value='';
});
document.getElementById('btn-close').addEventListener('click',function(){
  const modal = document.getElementById('modal');
    // document.getElementById('modal').classList.add('hidden')
    addClass('modal');
    modal.style.display = "none";
    const navSection = document.getElementById("nav-section");
    navSection.classList.add('sticky','glass');
 })


// 2nd card 

document.getElementById("donate-now-2").addEventListener("click", function () {
  
  const donationAmount = parseFloat(
    document.getElementById("donation-amount-2").value
  );
  // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
  // const mainBalance2 = parseFloat(document.getElementById('main-balance-2').innerText);
  const mainBalance = getInputId('main-balance');
  const mainBalance2 = getInputId('main-balance-2');

  if (isNaN(donationAmount) || donationAmount <= 0) {
    document.getElementById("donation-amount-2").value='';

    return alert("invalid donation amount");
    }


    if(mainBalance < donationAmount){
      document.getElementById("donation-amount-2").value='';
      alert('No Money in your account for donation');
      return;
    }else{
      

  
  // const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);

  const feniBalance = getInputId('feni-balance');

  const newBalance = mainBalance-donationAmount;

document.getElementById('main-balance').innerText= newBalance.toFixed(2);
document.getElementById('main-balance-2').innerText= newBalance.toFixed(2);

   const total = feniBalance + donationAmount;

   document.getElementById('feni-balance').innerText = total.toFixed(2);}
  

  
  
    const newDiv = document.createElement('div')
    newDiv.innerHTML=`<div class="flex flex-col gap-4">
                <div class="p-5 border rounded-2xl">
                    <h3>${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
                     <p>Date: ${new Date()}</p>
                </div>
              `
    const container = document.getElementById('new-div-history');
    container.appendChild(newDiv);


  const modal = document.getElementById('modal-2');
  // document.getElementById('modal-2').classList.remove('hidden');
  removeClass('modal-2')
  modal.style.display = "block";
  
  const navSection = document.getElementById("nav-section");
  navSection.classList.remove('sticky','glass');

  document.getElementById("donation-amount-2").value='';

  document.getElementById('btn-close-2').addEventListener('click',function(){
    const modal = document.getElementById('modal-2');
      // document.getElementById('modal-2').classList.add('hidden')
      addClass('modal-2');
      modal.style.display = "none";
      const navSection = document.getElementById("nav-section");
      navSection.classList.add('sticky','glass');
   })
})
//  3rd card 

document.getElementById("donate-now-3").addEventListener("click", function () {
 
  const donationAmount = parseFloat(
    document.getElementById("donation-amount-3").value
  );
  // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
  // const mainBalance2 = parseFloat(document.getElementById('main-balance-2').innerText);
  const mainBalance = getInputId('main-balance');
  const mainBalance2 = getInputId('main-balance-2');

  if (isNaN(donationAmount) || donationAmount <= 0) {
    document.getElementById("donation-amount-3").value='';

    return alert("invalid donation amount");
    }


  if(mainBalance < donationAmount){
    document.getElementById("donation-amount-3").value='';
    alert('No Money in your account for donation');
    return;
  }else{
    
 
  // const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
 
  const quotaBalance = getInputId('quota-balance');
  const newBalance = mainBalance-donationAmount;

document.getElementById('main-balance').innerText= newBalance.toFixed(2);
document.getElementById('main-balance-2').innerText= newBalance.toFixed(2);

   const total = quotaBalance + donationAmount;

   document.getElementById('quota-balance').innerText = total.toFixed(2);}
  
  
   
  
    const newDiv = document.createElement('div')
    newDiv.innerHTML=`<div class="flex flex-col gap-4 ">
                <div class="p-5 border rounded-2xl">
                    <h3>${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
                     <p>Date: ${new Date()}</p>
                </div>
              `
    const container = document.getElementById('new-div-history');
    container.appendChild(newDiv);


  const modal = document.getElementById('modal-3');
  // document.getElementById('modal-3').classList.remove('hidden');
  removeClass('modal-3');
  modal.style.display = "block";
  
  const navSection = document.getElementById("nav-section");
  navSection.classList.remove('sticky','glass');

  document.getElementById("donation-amount-3").value='';

  document.getElementById('btn-close-3').addEventListener('click',function(){
    const modal = document.getElementById('modal-3');
      // document.getElementById('modal-3').classList.add('hidden')
      addClass('modal-3');
      modal.style.display = "none";
      const navSection = document.getElementById("nav-section");
      navSection.classList.add('sticky','glass');
   })
  
 
});
