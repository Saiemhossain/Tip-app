//Select People
const PeopleSum = document.querySelector('#peopleSum');


//Increment By One
const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener("click", ()=>{
  count++;
  peopleSum.innerHTML = count;
});

//Decrement By One
const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener("click", ()=>{
  if (count>1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

//Calculate
const calculator = document.querySelector('#calculator');
calculator.addEventListener("click", () => {
  //display summary tab
  document.querySelector('.total_per_person').style.display = 'block';
//calculating tips
  const totalBill = Number(document.querySelector('#totalBill').value);
  const tipMain = Number(document.querySelector('#tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = PeopleSum.innerHTML;
//Display in total bill and summary tab
  
  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmmount').innerHTML = total;
  const taxAmmount = (document.querySelector('#taxAmmount').innerHTML = (totalBill + 5) / 100);
  
  //Final Calculation
  document.querySelector('#totalPerPerson').innerHTML = (
    (totalBill + total + taxAmmount)
    / finalPeople
  ).toFixed(1);

});