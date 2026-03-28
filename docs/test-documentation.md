# Tests

### Description

In this document I have written an overview of all the unit tests I conducted on the provided library. Each part will include test scenarios, results of the tests and any additional notes or issues if there were any.

### List of files I tested

- Files I tested:
    - add.js
    - at.js
    - capitalize.js
    - castArray.js
    - ceil.js
    - countBy.js
    - difference.js
    - divide.js
    - drop.js
    - endsWith.js
    - eq.js
    - every.js
    - filter.js
    - get.js
    - isArgument.js
    - isBoolean.js
    - isDate.js
    - isEmpty.js
    - isLength.js
    - isObject.js
    - isObjectLike.js
    - isSymbol.js
    - isTypedArray.js
    - map.js
    - slice.js
    - upperFirst.js
- Files I didn't test:
    - camelCase.js
    - chunk.js
    - clamp.js
    - compact.js
    - defaultTo.js
    - defaultToAny.js
    - isArrayLike.js
    - isArrayLikeObjects.js
    - isBuffer.js
    - keys.js
    - memoize.js
    - reduce.js
    - toFinite.js
    - toNumber.js
    - toString.js
    - words.js

## add.js

**Tests**

- Two positive numbers
- Two negative numbers
- One positive and one negative number
- A positive number and zero
- Two numbers as strings

**Results**

- First four tests passed.
- Adding two numbers as strings returned the string "23" instead of the number 5.

## at.js

**Tests** 

- Access elements at index 

**Results**

- The test passed.

## capitalize.js

**Tests**

- The string "hello" and "Hello"
- The string "123"

**Results**

- Both tests passed.

## castArray.js

**Tests**

- Wrap non-array values
- Returns an array as-is
- Handles an undefined value

**Results**

- All tests passed.

## ceil.js

**Tests**

- Ceils a positive value
- Ceils a negative value

**Results**

- Both tests passed.

## countBy.js

**Tests**

- Counts elements by given function (Math)

**Results**

- The test passed.

## difference.js

**Tests**

- Returns elements from one list that isn't in the other

**Results**

- The test passed.

## divide.js

**Tests**

- Divide 6 by 3
- Divide by 0
- Divide the string "20" by 2

**Results**

- None of the tests passed.

**Issues**

Every value I test results in 1, there's clearly an error in the file. Dividing a value by zero worked some times and didn't other times, I found that interresting.

## drop.js

**Tests**

- Drops first value from a list
- Drops specified amount of values from the list
- Works on a longer list as well

**Results**

- All tests passed.

## endsWith.js

**Tests**

- Check if the string "stop" ends with "p" (true).
- Check if the string "stop" ends with "asdfasdfasdf" (false).

**Results**

- Both tests passed.

## eq.js

**Tests**

- Compares if 1 and 1 are equal values
- Compares if 1 and the string "1" are equal values
- Compares if non-values are equal values

**Results**

- All tests passed.

## every.js

**Tests**

- Testing all true values
- Testing one false value
- Testing an empty array

**Results**

- All tests passed.

## filter.js

**Tests**

- Filters out inactive users (active: false)

**Results**

- The test passed.

## get.js

**Tests**

- Get using string path
- Get using array path
- Get using default value

**Results**

- All tests passed.

## isArgument.js

**Tests**

- Detects arguments object
- Returns false if detects an array

**Results**

- All tests passed.

## isBoolean.js

**Tests**

- Boolean primitives (True and False)
- Non-Boolean values (undefined, "true")
- Boolean objects

**Results**

- All tests passed.

## isDate.js

**Tests**

- Date object returns true
- String returns false

**Results**

- Both tests passed.

## isEmpty.js

**Tests**

- Null and primitives
- Arrays
- Strings
- Objects

**Results**

- All tests passed.

## isLength.js

**Tests**

- Do valid lenghts work
- Do invalid lenghts work

**Results**

- Both tests passed.

## isObject.js

**Tests**

- Objects and arrays
- Functions
- Null and primitives

**Results**

- All tests passed.

## isObjectLike.js

**Tests**

- Objects and arrays
- Null and primitives

**Results**

- All tests passed.

## isSymbol.js

**Tests**

- Symbol primitive
- Non-symbol values

**Results**

- All tests passed.

## isTypedArray.js

**Tests**

- Typed arrays
- Non-typed arrays

**Results**

- Both tests passed.