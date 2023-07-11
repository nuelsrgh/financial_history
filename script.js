const containerHistory = document.querySelector('.history');
const btnLogin = document.querySelector('.login__btn');


const account1 = {
  name: 'Immanuel Saragih',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  description:"dekripsi keterangan sumber dana",
  interestRate: 1.2, // %
  pin: 1111,
};


const accounts = [account1];

const createUsernames = function(accs){
	accs.forEach(function(acc){
			acc.username = acc.name.toLowerCase().split(' ').map(name => name[0]).join('');
	});
}
createUsernames(accounts);


//Event handler
btnLogin.addEventListener('click', function(e){

		//Prevent form from submitting
		e.preventDefault();

		currentAccount = accounts.find(
				acc => acc.username === inputLoginUsername.value
		);

		console.log('account', currentAccount);

		if(currentAccount?.pin === Number(inputLoginPin.value)){
				labelWelcome.textContent = `Welcome back, ${ currentAccount.owner.split(' ')[0]}`;
				containerApp.style.opacity = 100;

				//clear input fields
				inputLoginUsername.value = inputLoginPin.value = '';
				inputLoginPin.blur();

				// Update UI
				updateUI(currentAccount);
	 
		}
})


const displayHistory = function(history){
	containerHistory.innerHTML = '';

	console.log('history', history)
	history.forEach(function(mov, i){
			const type = mov > 0 ? 'uang_masuk' : 'uang_keluar';
			const description = 'Kiriman dari mama buat biaya sebulan kedepan';
			const date = '24/01/2037';
			
			const html = `<div class="history__row">
											<div class ="history__type history__type--${type}">${type}</div>
											<div class="history__description">${description}</div>
											<div class="history__date">${date}</div>
										    <div class="history__value">${mov} Rp</div>
										</div>`;

			containerHistory.insertAdjacentHTML('afterbegin', html)
	});
};


const updateUI = function(){
	 //Display history 
     displayHistory(account1.movements)
}

updateUI()
