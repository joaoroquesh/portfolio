

/*
Bootstrap
*/

// Criar novo elemento link
var Bootstrap = document.createElement("link");

// Definir atributos do Bootstrap
Bootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
Bootstrap.type = "text/css";
Bootstrap.rel = "stylesheet";

// Anexar o Bootstrap ao head da página
document.getElementsByTagName("head")[0].appendChild(Bootstrap);


/* 

Fontes Google

*/
document.addEventListener('DOMContentLoaded', function() {
    var head = document.head;

    // Adiciona o link para o preconnect do Google Fonts
    var preconnectGoogleFonts = document.createElement("link");
    preconnectGoogleFonts.rel = "preconnect";
    preconnectGoogleFonts.href = "https://fonts.googleapis.com";
    head.appendChild(preconnectGoogleFonts);

    // Adiciona o link para o preconnect do Google Fonts Gstatic
    var preconnectGstatic = document.createElement("link");
    preconnectGstatic.rel = "preconnect";
    preconnectGstatic.href = "https://fonts.gstatic.com";
    preconnectGstatic.crossOrigin = "anonymous";
    head.appendChild(preconnectGstatic);

    // Adiciona o link da fonte Montserrat do Google Fonts
    var montserratFont = document.createElement("link");
    montserratFont.rel = "stylesheet";
    montserratFont.href = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";
    head.appendChild(montserratFont);
});


/* 

Favicon

*/


document.addEventListener('DOMContentLoaded', function() {
    var head = document.head;

    var icon1 = document.createElement("link");
    icon1.rel = "apple-touch-icon";
    icon1.sizes = "180x180";
    icon1.href = "favicon/apple-touch-icon.png";
    head.appendChild(icon1);

    var icon2 = document.createElement("link");
    icon2.rel = "icon";
    icon2.type = "image/png";
    icon2.sizes = "32x32";
    icon2.href = "favicon/favicon-32x32.png";
    head.appendChild(icon2);

    var icon3 = document.createElement("link");
    icon3.rel = "icon";
    icon3.type = "image/png";
    icon3.sizes = "16x16";
    icon3.href = "favicon/favicon-16x16.png";
    head.appendChild(icon3);
});




/*
Estilo Padrão
*/


// Criar novo elemento link
var styleBase = document.createElement("link");

// Definir atributos do styleBase
styleBase.href = "scss/style-page.css";
styleBase.type = "text/css";
styleBase.rel = "stylesheet";

// Anexar o styleBase ao head da página
document.getElementsByTagName("head")[0].appendChild(styleBase);

/*
Font
*/

// Criar novo elemento link
var styleFont = document.createElement("link");

// Definir atributos do styleFont
styleFont.href = "font/stylesheet.css";
styleFont.type = "text/css";
styleFont.rel = "stylesheet";

// Anexar o styleFont ao head da página
document.getElementsByTagName("head")[0].appendChild(styleFont);



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
  