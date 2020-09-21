const range = function(start, stop, step = 1) {
  if (typeof stop === 'undefined') {
    stop = start
    start = 0
  }
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }
  let result = []
  for (let i = start; step>0 ? i<stop: i > stop; i+= step) {
    result.push(i);
  }
  return result
}
export default range
