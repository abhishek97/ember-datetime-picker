/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-datetime-picker',

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
