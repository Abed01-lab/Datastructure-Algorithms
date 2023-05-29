
// Time complex of Big O(n^2)
function bubbleSort(arr) {
	var len = arr.length;

	for (var i = 0; i < len - 1; i++) {
	  for (var j = 0; j < len - 1 - i; j++) {
		if (arr[j] > arr[j + 1]) {
		  // Swap elements
		  var temp = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp;
		}
	  }
	}

	return arr;
  }

  // Example usage:
  var myArray = [5, 3, 8, 2, 1, 4];
  console.log("Before sorting:", myArray);
  var sortedArray = bubbleSort(myArray);
  console.log("After sorting:", sortedArray);
