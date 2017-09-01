var thumbnails = document.getElementsByTagName("ytd-thumbnail");
for(var i=0; i<thumbnails.length; i++) {
  var thumbLink = thumbnails[i];
  var href = thumbLink.href;
  thumbLink.innerHTML = href;
}
