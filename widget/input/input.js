Editor.registerWidget( 'editor-input', {
    is: 'editor-input',

    behaviors: [EditorUI.focusable, Polymer.IronValidatableBehavior],

    listeners: {
        'focused-changed': '_onFocusedChanged'
    },

    properties: {
        placeholder: {
            type: String,
            notify: true,
            value: ''
        },

        invalid: {
            type: Boolean,
            value: false
        },

        inputValue: {
            type: String,
            notify: true,
            value: '',
        },

        value: {
            type: String,
            notify: true,
            value: '',
            observer: '_valueChanged'
        },

        readonly: {
            type: Boolean,
            value: false,
            reflectToAttribute: true,
        },

    },

    ready: function () {
        this._initFocusable(this.$.input);
    },

    _valueChanged: function () {
        this.inputValue = this.value;
    },

    clear: function () {
        this.value = '';
        this.inputValue = '';
    },

    confirm: function () {
        this.value = this.inputValue;
    },

    cancel: function() {
        this.inputValue = this.value;
    },

    _onKeyDown: function (event) {
        // keydown 'enter'
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();

            if (this.value !== this.inputValue) {
                this.confirm();
            }
            this.setBlur();
            EditorUI.focusParent(this);
        }
        // keydown 'esc'
        else if (event.keyCode === 27) {
            event.preventDefault();
            event.stopPropagation();

            this.cancel();
            this.setBlur();
            EditorUI.focusParent(this);
        }
    },

    _onFocusedChanged: function ( event ) {
        if ( event.detail.value ) {
            this.value = this.inputValue;
        }
        else {
            this.confirm();
        }
    },

});
