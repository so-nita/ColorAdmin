/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sr-latn' ]: { dictionary, getPluralForm } } = {"sr-latn":{"dictionary":{"Cancel":"Odustani","Clear":"Obriši","Remove color":"Otkloni boju","Restore default":"Vrati podrazumevano","Save":"Sačuvaj","Show more items":"Prikaži još stavki","%0 of %1":"%0 of %1","Cannot upload file:":"Postavljanje fajla je neuspešno:","Rich Text Editor. Editing area: %0":"Uređivač bogatijeg teksta. Prostor za uređivanje:  %0","Insert with file manager":"","Replace with file manager":"","Insert image with file manager":"","Replace image with file manager":"","File":"","With file manager":"","Toggle caption off":"Isključivanje natpisa","Toggle caption on":"Uključite naslov","Content editing keystrokes":"","These keyboard shortcuts allow for quick access to content editing features.":"","User interface and content navigation keystrokes":"","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"","Close contextual balloons, dropdowns, and dialogs":"","Open the accessibility help dialog":"","Move focus between form fields (inputs, buttons, etc.)":"","Move focus to the menu bar, navigate between menu bars":"","Move focus to the toolbar, navigate between toolbars":"","Navigate through the toolbar or menu bar":"","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"","Accept":"Prihvati"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);}}};
e[ 'sr-latn' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sr-latn' ].dictionary = Object.assign( e[ 'sr-latn' ].dictionary, dictionary );
e[ 'sr-latn' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
