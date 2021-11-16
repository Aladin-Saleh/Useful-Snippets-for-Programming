function getUrlVars() {
    var url = '?' + window.location.href.split('?')[1]
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = decodeURIComponent(value);
    });
    return vars;
  }
