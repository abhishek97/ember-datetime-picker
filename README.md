# ember-datetime-picker

A simple addon for datetime picker component for ember
This README outlines the details of collaborating on this Ember addon.

## Usage

`{{ember-datetime-picker onChange=onChange  onClose=onClose onOpen=onOpen className='someBootstrapClass' }}`

* onChange will fire when users selects a date from the plugin and a moment object is recieved as argument to the function.
* formatToString will recieve selected date as moment object and exptected to return a string with some format, default is `DD-MM-YYYY HH:mm`



## Installation

* `git clone <repository-url>` this repository
* `cd ember-datetime-picker`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
