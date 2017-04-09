import Ember from 'ember';

export default Ember.Component.extend({
    dateToString(value){
        const formatToString = this.get('formatToString');
        let string = value.format('DD-MM-YYYY HH:mm');

        //allow hook to modify formatToString
                if(typeof formatToString === 'function')
                    string = formatToString(value);

        return string;

    },  
    init(){
        this._super(...arguments);

        const initialValue = this.get('value') || moment();

        const picker = new MaterialDatetimePicker({
            default: initialValue
        });

        this.set('selectedDateTime', this.dateToString(initialValue) );

        const onChange = this.get('onChange'),
              onOpen = this.get('onOpen'),
              onClose = this.get('onClose'),
              formatToString = this.get('formatToString');
        

            picker.on('submit', (value) => {                
                this.set('value' , value);
                this.set('selectedDateTime', this.dateToString(value) );

                if(typeof onChange === 'function')
                    onChange(value);
            });



        if(typeof onOpen === 'function' )
            picker.on('open', onOpen );
        if(typeof onClose === 'function' )
            picker.on('close', onClose );
        
        this.set('picker',picker);

    },
    actions : {
        datepickerShowPopUp(){
            this.get('picker').open();
        }
    }
});