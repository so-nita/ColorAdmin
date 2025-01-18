/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'bn' ]: { dictionary, getPluralForm } } = {"bn":{"dictionary":{"Numbered List":"সংখ্যাযুক্ত তালিকা","Bulleted List":"বুলেটযুক্ত তালিকা","To-do List":"তালিকা তৈরি","Bulleted list styles toolbar":"বুলেটেড তালিকা স্টাইল টুলবার","Numbered list styles toolbar":"সংখ্যাযুক্ত তালিকা স্টাইল টুলবার","Toggle the disc list style":"ডিস্ক তালিকা স্টাইল টগল করুন","Toggle the circle list style":"বৃত্ত তালিকা স্টাইল টগল করুন","Toggle the square list style":"বর্গাকার তালিকা স্টাইল টগল করুন","Toggle the decimal list style":"দশমিক তালিকা স্টাইল টগল করুন","Toggle the decimal with leading zero list style":"অগ্রণী 0 তালিকা স্টাইল সহ দশমিক টগল করুন","Toggle the lower–roman list style":"নিম্ন-রোমান তালিকা স্টাইল টগল করুন","Toggle the upper–roman list style":"উপরের-রোমান তালিকা স্টাইল টগল করুন","Toggle the lower–latin list style":"নিম্ন-ল্যাটিন তালিকা স্টাইল টগল করুন","Toggle the upper–latin list style":"উপরের-ল্যাটিন তালিকা স্টাইল টগল করুন","Disc":"ডিস্ক","Circle":"বৃত্ত","Square":"বর্গক্ষেত্র","Decimal":"দশমিক","Decimal with leading zero":"অগ্রণী 0 সহ দশমিক ","Lower–roman":"নিম্ন-রোমান","Upper-roman":"উচ্চ-রোমান","Lower-latin":"নিম্ন-ল্যাটিন","Upper-latin":"উচ্চ-ল্যাটিন","List properties":"বৈশিষ্ট্য তালিকাভুক্ত করুন","Start at":"শুরু হবে","Invalid start index value.":"ইনভ্যালিড স্টার্ট ইনডেক্সের মান","Start index must be greater than 0.":"স্টার্ট ইনডেক্স অবশ্যই 0-এর বেশি হতে হবে।","Reversed order":"উল্টো ক্রম","Keystrokes that can be used in a list":"যে কীস্ট্রোকগুলি কোনো তালিকায় ব্যবহার করা যেতে পারে","Increase list item indent":"তালিকার আইটেমের ইন্ডেন্ট বাড়ান","Decrease list item indent":"তালিকার আইটেমের ইন্ডেন্ট কমান","Entering a to-do list":"একটি টু-ডু তালিকা প্রবেশ করা হচ্ছে","Leaving a to-do list":"একটি টু-ডু তালিকা ছেড়ে যাচ্ছে"},getPluralForm(n){return (n != 1);}}};
e[ 'bn' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'bn' ].dictionary = Object.assign( e[ 'bn' ].dictionary, dictionary );
e[ 'bn' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
