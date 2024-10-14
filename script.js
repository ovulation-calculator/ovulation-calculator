let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}

document.getElementById('calculateBtn').addEventListener('click', calculateOvulation);
document.getElementById('resetBtn').addEventListener('click', resetCalculator);
document.getElementById('closeResultBtn').addEventListener('click', closeResultModal);

function calculateOvulation() {
  const cycleLength = parseInt(document.getElementById('cycleLength').value);
  const lastPeriodDate = document.getElementById('lastPeriodDate').value;

  if (!lastPeriodDate) {
    alert('Please enter your last period date.');
    return;
  }

  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    const lastPeriodDateObj = new Date(lastPeriodDate);
    const ovulationDay = Math.floor(cycleLength / 2);
    const ovulationDateObj = new Date(lastPeriodDateObj.getTime() + ovulationDay * 24 * 60 * 60 * 1000);

    const fertileWindowStart = new Date(ovulationDateObj.getTime() - 5 * 24 * 60 * 60 * 1000);
    const fertileWindowEnd = new Date(ovulationDateObj.getTime() + 1 * 24 * 60 * 60 * 1000);

    const ovulationDateStr = ovulationDateObj.toLocaleDateString();
    const fertileWindowStr = `${fertileWindowStart.toLocaleDateString()} - ${fertileWindowEnd.toLocaleDateString()}`;

    document.getElementById('ovulationResult').innerText = `Your ovulation date is: ${ovulationDateStr}`;
    document.getElementById('fertileWindowResult').innerText = `Your estimated fertile window is: ${fertileWindowStr}`;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
  }, 8000); // Simulate loading delay
}

function resetCalculator() {
  document.getElementById('cycleLength').value = 28;
  document.getElementById('periodLength').value = 5;
  document.getElementById('lastPeriodDate').value = '';
  document.getElementById('loading').style.display = 'none';
  document.getElementById('result').style.display = 'none';
}

function closeResultModal() {
  document.getElementById('result').style.display = 'none';
}


// faq javscript start here

// Select all the FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each FAQ question
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle the 'show' class for the answer related to the clicked question
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});

// faq javascript ends here

// visiter count

// Check if the 'visitorCount' exists in local storage
let visitorCount = localStorage.getItem('visitorCount');

// If it doesn't exist, set it to 0
if (!visitorCount) {
    visitorCount = 0;
}

// Increment the visitor count
visitorCount++;

// Update the local storage with the new count
localStorage.setItem('visitorCount', visitorCount);

// Display the total visitor count on the page
document.getElementById('visitorCount').textContent = `Total Visitors: ${visitorCount}`;
