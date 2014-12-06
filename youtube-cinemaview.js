javascript:( function () {
  var url = document.location.href
                    .replace('v=', '')
                    .replace('https://www.youtube.com/', '')
                    .replace('watch?', ''),
            tokenized = [],
            vid = '';

  //parse
  tokenized = url.split(/[\?&]/);
  if (tokenized.length === 1){ //assuming in first part of query string.
    vid = tokenized[0];
  } else {
    for (var j = 0; j < tokenized.length; j++){
      console.log('    ' + tokenized[j] + ' -- indexof ' + tokenized.indexOf('='));
      if(tokenized[j].indexOf('=') < 0 ) vid = tokenized[j];
    }
  }

  //construct and open
  var newUrl = 'https://www.youtube.com/embed/' + vid + '?rel=0&autoplay=1&showinfo=0&theme=dark&modestbranding=1&autohide=1;'
  window.open(newUrl,'detab','toolbar=0,titlebar=');
}
)();