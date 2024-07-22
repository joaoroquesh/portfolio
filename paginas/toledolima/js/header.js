/* 

Links

*/

var head = document.head;

    // Função para adicionar links genéricos ao cabeçalho
    function adicionarLink(href, rel, type, sizes) {
        var link = document.createElement('link');
        link.href = href;
        link.rel = rel;
        if (type) link.type = type;
        if (sizes) link.sizes = sizes;
        head.appendChild(link);
    }

// Adicionando o link do Bootstrap CSS
adicionarLink('libs/css/bootstrap.css', 'stylesheet');
adicionarLink('libs/css/aos.css', 'stylesheet');

// Adicionando pré-conexões para o Google Fonts
adicionarLink('https://fonts.googleapis.com', 'preconnect');
adicionarLink('https://fonts.gstatic.com', 'preconnect', null, null, true); // O terceiro argumento 'true' para crossorigin é opcional

// Adicionando o Google Fonts CSS
adicionarLink('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap', 'stylesheet');

// Adicionando folhas de estilo personalizadas
adicionarLink('font/stylesheet.css', 'stylesheet');
adicionarLink('scss/style-page.css', 'stylesheet');

// Adicionando o link canônico
adicionarLink('https://www.consultoriatl.com.br', 'canonical');

// Adicionando ícones de favoritos
adicionarLink('favicon/apple-touch-icon.png', 'apple-touch-icon', null, '180x180');
adicionarLink('favicon/favicon-32x32.png', 'icon', 'image/png', '32x32');
adicionarLink('favicon/favicon-16x16.png', 'icon', 'image/png', '16x16');


/* 

Meta tags

*/

// Criação de uma função para facilitar a adição de meta tags
function criarMetaTag(name, content, property) {
    var tag = document.createElement('meta');
    if (name) tag.setAttribute('name', name);
    if (property) tag.setAttribute('property', property);
    tag.setAttribute('content', content);
    head.appendChild(tag);
}
  
  
  // Adicionando as meta tags
  criarMetaTag(null, 'Toledo & Lima', 'og:site_name');
  criarMetaTag(null, 'Toledo & Lima', 'og:title');
  criarMetaTag(null, 'http://www.consultoriatl.com.br', 'og:url');
  criarMetaTag(null, 'http://www.consultoriatl.com.br/images/ogimage.jpg', 'og:image');
  criarMetaTag(null, 'image/jpeg', 'og:image:type');
  criarMetaTag(null, '400', 'og:image:width');
  criarMetaTag(null, '320', 'og:image:height');
  criarMetaTag(null, 'website', 'og:type');
  criarMetaTag('description', 'Somos uma consultoria especializada em Saúde Ocupacional e Segurança do Trabalho, dedicada a auxiliar as empresas do setor da saúde.');
  criarMetaTag('keywords', 'readaptação, insalubridade, periculosidade, previdência, retorno ao trabalho, horas extras, amamentação, demissão, demissão por justa causa, demissão sem justa causa, Portador de deficiência, Restrição e readaptação ao trabalho, Doenças relacionadas ao trabalho, PCD, Classificação Internacional de Funcionalidades - CIF.');
  criarMetaTag('robots', 'index, follow');
  criarMetaTag('author', 'João Roque');
  


/* 

Gtag

*/
// (function() {
//     // Carrega o script gtag.js
//     var gtagScript = document.createElement('script');
//     gtagScript.async = true;
//     gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-QTBP5720DJ";
    
//     document.head.appendChild(gtagScript);
  
//     // Insere a parte de configuração gtag
//     var inlineScript = document.createElement('script');
//     inlineScript.innerHTML = `
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
  
//       gtag('config', 'G-QTBP5720DJ');
//     `;
    
//     document.head.appendChild(inlineScript);
//   })();
  