

const billInput = document.getElementById('billTotalInput');
const perPersonTotal = document.getElementById('perPersonTotal');
const surchargeInput = document.getElementById('surchargeInput');
const surchageamount = document.getElementById('surchageamount');
const totalamount =  document.getElementById('totalamount');

const calculatetax  = () => {
  const amount =  Number(billInput.value);

  let  tax = 0;
  if (amount < 300000) {
    tax = 0;
  }
  else if (amount <= 400000) {
    tax = (amount - 300000) * 5/100;
  }
  else if (amount <= 700000) {
    tax = ((amount - 400000)* 10/100)+5000;
  }
  else if (amount <= 1100000){
    tax =  ((amount - 700000)* 15/100)+30000+5000;
  }
  else if (amount <= 1600000){
    tax = ((amount - 1100000)* 20/100)+60000+30000+5000;
  } 
  else {
    tax = ((amount - 1600000)* 25/100)+100000+60000+30000+5000;
  }

  const taxfinal = tax + 0 


  perPersonTotal.innerText = `$${taxfinal.toFixed(2)}`

  // calcualtion surcharge starts here 
  const value  = Number(surchargeInput.value);

  let surcharge = 0;
  if (value < 30000000) {
    surcharge = 0;
  }
  else if (value < 100000000) {
    surcharge = taxfinal * 10/100;
  }
  else if (value < 200000000) {
    surcharge = taxfinal * 20/100;
  }
  else if (value < 500000000) {
    surcharge = taxfinal * 30/100;
  }
  else {
    surcharge = taxfinal * 35/100;
  }


   const surchargefinal = surcharge + 0;



    let total = taxfinal + surchargefinal;
    totalamount.innerText = `$${total.toFixed(2)}`

  //ends here
}

const calculatesurcharge = () => {

  // rewrite the amount starts here 
  const amount =  Number(billInput.value);

  let  tax = 0;
  if (amount < 300000) {
    tax = 0;
  }
  else if (amount <= 400000) {
    tax = (amount - 300000) * 5/100;
  }
  else if (amount <= 700000) {
    tax = ((amount - 400000)* 10/100)+5000;
  }
  else if (amount <= 1100000){
    tax =  ((amount - 700000)* 15/100)+30000+5000;
  }
  else if (amount <= 1600000){
    tax = ((amount - 1100000)* 20/100)+60000+30000+5000;
  } 
  else {
    tax = ((amount - 1600000)* 25/100)+100000+60000+30000+5000;
  }

  const taxfinal = tax + 0 

  // ends here 

  // surcharge count starts here 
  const value  = Number(surchargeInput.value);
  
  let surcharge = 0;
  if (value < 30000000) {
    surcharge = 0;
  }
  else if (value < 100000000) {
    surcharge = taxfinal * 10/100;
  }
  else if (value < 200000000) {
    surcharge = taxfinal * 20/100;
  }
  else if (value < 500000000) {
    surcharge = taxfinal * 30/100;
  }
  else {
    surcharge = taxfinal * 35/100;
  }

   const surchargefinal = surcharge + 0;


   surchageamount.innerText = `$${surchargefinal.toFixed(2)}`

  let total = taxfinal + surchargefinal;

  totalamount.innerText = `$${total.toFixed(2)}`
  

  

}


