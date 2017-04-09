import Ember from 'ember';

export default Ember.Component.extend({
    init(){
        this._super(...arguments);
        const picker = new MaterialDatetimePicker();

        const onChange = this.get('onChange'),
              onOpen = this.get('onOpen'),
              onClose = this.get('onClose'),
              formatToString = this.get('formatToString');
        

            picker.on('submit', (value) => {
                
                let string = value.format('DD-MM-YYYY HH:mm');
                
                //allow hook to modify formatToString
                if(typeof formatToString === 'function')
                    string = formatToString(value);
                
                this.set('selectedDateTime', string);

                
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