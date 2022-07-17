const _binarySearch = (_arr, start, end, target) => {
  if (start > end) return undefined;
  const mid = parseInt(start + (end - start) / 2);
  if (_arr[mid] === target) return mid;
  if (_arr[mid] > target) return _binarySearch(_arr, start, mid - 1, target);
  return _binarySearch(_arr, mid + 1, end, target);
};

export default (_arr, element) => {
  try {
    return _binarySearch(_arr, 0, _arr.length - 1, element);
  } catch (e) {
    return e;
  }
};
