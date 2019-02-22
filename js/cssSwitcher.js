$(document).ready(function(){

    const setCSS = function(){
        const switcher = $('.switcher');
        const cssTags = $('style, [rel="stylesheet"]').not(switcher);
        const cssPath = '../css/switcher-css/';
        const trigger = $('.trigger');
        const empty = '';
        // set the css item in localStorage
        let cssIsSet = localStorage.getItem('chCSS');
        const changeCSS = function(){
            trigger.on('change',function(){
                // get current value from select
                const thisCSS = $(this).val();
                // if the default is selected remove
                // all css and style tags and clear localStorage
                if($(this).val() == 'default'){
                    switcher.attr('href', empty);
                    localStorage.clear();
                    // reload the page
                    location.reload();
                }else{
                    // otherwise set the new css value
                    // and store it in localStorage so
                    // we can retrieve it later
                    // remove all css and style tags
                    // except the switcher
                    cssTags.remove();
                    switcher.attr('href', cssPath + thisCSS + '.css');
                    localStorage.setItem('chCSS', thisCSS);
                }
            });
        }();
        // check if client has set css at runtime
        // if so populate the css value
        const chCSSSet = function(){
            if(cssIsSet !== null && typeof cssIsSet !== 'undefined' && cssIsSet !== ''){
                // remove all css and style tags
                cssTags.remove();
                switcher.attr('href', cssPath +cssIsSet+ '.css');
                trigger.find('option').each(function(){
                    if($(this).val() == cssIsSet){
                        $(this).attr('selected', 'selected');
                    }
                });
            }
        }();
    }();

});
