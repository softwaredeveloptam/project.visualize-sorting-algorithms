class SelectionSort {
  constructor(array) {
    this.array = array;
    this.valuePosition;
    this.swapPosition;
  }

  swap(array, i, x) {
    let temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }

  sort(array, value1, value2) {
    for (let i = 0; i < array.length; i++) {
      let min = i;

      for (let x = i + 1; x < array.length; x++) {
        if (array[x] < array[min]) {
          min = x;
        }

        if (value1 == array[x] && value2 == array[i]) {
          this.valuePosition = x;
          this.swapPosition = i;
        }
      }

      if (i !== min) {
        this.swap(array, i, min);
      }
    }

    return array;
  }

  returnValue(value) {
    return value;
  }

  checkSelectionSort(array, value1, value2) {
    this.sort(array, value1, value2);
    let positionArray = [this.valuePosition, this.swapPosition];
    return positionArray;
  }
}

module.exports = SelectionSort;
