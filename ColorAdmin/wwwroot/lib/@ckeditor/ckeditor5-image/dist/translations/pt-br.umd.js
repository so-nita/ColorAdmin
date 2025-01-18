/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'pt-br' ]: { dictionary, getPluralForm } } = {"pt-br":{"dictionary":{"image widget":"Ferramenta de imagem","Wrap text":"Texto ao redor","Break text":"Quebrar texto","In line":"Na linha","Side image":"Imagem lateral","Full size image":"Imagem completa","Left aligned image":"Imagem alinhada à esquerda","Centered image":"Imagem centralizada","Right aligned image":"Imagem alinhada à direita","Change image text alternative":"Alterar texto alternativo da imagem","Text alternative":"Texto alternativo","Enter image caption":"Inserir legenda da imagem","Insert image":"Inserir imagem","Replace image":"Substituir imagem","Upload from computer":"Carregar do computador","Replace from computer":"Substituir do computador","Upload image from computer":"Carregar imagem do computador","Image from computer":"Imagem do computador","From computer":"A partir do computador","Replace image from computer":"Substituir a imagem do computador","Upload failed":"Falha ao enviar arquivo","Image toolbar":"Ferramentas de Imagem","Resize image":"Redimensionar imagem","Resize image to %0":"Redimensionar a imagem para %0","Resize image to the original size":"Redimensionar a imagem para o tamanho original","Resize image (in %0)":"Redimensionar imagem (em %0)","Original":"Original","Custom image size":"Tamanho de imagem personalizado","Custom":"Personalizar","Image resize list":"Lista de redimensionamento de imagem","Insert image via URL":"Inserir imagem via URL","Insert via URL":"Inserir através de URL","Image via URL":"Imagem através de URL","Via URL":"Através de URL","Update image URL":"Atualizar URL da imagem","Caption for the image":"Legenda para a imagem","Caption for image: %0":"Legenda da imagem: %0","The value must not be empty.":"O valor não deve estar vazio.","The value should be a plain number.":"O valor deve ser um número simples.","Uploading image":"Carregamento de imagem","Image upload complete":"Carregamento de imagem concluído","Error during image upload":"Erro durante o carregamento da imagem","Image":"Imagem"},getPluralForm(n){return (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;}}};
e[ 'pt-br' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pt-br' ].dictionary = Object.assign( e[ 'pt-br' ].dictionary, dictionary );
e[ 'pt-br' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
