/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-datetime-picker',
  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/moment/moment.js');
    app.import(app.bowerDirectory + '/rome/dist/rome.min.js');
    app.import(app.bowerDirectory + '/material-datetime-picker/dist/material-datetime-picker.js');
    app.import(app.bowerDirectory + '/material-datetime-picker/dist/material-datetime-picker.css');
    //app.import(app.bowerDirectory + '<path to dependency>.js');
  },
  contentFor(type,config){
    if(type=='head')
    {
      const headFile = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
                        `;
      return headFile;
    }
  }
};
