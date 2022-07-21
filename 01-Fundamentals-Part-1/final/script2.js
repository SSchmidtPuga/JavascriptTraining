// let markHeight = 78
// let markTall = 1.69

// let johnHeight = 92
// let johnTall = 1.95


// let bmiMark = (markHeight) / (markTall ** 2)
// console.log(bmiMark)

// let bmiJohn = (johnHeight) / (johnTall ** 2)
// console.log(bmiJohn)

// let markHigherBMI = (bmiMark < bmiJohn)
// console.log(markHigherBMI)

// if (markHigherBMI) { console.log('Mark is a fat mother fucker ') }

// else {
//   console.log('John is a mother fucker')

// // 
// let dataDolphins = (20 + 110 + 300) / 3
// let dataKoalas = (20 + 300 + 400) / 3
// let draw = dataDolphins === dataKoalas
// console.log(draw)


// if (dataDolphins < 100 || dataKoalas < 100) console.log("No one win")

// else if (dataDolphins > dataKoalas) console.log("Dolphins wins")

// else if (dataKoalas > dataDolphins) console.log("Koala wins")

// else if (dataDolphins === dataKoalas || draw) console.log("Its a draw")



let bill = 60
let tip = bill < 300 && bill > 50 ? "15%tip" : "20%tip"

console.log(tip)
switch (tip) {

  case '15%tip':
    let tip = bill * 0.15
    let totalCheck = bill + tip
    console.log(`The bill was $${bill} Dolars, so the tip is ${tip} and the total check is ${totalCheck}`)
    break;


  case '20%tip':
    let tip2 = bill * 0.20
    let totalCheck2 = bill + tip2
    console.log(`The bill was $${bill} Dolars, so the tip is ${tip2} and the total check is ${totalCheck2}`)
    break;
  default:
    console.log(" Not valid data")
}