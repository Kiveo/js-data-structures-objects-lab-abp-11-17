// Write your solution in this file!
const driver = { name: "bob" };

function updateDriverWithKeyAndValue (driver, key, value) {
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}
  
