function BMI() {

	var markMass = document.getElementById("markMass").value;
	var markHeight = document.getElementById("markHeight").value;
	var johnMass = document.getElementById("johnMass").value;
	var johnHeight = document.getElementById("johnHeight").value;
	var markBMI = markMass / (markHeight * markHeight);
	var johnBMI = johnMass / (johnHeight * johnHeight);
	var isMarkHigher = markBMI > johnBMI;
	console.log("Mark's BMI: " + markBMI);
	console.log("John's BMI: " + johnBMI);
	document.getElementById("result1").innerHTML = "Mark's BMI: " + markBMI + "<br>John's BMI: " + johnBMI;
	// document.getElementById("result").innerHTML = "Mark's BMI: " + markBMI + "<br>John's BMI: " + johnBMI;
	if (isMarkHigher) {
		document.getElementById("result").innerHTML = "<br>Mark's BMI " + markBMI + "  is higher than John's " + johnBMI;
		console.log("Mark's BMI " + markBMI + "  is higher than John's" + johnBMI);
	} else {
		document.getElementById("result").innerHTML = "<br>John's BMI " + johnBMI + " is higher than Mark's " + markBMI;
		console.log("John's BMI " + johnBMI + " is higher than Mark's" + markBMI);
	}
}

function bai1() {

	const markMass1 = 78;
	const markHeight1 = 1.69;
	const johnMass1 = 92;
	const johnHeight1 = 1.95;

	const markBMI1 = markMass1 / (markHeight1 * markHeight1);
	const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);


	const markHigherBMI1 = markBMI1 > johnBMI1;

	console.log("--- Data Set 1 Results ---");
	console.log("Mark's BMI:", markBMI1.toFixed(2));
	console.log("John's BMI:", johnBMI1.toFixed(2));
	console.log("Mark has higher BMI:", markHigherBMI1);

	console.log("--- Data Set 1 Results ---");
	if (markBMI1 > johnBMI1) {
		console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
	} else {
		console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
	}

	const markMass2 = 95;
	const markHeight2 = 1.88;
	const johnMass2 = 85;
	const johnHeight2 = 1.76;

	const markBMI2 = markMass2 / (markHeight2 ** 2);
	const johnBMI2 = johnMass2 / (johnHeight2 ** 2);


	const markHigherBMI2 = markBMI2 > johnBMI2;

	console.log("\n--- Data Set 2 Results ---");
	console.log("Mark's BMI:", markBMI2.toFixed(2));
	console.log("John's BMI:", johnBMI2.toFixed(2));
	console.log("Mark has higher BMI:", markHigherBMI2);

	console.log("\n--- Data Set 2 Results ---");
	if (markBMI2 > johnBMI2) {
		console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
	} else {
		console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
	}
}

function bai31() {

	// Data 1
	const dolphinsScore1 = 96;
	const dolphinsScore2 = 108;
	const dolphinsScore3 = 89;

	const koalasScore1 = 88;
	const koalasScore2 = 91;
	const koalasScore3 = 110;

	// Tính điểm trung bình
	const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
	const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

	console.log("Điểm trung bình của Dolphins:", dolphinsAverage);
	console.log("Điểm trung bình của Koalas:", koalasAverage);

	// Kiểm tra người chiến thắng
	if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
		console.log("Dolphins thắng! ");
	} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
		console.log("Koalas thắng! ");
	} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
		console.log("Hòa! Cả hai đội đều thắng ");
	} else {
		console.log("Không có đội nào thắng ");
	}
}

function bai3() {
	function checkWinner(dolphinsScores, koalasScores, minScore = 100) {
		// Tính điểm trung bình
		const avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
		const avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

		console.log(`Điểm trung bình Dolphins: ${avgDolphins}`);
		console.log(`Điểm trung bình Koalas: ${avgKoalas}`);

		// Kiểm tra người chiến thắng
		if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
			console.log("Dolphins thắng! ");
		} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
			console.log("Koalas thắng! ");
		} else if (avgDolphins === avgKoalas && avgDolphins >= minScore) {
			console.log("Hòa! Cả hai đội đều thắng! ");
		} else {
			console.log("Không có đội nào thắng ");
		}
	}

	// Test dữ liệu 1
	console.log("=== Test 1 ===");
	checkWinner([96, 108, 89], [88, 91, 110]);

	// Test dữ liệu 2 (Bonus 1)
	console.log("\n=== Test 2 ===");
	checkWinner([97, 112, 101], [109, 95, 123]);

	// Test dữ liệu 3 (Bonus 2)
	console.log("\n=== Test 3 ===");
	checkWinner([97, 112, 101], [109, 95, 106]);
}

function bai4() {

	const bill = 275; 
    const inBill1 =  (bill >= 50 && bill <= 300)
	const tip =  bill * (inBill1 * 0.15 + !inBill1 * 0.2);
	const total = bill + tip;

	console.log(`Hóa đơn là ${bill}, tiền boa là ${tip}, tổng cộng là ${total}`);

	const bill2 = 40;
    const inBill2 =  (bill2 >= 50 && bill2 <= 300)
	const tip2 =  bill2 * (inBill2 * 0.15 + !inBill2 * 0.2);
	const total2 = bill2 + tip2;

	console.log(`Hóa đơn là ${bill2}, tiền boa là ${tip2}, tổng cộng là ${total2}`);

	const bill3 = 430;
    const inBill3 =  (bill3 >= 50 && bill3 <= 300)
	const tip3 =  bill3 * (inBill3 * 0.15 + !inBill3 * 0.2);
	const total3 = bill3 + tip3;

	console.log(`Hóa đơn là ${bill3}, tiền boa là ${tip3}, tổng cộng là ${total3}`);
}