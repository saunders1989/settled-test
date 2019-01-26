/**
 * updateObjectInArray() is a utility used to update an Object in an array
 * https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns#updating-an-item-in-an-array
 * @param { Array } array should be the array to update
 * @param { Object } action should contain an index and an updated Object
 * @return { Array }
 */
export function updateObjectInArray (array, action) {
  return array.map( (item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item
    };    
  });
}