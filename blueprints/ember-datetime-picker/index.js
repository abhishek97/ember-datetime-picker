module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject([
        { name : 'moment' , target : '^2.10.0'},
        { name : 'material-datetime-picker'},
        { name : 'rome'}
    ])
 /*   return this.addBowerPackageToProject('moment').then( ()=>{
        return this.addBowerPackageToProject('material-datetime-picker')
    }); // is a promise 
    */
  } 
};