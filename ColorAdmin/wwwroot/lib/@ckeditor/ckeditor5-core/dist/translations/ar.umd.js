/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ar' ]: { dictionary, getPluralForm } } = {"ar":{"dictionary":{"Cancel":"إلغاء","Clear":"مسح","Remove color":"إزالة اللون","Restore default":"استعادة الافتراضي","Save":"حفظ","Show more items":"عرض المزيد من العناصر","%0 of %1":"%0 من %1","Cannot upload file:":"لا يمكن رفع الملف:","Rich Text Editor. Editing area: %0":"محرر النصوص المنسّقة. منطقة التحرير: %0","Insert with file manager":"إدخال مع مدير الملفات","Replace with file manager":"استبدال بمدير الملفات","Insert image with file manager":"إدراج صورة مع مدير الملفات","Replace image with file manager":"استبدال الصورة بمدير الملفات","File":"ملف","With file manager":"باستخدام مدير الملفات","Toggle caption off":"إخفاء التسمية التوضيحية","Toggle caption on":"عرض التسمية التوضيحية","Content editing keystrokes":"ضغطة المفاتيح لتحرير المحتوى","These keyboard shortcuts allow for quick access to content editing features.":"تسمح اختصارات لوحة المفاتيح هذه بالوصول سريعاً إلى ميزات تحرير المحتوى.","User interface and content navigation keystrokes":"واجهة المستخدم وضغطة المفاتيح للتنقل في المحتوى","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"استخدمْ ضغطة المفاتيح التالية للتنقل بشكل أكثر كفاءة في واجهة مستخدم CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"أغلقْ البالونات السياقية والقوائم المنسدلة ومربعات الحوار","Open the accessibility help dialog":"افتحْ مربع الحوار بشأن تعليمات إمكانية الوصول","Move focus between form fields (inputs, buttons, etc.)":"انقلْ التركيز بين حقول النموذج (المدخلات والأزرار وما إلى ذلك)","Move focus to the menu bar, navigate between menu bars":"انقلْ التركيز إلى شريط القائمة، وتَنقّلْ بين أشرطة القوائم","Move focus to the toolbar, navigate between toolbars":"انقلْ التركيز إلى شريط الأدوات، وتنقّلْ بين أشرطة الأدوات","Navigate through the toolbar or menu bar":"تنقّلْ عبر شريط الأدوات أو شريط القوائم","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"قم بتنفيذ الزر المركَّز حالياً، حيث أن تنفيذ الأزرار المتفاعلة مع محتوى المحرِّر يؤدي إلى إعادة التركيز إلى المحتوى.","Accept":"قبول"},getPluralForm(n){return n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;}}};
e[ 'ar' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ar' ].dictionary = Object.assign( e[ 'ar' ].dictionary, dictionary );
e[ 'ar' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
