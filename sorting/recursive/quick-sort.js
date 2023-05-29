function quickSort(arr) {
	if (arr.length <= 1) {
	  return arr;
	}

	var pivot = arr[0];
	var left = [];
	var right = [];

	for (var i = 1; i < arr.length; i++) {
	  if (arr[i] < pivot) {
		left.push(arr[i]);
	  } else {
		right.push(arr[i]);
	  }
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
  }
  //Big O (n log n)
  // Example usage:
  var myArray = [5, 3, 8, 2, 1, 4];
  console.log("Before sorting:", myArray);
  var sortedArray = quickSort(myArray);
  console.log("After sorting:", sortedArray);
