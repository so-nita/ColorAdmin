/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'uk' ]: { dictionary, getPluralForm } } = {"uk":{"dictionary":{"Widget toolbar":"Панель інструментів віджетів","Insert paragraph before block":"Додати абзац перед блоком","Insert paragraph after block":"Додати абзац після блока","Press Enter to type after or press Shift + Enter to type before the widget":"Натисніть Enter, щоб друкувати після або натисніть Shift + Enter, щоб друкувати перед віджетом","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Натискання клавіш, які можна використовувати, коли вибрано віджет (наприклад: зображення, таблиця тощо)","Insert a new paragraph directly after a widget":"Вставити новий абзац безпосередньо після віджета","Insert a new paragraph directly before a widget":"Вставити новий абзац безпосередньо перед віджетом","Move the caret to allow typing directly before a widget":"Перемістіть курсор, щоб дозволити введення безпосередньо перед віджетом","Move the caret to allow typing directly after a widget":"Перемістіть курсор, щоб дозволити введення безпосередньо після віджета","Move focus from an editable area back to the parent widget":"Переміщення фокусу з області редагування назад до батьківського віджета"},getPluralForm(n){return (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);}}};
e[ 'uk' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'uk' ].dictionary = Object.assign( e[ 'uk' ].dictionary, dictionary );
e[ 'uk' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
