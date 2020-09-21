# Range in NodeJS

## `range(start, stop, step)`

A module to simulate python's `range()`

Returns an array of numbers, from the sequence given

Takes three parameters:
- Start: The starting point of the function, defaults to 0
- Stop: The stopping point, **required**
- Step: The increment of the loop, defaults to 1

If all optional paramters are omitted, it will return an array counting up from zero to the specified endpoint

If the paramters given are invalid, an empty array will be returned
**Note:** To increment downwards, a negative step *must* be included

Use in loops:
```js
for (let i of range(5)) {
  return i
}
// > 0
// > 1
// > 2
// > 3
// > 4
```

Use independently:
```js
let arr = range(10, 0, -2)
// > [10, 8, 6, 4, 2]
```
