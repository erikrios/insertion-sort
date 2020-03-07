function insertionSort(numbers) {
	
	for (var i = 1; i < numbers.length; i++) {
		
		for (var j = i; j > 0; j--) {
			if (numbers[j] < numbers[j - 1]) {
				var temp = numbers[j];
				numbers[j] = numbers[j - 1];
				numbers[j - 1] = temp;
			}
			else
				continue;
		}
	}
}

var numbers = [5, 8, 2, 4, 9, 3, 10, 1, 4];

insertionSort(numbers);

var result = "";

for (var i = 0; i < numbers.length; i++) {
	result += numbers[i] + " ";
}

console.log(result);
