class SelectionSort {
  constructor(array) {
    this.unsortedArray;
    this.animatedArray;
    this.array = array;
    this.valuePosition;
    this.swapPosition;
  }

  swap(array, i, x) {
    let temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }

  createUnsortedArray(array) {
    this.unsortedArray = Array.from(array);
    this.animatedArray = Array.from(array);
  }

  sort(array, value1, value2) {
    this.createUnsortedArray(array);

    if (array === undefined) {
      array = this.array;
    }

    if (this.array === undefined) {
      this.array = array;
    }

    for (let i = 0; i < array.length; i++) {
      let min = i;

      for (let x = i + 1; x < array.length; x++) {
        if (array[x] < array[min]) {
          min = x;
        }

        if (value1 == array[x] && value2 == array[i]) {
          this.valuePosition = x;
          this.swapPosition = i;
          this.array = array;
        }
      }

      if (i !== min) {
        this.swap(array, i, min);
      }
    }

    return array;
  }

  sortSlow() {
    for (let i = 0; i < this.animatedArray.length; i++) {
      let min = i;

      for (let x = i + 1; x < this.animatedArray.length; x++) {
        if (this.animatedArray[x] < this.animatedArray[min]) {
          min = x;
        }
      }

      if (i !== min) {
        this.swap(this.animatedArray, i, min);
        return;
      }
    }

    this.createUnsortedArray(this.unsortedArray);
  }

  returnValue(value) {
    return value;
  }

  checkUnsortedArray() {
    return this.unsortedArray;
  }

  checkUnsortedArrayValue(index) {
    return this.unsortedArray[index];
  }

  checkSelectionSort(array, value1, value2) {
    this.sort(array, value1, value2);
    let positionArray = [this.valuePosition, this.swapPosition];
    return positionArray;
  }
}

module.exports = SelectionSort;
