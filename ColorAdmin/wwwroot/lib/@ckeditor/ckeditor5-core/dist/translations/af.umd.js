/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'af' ]: { dictionary, getPluralForm } } = {"af":{"dictionary":{"Cancel":"Kanselleer","Clear":"","Remove color":"Verwyder kleur","Restore default":"Herstel verstek","Save":"Stoor","Show more items":"Wys meer items","%0 of %1":"%0 van %1","Cannot upload file:":"Lêer nie opgelaai nie:","Rich Text Editor. Editing area: %0":"","Insert with file manager":"","Replace with file manager":"","Insert image with file manager":"","Replace image with file manager":"","File":"","With file manager":"","Toggle caption off":"","Toggle caption on":"","Content editing keystrokes":"","These keyboard shortcuts allow for quick access to content editing features.":"","User interface and content navigation keystrokes":"","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"","Close contextual balloons, dropdowns, and dialogs":"","Open the accessibility help dialog":"","Move focus between form fields (inputs, buttons, etc.)":"","Move focus to the menu bar, navigate between menu bars":"","Move focus to the toolbar, navigate between toolbars":"","Navigate through the toolbar or menu bar":"","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"","Accept":""},getPluralForm(n){return (n != 1);}}};
e[ 'af' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'af' ].dictionary = Object.assign( e[ 'af' ].dictionary, dictionary );
e[ 'af' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
