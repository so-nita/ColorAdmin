/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sr' ]: { dictionary, getPluralForm } } = {"sr":{"dictionary":{"Numbered List":"Листа са бројевима","Bulleted List":"Набрајане листе","To-do List":"Листа обавеза","Bulleted list styles toolbar":"Трака са алаткама за набрајане листе","Numbered list styles toolbar":"Трака са алаткама за листе са бројевима","Toggle the disc list style":"Укључите / искључите стил листе дискова","Toggle the circle list style":"Укључи / искључи стил листе кругова","Toggle the square list style":"Укључи / искључи стил листе квадрата","Toggle the decimal list style":"Укључи / искључи стил декадне листе","Toggle the decimal with leading zero list style":"Пребаци децимални знак са водећим стилом листе нула","Toggle the lower–roman list style":"Укључите/ искључите стил доње римске листе","Toggle the upper–roman list style":"Укључите / искључите стил горње римске листе","Toggle the lower–latin list style":"Укључите / искључите стил доње листе латинице","Toggle the upper–latin list style":"Укључите / искључите стил горње листе латинице","Disc":"Диск","Circle":"Круг","Square":"Квадрат","Decimal":"Децимала","Decimal with leading zero":"Децимала са нулом на почетку","Lower–roman":"Доњи - римски","Upper-roman":"Горњи - римски","Lower-latin":"Доњи - латински","Upper-latin":"Горњи - латински","List properties":"Наведите својства ","Start at":"Почети у","Invalid start index value.":"Nevažeća vrednost početnog indeksa.","Start index must be greater than 0.":"Почетни индекс мора бити већи од 0. ","Reversed order":"Обрнути редослед ","Keystrokes that can be used in a list":"Tasteri koji se mogu koristiti na listi","Increase list item indent":"Povećaj uvlačenje liste stavki","Decrease list item indent":"Smanji uvlačenje liste stavki","Entering a to-do list":"Unošenje liste obaveza","Leaving a to-do list":"Ostavljanje liste obaveza"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);}}};
e[ 'sr' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sr' ].dictionary = Object.assign( e[ 'sr' ].dictionary, dictionary );
e[ 'sr' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
