/** Represents an array */
export class CustomArray {
  /**
   * Create a static Array if lenght exist else create a dynamic array
   * @param {number} length - length of array memory
   */
  constructor (length = 0) {
    this.length = length
    this.memory = {}
    this.setLength(this.length)
  }

  setLength (lenght) {
    // return if isn't a dynamic array
    if (lenght === 0) return

    // set undefined in all memory slots
    for (let i; i < this.length - 1; i++) {
      this.push(undefined)
    }
  }

  /**
   * Push data into the array
   * @param {*} item - Item to push on array
   */
  push (item) {

  }

  shift () {

  }
}
