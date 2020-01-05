/**
 * Add META tags (description, keywords, author) to page.
 */
var addMetaTags = function(text){
  // 
  if (text) text += ', ';
  var meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = text +
    'Карта-Навигатор с проекциями Proj4js. ' +
    'HTML5 Canvas+SVG векторная карта. ' +
    'HTML5 Canvas+SVG vector map with some Proj4js projections. ' +
    'Pure javascript and serverless';
  document.getElementsByTagName('head')[0].appendChild(meta);
  //
  var meta = document.createElement('meta');
  meta.name = 'keywords';
  meta.content = text +
    'карта, html5, canvas, svg, 2d, vector, proj4js, projection, javascript, dbcartajs, map';
  document.getElementsByTagName('head')[0].appendChild(meta);
  //
  var meta = document.createElement('meta');
  meta.name = 'author';
  meta.content = 'Grigoriy Eremin';
  document.getElementsByTagName('head')[0].appendChild(meta);
  //
  var meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = 'tDIIwt3nNSOeRwaSbOPKjWIuVvKvi6E7YCLV_WOnCqE';
  document.getElementsByTagName('head')[0].appendChild(meta);
  //
  var meta = document.createElement('meta');
  meta.name = 'yandex-verification';
  meta.content = 'b845d85dd8f33e59';
  document.getElementsByTagName('head')[0].appendChild(meta);
};