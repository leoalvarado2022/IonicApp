export const sortArrayByStringKey = (arr: Array<any>, key: string, order: string = 'asc'): Array<any> => {
  if (!arr) {
    return [];
  }
  // arr.sort((a, b) => {
  //   const wa = a[key].toUpperCase();
  //   const wb = b[key].toUpperCase();
  //   return (wa < wb) ? -1 : (wa > wb) ? 1 : 0;
  // });
  arr.sort((a, b) => order === 'asc'
    ? a[key].toLowerCase().localeCompare(b[key].toLowerCase())
    : b[key].toLowerCase().localeCompare(a[key].toLowerCase()));
  return arr;
};

export const sortArrayByNumberKey = (arr: Array<any>, key: string, order: string = 'asc'): Array<any> => {
  if (!arr) {
    return [];
  }
  arr.sort((a, b) => order === 'asc' ? a[key] - b[key] : b[key] - a[key]);
  return arr;
};
