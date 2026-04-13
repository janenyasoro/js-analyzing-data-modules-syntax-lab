//import datejs
require("datejs");

//combine multiple username arrays into a single merged array
function combineUsers(...args){
  const combinedObject = {
    users: []
  };
  //loop through args and merge arrays using spread operator
  for (let i = 0; i < args.length; i++){
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }
  //adding todays date using datejs
  combinedObject.merge_date = new Date().toString("M/d/yyyy");
  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};