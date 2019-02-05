$(document).ready(function(){

      const common = $('.common');
      const switcher = $('.switcher');
      const trigger = $('select');
      const empty = '';
      // set the css item in localStorage
      let cssIsSet = localStorage.getItem('chCSS');
      const changeCSS = function(){
          trigger.on('change',function(){
              // get current value from select
              const thisCSS = $(this).val();
              // if the default is selected reset
              // all css values and clear localStorage
              if($(this).val() == 'default'){
                  uncomment(common);
                  switcher.attr('href', empty);
                  localStorage.clear();
              }else{
                  // otherwise set the new css value
                  // and store it in localStorage so
                  // we can retrieve it later
                  uncomment(common);
                  comment(common);
                  switcher.attr('href', 'css/' +thisCSS+ '.css');
                  localStorage.setItem('chCSS', thisCSS);
              }
          });
      }();
      // wrap html in comment function
      function comment(element){
      	element.html('<!--' + element.html() + '-->')
      };
      // unwrap html from comment function
      function uncomment(element){
        element.html(element.html().replace('<!--','').replace('-->',''))
      };
      // check if client has set css at runtime
      // if so populate the css value
      const chCSSSet = function(){
          if(cssIsSet !== null && typeof cssIsSet !== 'undefined' && cssIsSet !== ''){
              comment(common);
              switcher.attr('href', 'css/' +cssIsSet+ '.css');
              trigger.find('option').each(function(){
                  if($(this).val() == cssIsSet){
                      $(this).attr('selected', 'selected');
                  }
              });
          }
      }();
});
