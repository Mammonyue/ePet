/**
 * Created by DELL on 2017/11/4.
 */
(function(){
  var styleNode = document.createElement("style");
  var width = document.documentElement.clientWidth/16;
  styleNode.innerHTML="html{font-size:"+width+"px!important}";
  document.head.appendChild(styleNode);
})();
