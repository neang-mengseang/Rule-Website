// Minimal JS: mobile nav toggle
document.addEventListener('DOMContentLoaded',function(){
  var nav=document.getElementById('siteNav');
  var btn=document.getElementById('navToggle');
  btn.addEventListener('click',function(){
    if(nav.style.display==='block'){nav.style.display=''}else{nav.style.display='block'}
  });
});
