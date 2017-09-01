//javascript:(function(){var url='//rawgithub.com/UnnamedMinecrafter/YT-Thumb2Iframe/master/javascript.js';document.head.appendChild(document.createElement('script')).src=url;})();

function main() {
  setTimeout(main,500);
  var thumbnails = document.getElementsByTagName("ytd-thumbnail");
  for(var i=0; i<thumbnails.length; i++) {
    var thumb = thumbnails[i];
    var thumbLink = thumb.getElementsByTagName("a")[0];
    if(thumbLink!=undefined) {
      var href = thumbLink.href;
      var width = thumb.width;
      var height = thumb.height;
      if(height==undefined) {
        height = 94;
      }

      var code = href.slice(32,href.length);

      var iframe = document.createElement("iframe");
      iframe.width = width;
      iframe.height = height;
      iframe.src = "https://www.youtube.com/embed/"+code;

      thumb.innerHTML = '<iframe src="https://www.youtube.com/embed/'+code+'" width="'+width+'" height="'+height+'" allowfullscreen></iframe>';
    }
  }
}
main();
