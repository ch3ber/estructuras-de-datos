// start at 8:27
// ends to 8:54

/** Represents an array */
export class DynamicArray {
  /**
   * Create a static Array if lenght exist else create a dynamic array
   * @param {number} length - length of array memory
   */
  constructor () {
    this.length = 0
    this.memory = {}
  }

  /**
   * Push data into the last memory array's slot
   * @param {*} item - Item to push on array
   */
  push (item) {
    this.memory[this.length] = item
    this.length++
  }

  /**
   * Push data into the first memory arra's slot
   * @param {*} item - Item to push on array
   */
  shift (item) {
    let pointer = this.length
    const MIN_ARRAY_LENGTH = 0

    while (pointer > MIN_ARRAY_LENGTH) {
      this.memory[pointer] = this.memory[pointer - 1]
      pointer--
    }

    this.memory[0] = item
    this.length++
  }

  /**
   * Delete the last array's item
   * @returns {*} last array's item
   */
  pop () {
    const item = this.memory[this.length - 1]
    delete this.memory[this.length - 1]
    this.length--
    return item
  }

  /**
   * Delete the fist array's item
   * @returns {*} fisrt array's item
   */
  unshift () {
    this.length--
  }

  #fowardPositions (index) {

  }
}

// --- tests ---
// create an array
const array = new DynamicArray()
console.log(array)
// insert data into the array
array.push('aaa')
array.push('bbb')
array.push('ccc')
array.shift('aza')
console.log(array)
// delete data from the array
array.pop()
array.unshift()
console.log(array)
