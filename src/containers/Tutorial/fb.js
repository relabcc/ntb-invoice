const appId = 712303292292970;
// process.env.NODE_ENV === 'production'
//   ? 712303292292970
//   : 263643284098437;

/* eslint-disable */
export function fbInit() {
  window.fbAsyncInit = function() {
    FB.init({
      appId,
      xfbml: true,
      version: 'v2.11'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}
