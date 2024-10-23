// Noakhali donation js
document.getElementById('donate-noakhali-btn')
.addEventListener('click' , function(event){
    event.preventDefault();

    const noakhaliInput = getInputFileById('donate-noakhali-input');
    const balance= getTextFildValueById('account-balance');
    if (noakhaliInput > balance){
        alert('Please enter a valid donation amount.')
        return ;
    }
    if (isNaN(noakhaliInput)){
        alert('Please enter a valid donation amount.');
        return;
    }

    
    const newBalance = balance - noakhaliInput;
        document.getElementById('account-balance').innerText = newBalance;

        const amountOfNoakhali = getTextFildValueById('donation-amount-noakhali');

        const donationNoakhali = amountOfNoakhali + noakhaliInput  ;
        if(amountOfNoakhali + noakhaliInput ){
            alert("Thank you for your donation of " + donationNoakhali + "BDT !")
        }
         document.getElementById('donation-amount-noakhali').innerText = donationNoakhali;
})

// feni donation js
document.getElementById('donate-feni-btn')
.addEventListener('click' , function(event){
    event.preventDefault();

    const feniInput = getInputFileById('donate-feni-input');
    const balance= getTextFildValueById('account-balance');
    if (feniInput > balance){
        alert('Please enter a valid donation amount.')
        return ;
    }
    if (isNaN(feniInput)){
        alert('Please enter a valid donation amount.');
        return;
    }

    
    const newBalance = balance - feniInput;
        document.getElementById('account-balance').innerText = newBalance;

        const amountOfFeni = getTextFildValueById('donation-amount-feni');

        const donationFeni = amountOfFeni + feniInput  ;
        if(amountOfFeni + feniInput ){
            alert("Thank you for your donation of " + donationFeni + "BDT !")
        }
         document.getElementById('donation-amount-feni').innerText = donationFeni;
})

// feni donation js
document.getElementById('donation-quota-btn')
.addEventListener('click' , function(event){
    event.preventDefault();

    const quotaInput = getInputFileById('donation-quota-input');
    const balance= getTextFildValueById('account-balance');
    if (quotaInput > balance){
        alert('Please enter a valid donation amount.')
        return ;
    }
    if (isNaN(quotaInput)){
        alert('Please enter a valid donation amount.');
        return;
    }

    
    const newBalance = balance - quotaInput;
        document.getElementById('account-balance').innerText = newBalance;

        const amountOfQuota = getTextFildValueById('donation-amount-quota');

        const donationQuota = amountOfQuota + quotaInput  ;
        if(amountOfQuota + quotaInput ){
            alert("Thank you for your donation of " + donationQuota + "BDT !")
        }
         document.getElementById('donation-amount-quota').innerText = donationQuota;
})