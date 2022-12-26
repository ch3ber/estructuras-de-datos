/** Represents an array */
export class DynamicArray {
  /**
   * Create a static Array if lenght exist else create a dynamic array
   * @param {number} length - length of array memory
   */
  #memory = {}
  constructor () {
    this.length = 0
  }

  m () {
    return { length: this.length, memory: this.#memory }
  }

  get (start, end) {
    if (end) {
      return Object.values(this.#memory).slice(start, end)
    }

    return this.#memory[start]
  }

  /**
   * Push data into the last memory array's slot
   * @param {*} item - Item to push on array
   */
  push (item) {
    this.#memory[this.length] = item
    this.length++
  }

  /**
   * Push data into the first memory arra's slot
   * @param {*} item - Item to push on array
   */
  shift (item) {
    this.#fowardPositions(this.length)
    this.#memory[0] = item
    this.length++
  }

  /**
   * Delete the last array's item
   * @returns {*} last array's item
   */
  pop () {
    const item = this.#memory[this.length - 1]
    delete this.#memory[this.length - 1]
    this.length--
    return item
  }

  /**
   * Delete the fist array's item
   * @returns {*} fisrt array's item
   */
  unshift () {
    const item = this.#memory[0]
    this.#backwardPositions(0)
    delete this.#memory[this.length - 1]
    this.length--
    return item
  }

  #fowardPositions (pointer) {
    const MIN_ARRAY_LENGTH = 0

    while (pointer > MIN_ARRAY_LENGTH) {
      this.#memory[pointer] = this.#memory[pointer - 1]
      pointer--
    }
  }

  #backwardPositions (pointer) {
    const MAX_ARRAY_LENGTH = this.length - 1

    while (pointer < MAX_ARRAY_LENGTH) {
      this.#memory[pointer] = this.#memory[pointer + 1]
      pointer++
    }
  }

  delete (index) {
    if (!index) return undefined

    const item = this.#memory[index]
    this.#backwardPositions(index)
    delete this.#memory[this.length - 1]
    this.length--
    return item
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
array.push('ddd')
array.push('eee')
array.shift('aza')
array.shift('bzb')
array.shift('czb')
console.log(array.m())
// delete data from the array
console.log(array.pop())
console.log(array.unshift())
console.log(array.delete(2))
console.log(array.m())
// get
console.log(array.get(0))
console.log(array.get(1, 4))