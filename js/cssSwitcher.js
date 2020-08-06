jQuery(document).ready(function(){

    let $ = jQuery;
    const setCSS = function(){
        const body = $('body');
        let index = false;
        if(body.hasClass('home') || body.hasClass('page-id-811')) {
            index = true;
        }
        const core = $('#core_css-css');
        const switcher = $('.switcher');
        const cssTags = $('style, [rel="stylesheet"]').not(switcher).not(core);
        const cssPath = '../css/switcher-css/';
        //const cssPath = '/wp-content/themes/typology/assets/css/switcher-css/';
        const trigger = $('.cssSwitchTrigger');
        const empty = '';
        let thisCSS;
        // set the css item in localStorage
        let cssIsSet = localStorage.getItem('chCSS');
        if(!index){
            const changeCSS = function(){
                trigger.on('change',function(){
                    // get current value from select
                    thisCSS = $(this).val();
                    // if the default is selected remove
                    // all css and style tags and clear localStorage
                    if($(this).val() == 'default'){
                        resetAllCSS();
                        reloadDoc();
                    }else if($(this).find('option:selected').data('css')){
                        inheritCSS();
                        setCSSVal();
                        reloadDoc();
                    }else{
                        // otherwise set the new css value
                        // and store it in localStorage so
                        // we can retrieve it later
                        // remove all css and style tags
                        // except the switcher
                        setSwitcherCSS();
                        setCSSVal();
                    }
                });
            }();

            const setSwitcherCSS = function(){
                cssTags.remove();
                switcher.attr('href', cssPath + thisCSS + '.css');
            };

            const resetAllCSS = function() {
                switcher.attr('href', empty);
                localStorage.clear();
            };

            const inheritCSS = function() {
                switcher.attr('href', cssPath + thisCSS + '.css');
            }

            const reloadDoc = function(){
                // reload the page
                location.reload();
            };

            const setCSSVal = function(){
                localStorage.setItem('chCSS', thisCSS);
            };

            // check if client has set css at runtime
            // if so populate the css value
            const chCSSSet = function(){
                if(cssIsSet !== null && typeof cssIsSet !== 'undefined' && cssIsSet !== ''){
                    trigger.find('option').each(function(){
                        if($(this).data('css')){
                            inheritCSS();
                            console.log('Run inherit css function');
                        }else{
                            setSwitcherCSS();
                        }
                        $(this).attr('selected', 'selected');
                    });
                }
            }();
        }else{
            return;
        }
    }();

});
