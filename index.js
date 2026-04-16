const datejs = require('datejs');

function combineUsers(...args) {
  // Initialize object with users array
  const combinedObject = {
    users: []
  };
  
  // Merge ALL arrays using flat() - matches exact test expectations
  combinedObject.users = args.flat();
  
  // Add today's date in EXACT format test expects: "M/d/yyyy"
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  
  return combinedObject;
}

module.exports = { combineUsers };
