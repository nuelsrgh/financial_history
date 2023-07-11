'use strict';

/*
	1. Simple Array Method
		- Slice => mengambil element array berdasarkan start dan end nya tanpa memodif array asli
		- Splice => sama dengan slice tetapi benar benar mengubah array asli
		- Reverse => mengubah susunan urutan elemen pada array dan mengubah array aslinya
		- Join

	2. The new 'At' Method	
		Digunakan untuk menunjukkan posisi karakter dalam sebuah Array
		misalnya: const arr = ['J''O''N''A''S']
				  console.log(arr.at(0))  ===> J
				  console.log(arr.at(-1)) ===> S
	
	3. Looping Arrays:forEach
		* forEach digunakan untuk melakukan perulangan sama dengan 'for' dan juga 'for of'
			pada forEach ada tiga parameter:
				- pertama: element 
				- kedua  : index
				- ketiga : array keseluruhan

		* forEach sangat cocok ketika kita tidak ingin mengubah nilai datanya itu sendiri
		
		* contoh penggunaan forEach

			const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

			movements.forEach(function (movement, index, array){
				console.log(`${array}`)
					if(movement > 0){
					console.log(`Movement ${index}; You deposited ${movement}`);
				}
			})

	4. forEach With Maps and Sets
			* untuk memetakan array yang punya key
			* map dapat digunakan untuk perubahan data dalam bentuk array
			* map dapat me return sebuah nilai dan membentuk sebuaha array baru tanpa mengubah array aslinya


	5. PROJECT: "Bankist" App
			* insertAdjacentHTML => Menyisipkan element HTML ke dalam DOm
													  untuk dokumentasinya: "mdn insertAdjacentHTML"

	6. Array Method
	  	   * The Reduce Method => Untuk menjumlahkan seluruh elemen pada array tanpa tambahan external variabel
	  	  											 disebut juga sebagai akumulator(acc/snow ball) dari array
	  	  											 Alasan method ini namanya reduce karena ini akan mereturn satu nilai saja 
	  	  											 entah itu nilai maksimum atau nilai minimum
	  	  											 reduce method juga mempunyai 
	  	  											 1. call back function yang parameternya terdiri dari 4:
	  	  											 			- acc => elemen pertama dari array
	  	  											 			- mov => elemen kedua sampe terakhir
	  	  											 			- i => indeks
	  	  											 			- arrr => array keseluruhan
	  	  											 2. parameter tambahan
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]




const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

/*
	 A dog is an adult >=  3 years old
	 A dog is a puppy < 3 years old

	 Dog yang ada pada data Julia ternyata salah dog pertama dan dog 2 terakhir bukanlah dog tapi cat

*/


console.log("============== forEach & splice  exercise =======================")
	const checkDogs = function(dogsJulia, dogsKate){
			const dogsJuliaCorrected = dogsJulia.slice();
			dogsJuliaCorrected.splice(0,1)
			dogsJuliaCorrected.splice(-2);

			const dogs = dogsJuliaCorrected.concat(dogsKate);

			dogs.forEach(function(dog, i){
					  if(dog >= 3){
					  	console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
					  }else{
					  	console.log(`Dog number ${i + 1} is still puppy`);
					  }
			});
	}
	checkDogs(dogsJulia, dogsKate)	

console.log("======================= End =============================================")


console.log("============== Map  exercise =======================")
	 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
	 const eurToUsd = 1.1;

	 // const movementsUSD = movements.map(function(mov){
	 // 		return mov * eurToUsd;
	 // })


	 const movementsUSD = movements.map(mov => mov * eurToUsd);

	 console.log(movementsUSD);

console.log("======================= End =============================================")


const movementsDescriptions = movements.map((mov,i) => 
								`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
							  );

console.log(movementsDescriptions);

// ======= Filter Method ================= \\
		const deposits = movements.filter(function(mov, i){
			return mov > 0;
		})

		const withdrawals = movements.filter(mov => mov < 0);


// ======= Reduce Method ================= \\
	const balance = movements.reduce(function(acc, cur, i, arr){
		return acc + cur;
	}, 0);

	/* --- Maximum value Reduce Method */

	const max = movements.reduce((acc, mov) =>{
			if(acc > mov) {
				return acc;
			}else{
				return mov;
			}
	});



console.log("============== coding Challenge (Map, Filter, Reduce) =======================")


const TesData1 = [5,2,4,1,15,8,3]
const TesData2 = [5,2,4,1,15,8,3]


	const calcAverageHumanAge = function(ages){
		  //dibuat dengan menggunakan map agar bisa membentuk array baru
		  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
		  const Adults = humanAges.filter(age => age >= 18);      
	      console.log('humanAges', humanAges);
		  console.log('Adults', Adults);

		  //Mengkalkulasikan array dan return satu nilai, 0 menunjukkan bahwa pertama kali angkanya ditambah dengan 0
		  const average = Adults.reduce((acc, age, i, arr) => acc + age / arr.length,0);

		  return average;
	}

// const calcAverageHumanAge = function(ages){
// 		const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
// 													.filter(age => age >= 18)
// 													.reduce((acc, age, i, arr) => acc + age / arr.length,0);

// 		return humanAges;
// }

const avg1 = calcAverageHumanAge(TesData2);
console.log(avg1);


