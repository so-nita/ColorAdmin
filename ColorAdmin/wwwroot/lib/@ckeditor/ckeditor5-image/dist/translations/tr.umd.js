/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'tr' ]: { dictionary, getPluralForm } } = {"tr":{"dictionary":{"image widget":"resim aracı","Wrap text":"Metni kaydır","Break text":"Metni böl","In line":"Aynı hizada","Side image":"Yan Görsel","Full size image":"Tam Boyut Görsel","Left aligned image":"Sola hizalı görsel","Centered image":"Ortalanmış görsel","Right aligned image":"Sağa hizalı görsel","Change image text alternative":"Görsel alternatif yazısını değiştir","Text alternative":"Yazı alternatifi","Enter image caption":"Resim açıklaması gir","Insert image":"Görsel Ekle","Replace image":"Resmi değiştir","Upload from computer":"Bilgisayardan yükle","Replace from computer":"Bilgisayardan değiştir","Upload image from computer":"Bilgisayardan görüntü yükle","Image from computer":"Bilgisayardan görüntü","From computer":"Bilgisayardan","Replace image from computer":"Görüntüyü bilgisayardan değiştir","Upload failed":"Yükleme başarsız","Image toolbar":"Resim araç çubuğu","Resize image":"Resmi boyutlandır","Resize image to %0":"Resmi %0 ölçülerine boyutlandır","Resize image to the original size":"Resmi orijinal büyüklüğüne al","Resize image (in %0)":"Resmi yeniden boyutlandır (%0 olarak)","Original":"Orijinal","Custom image size":"Özel resim boyutu","Custom":"Özel","Image resize list":"Resim yeniden boyutlandırma listesi","Insert image via URL":"URL ile görüntü ekle","Insert via URL":"URL aracılığıyla ekle","Image via URL":"URL aracılığıyla görsel","Via URL":"URL'den","Update image URL":"Görüntü URL'sini güncelle","Caption for the image":"Resim için başlık","Caption for image: %0":"Resim için başlık: %0","The value must not be empty.":"Değer boş olmamalıdır.","The value should be a plain number.":"Değer düz bir sayı olmalıdır.","Uploading image":"Resim yükleniyor","Image upload complete":"Resim yüklemesi tamamlandı","Error during image upload":"Resim yükleme sırasında hata oluştu","Image":"Görsel"},getPluralForm(n){return (n > 1);}}};
e[ 'tr' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'tr' ].dictionary = Object.assign( e[ 'tr' ].dictionary, dictionary );
e[ 'tr' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
