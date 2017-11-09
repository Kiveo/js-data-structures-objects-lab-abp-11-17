// Write your solution in this file!
const driver = { name: "bob" };

function updateDriverWithKeyAndValue (driver, key, value) {
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value} );
}

function deleteFromDriverByKey(driver, key) {
  const newdriver = {...driver};
  var dk = delete newdriver.key;

  return newdriver;
}
