Polymer({
    is: 'editor-option',

    properties: {
        value: {
            type: String,
            value: ''
        },

        text: {
            type: String,
            value: ''
        },

        disabled: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        }
    },
});
