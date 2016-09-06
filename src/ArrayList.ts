import {List} from './List';
import {Collection} from './Collection';

/**
 * Resizable-array implementation of the List interface.
 *
 * @export
 * @class ArrayList
 * @implements {List<E>}
 * @template E
 *
 * @author Miguel Amezola <amezolma@plu.edu>
 */
export class ArrayList<E> implements List<E> {

	/**
	 * The array buffer into which the elements of the ArrayList are stored.
	 *
	 * @private
	 * @type {E[]}
	 */
	private _elementData: E[];

	/**
	 * Creates an empty list.
	 *
	 */
	public constructor() {
		this._elementData = [];
	}

	// BASIC OPERATIONS

	/**
	 * Returns true if a target element is in this collection.
	 *
	 * @param {E} element - target element
	 * @returns {boolean} true if target element is in this collection
	 */
	public contains(element: E): boolean { 
		if(this._elementData.indexOf(element) >= 0) {
			return true;
		}
		return false;
	}
	/**
	 * Returns true if this collection contains no elements.
	 *
	 * @returns {boolean} true if this collection contains no elements
	 */
	public isEmpty(): boolean { 
		return this._elementData.length === 0; 
	}
	/**
	 * Returns the number of elements in this collection.
	 *
	 * @returns {number} the number of elements in this collection
	 */
	public size(): number { 
		return this._elementData.length; 
	}

	// BULK OPERATIONS

	/**
	 * Removes all elements from this collection.
	 *
	 */
	public clear(): void {
  		this._elementData.length = 0; 
	}


	// ARRAY OPERATIONS

	/**
	 * Translates the contents of this collection into an array.
	 *
	 * @returns {E[]} the contents of this collection as an array
	 */
	toArray(): E[] { return; }


	// POSITIONAL ACCESS

	/**
	 * Returns the element at the specified position in this list.
	 *
	 * @param {number} index - index of the element to return
	 * @returns {E}	the element at the specified position in this list
	 * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
	 */
	get(index: number): E { return; }
	/**
	 * Replaces the element at the specified position in this list with the specified element.
	 *
	 * @param {number} index - index of the element to replace
	 * @param {E} element - element to be stored at the specified position
	 * @returns {E} the element previously at the specified position
	 * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
	 */
	set(index: number, element: E): E { return; }
	/**
	 * Inserts the specified element at the specified position in this list.
	 * Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
	 *
	 * @param {E} element - element to be inserted
	 * @param {number} index - index at which the specified element is to be inserted
	 * @returns {boolean} true if element was successfully added
	 * @throws {RangeError} if the index is out of range (index < 0 || index > size())
	 */
	public add(element: E, index: number): boolean {
		// if index if out of range
		if(index < 0 || index > this.size()) {
			throw new RangeError('index is out of range (index < 0 || index > size())');
		}

		// store original size of this list
		let originalSize: number = this.size();

		// if index equals 0, then `unshift` 
		if(index === 0) {
			this._elementData.unshift(element);

		// if index equals `size`, then `push`
		} else if(index === this.size()) {
			this._elementData.push(element);

		// othersize
		} else {
			// splice `_elementData` into left and right arrays about the specified index
			// put element current at index into right array
			let left: E[] = this._elementData.slice(0, index);
			let right: E[] = this._elementData.slice(index);
			// put `element` in its own array to facilitate `concat` operation
			let elementContainer: E[] = [element]; 
			// `concat` left, elementContainer, and right (in that order) to form a new `_elementData` array
			this._elementData = left.concat(elementContainer, right);
		}

		// return true if element was added successdully
		if(this.size() === originalSize + 1)  {
			return true;
		}

		return false;
	
	}
	/**
	 * Removes the element at the specified position in this list.
	 * Shifts any subsequent elements to the left (subtracts one from their indices).
	 *
	 * @param {number} index - the index of the element to be removed
	 * @returns {boolean} true if element was successfully removed
	 * @throws {RangeError} if the index is out of range (index < 0 || index > size())
	 */
	public remove(index: number): boolean {
  		// if index if out of range 
		if(index < 0 || index >= this.size()) {
			throw new RangeError('index is out of range (index < 0 || index > size())');
		}

		// store original `size` of this list
		let originalSize: number = this.size();

		// if `index` equals 0, then `shift`
		if(index === 0) {
			this._elementData.shift();
		
		// if `index` equals `size`, then `pop`
		} else if(index === this.size()) {
			this._elementData.pop();

		// otherwise
		} else {
			// splice `_elementData` into left and right arrays about the specified index
			// do not include element currently at specified index
			let left: E[] = this._elementData.slice(0, index);
			let right: E[] = this._elementData.slice(index + 1);
			// `concat` left, elementContainer, and right (in that order) to form a new `_elementData` array
			this._elementData = left.concat(right);

		}
		// return true if element was remove successfully
		if(this.size() === originalSize - 1) {
			return true;
		}
		return false;
	}
	/**
	 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
	 * Shifts the element currently at that position (if any) and any subsequent elements to the right (increases their indices).
	 *
	 * @param {number} index - index at which to insert the first element from the specified collection
	 * @param {Collection<E>} c - collection containing elements to be added to this list
	 * @returns {boolean} true if this list changed as a result of the call
	 */
	addAll(index: number, c: Collection<E>): boolean { return; }

	// SEARCH

	/**
	 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
	 *
	 * @param {E} element - element to search for
	 * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
	 */
	indexOf(element: E): number { 
		return this._elementData.indexOf(element); 
	}
	/**
	 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
	 *
	 * @param {E} element - element to search for
	 * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
	 */
	lastIndexOf(element: E): number { 
		return this._elementData.lastIndexOf(element); 
	}

	// RANGE-VIEW

	/**
	 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. (If fromIndex and toIndex are equal, the returned list is empty.)
	 * The returned list is backed by this list, so non-structural changes in the returned list are reflected in this list, and vice-versa.
	 *
	 * @param {number} from - low endpoint (inclusive) of the subList
	 * @param {number} to - high endpoint (exclusive) of the subList
	 * @returns {List<E>} a view of the specified range within this list
	 */
	subList(from: number, to: number): List<E> { return; }

	/**
	 * Returns a string representation of this collection.
	 * The string representation consists of a list of the collection's elements in the order they are returned by its iterator, enclosed in square brackets ("[]").
	 * Adjacent elements are separated by the characters ", " (comma and space).
	 * Elements are manually converted to strings by `Object + ", "`.
	 *
	 * @returns {string} a string representation of this collection
	 */
	public toString(): string {
		// begin with a square bracket
		// seperate element by the characters ", "
		// end with a square bracket
		return  "[" + this._elementData.join(", ") + "]";
	}

}
