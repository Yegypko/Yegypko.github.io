$(document).ready(function(){
    
    window.keyUpFunc = function(e) {
        if (e.keyCode == 27) { 
          $('.js-te-popup-close').click();
        }
    }
    
     $('.js-te-popup-close').click(function(){
        $('body').removeClass('te-body_popup-opened');
        var popup=$(".te-popup_opened"); 
        popup.fadeOut();
        $(document).unbind("keyup", keyUpFunc);
        return false;
    });
    

    $('body').on('click','.js-te-popup-show',function(){
        var popup_div_id = '#popup_' + $(this).data('popup-id');
        var $popup = $(popup_div_id);
        var desc = $(this).data('popup-description');
        
        $('body').addClass('te-body_popup-opened');
        
        if(desc && desc > '') {
            $popup.find('.te-popup__description').html(desc);
        }
        
        $popup.addClass('te-popup_opened').show();
        $popup.fadeIn('fast');

        $(document).keyup(keyUpFunc); 
        
        var target = $(this).attr('href');
        if(target && target.substring(0,1) == '#') {
            $popup.data('target', target);
        }

        if ($(this).data('show-callback') > '') {
            var funcname = 'window.' + $(this).data('show-callback') + 'Callback';
            eval(funcname + '($popup, $(this))');
        }
        return false;
    });
    
    
    var heightForTopSlide;
    if ($('.te-grid__topslide').parent().hasClass('te-grid__container-withoutmenu')) {
      heightForTopSlide = 0;
    } else {
      heightForTopSlide = 55;
    }
  
    $('.te-grid__topslide') .css({'height': (($(window).height() - heightForTopSlide))+'px'});
    $(window).resize(function(){
      $('.te-grid__topslide') .css({'height': (($(window).height() - heightForTopSlide))+'px'});
    });
    


    if(window.$isMobile == undefined) {
        window.$isMobile=false,
        isWidthLimited = $(window).width() <= 1024;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.$isMobile=true;
        }
    }

    window.showLoadIcon = function($form, text)
    {
        var mess = text || "идет отправка данных...";
        
        var data = "<div id='loadingbox' style='margin:5px 0px; font-size:14px; text-align:left;'>";
            data += "<img src='/img/ajax-loader.gif' style='margin-right: 10px;'>";
            data += ""+mess+"";
            data += "</div>";
        
        $form.find('#loadingbox').remove();
        var $button = $form.find('button[type=submit]');
        if($button.length != 1) {
            $button = $form.find('input[type=submit]');
        }
        if($button.length != 1) {
            alert('Error! Cannot find submit button');
            console.log('(loadicon) Cannot find submit button in form #'+$form.attr('id'));
            return false;
        }
        
        $button.hide().after(data);
    };

    window.hideLoadIcon = function() {
        var $loadbox = $('#loadingbox');
        $form = $loadbox.closest('form');
        $loadbox.remove();
        
        var $button = $form.find('button[type=submit]');
        if($button.length != 1) {
            $button = $form.find('input[type=submit]');
        }
        if($button.length != 1) {
            alert('Error! Cannot find submit button');
            console.log('(hideicon) Cannot find submit button in form #'+$form.attr('id'));
            return false;
        }
        
        $button.show();
    };
    
    
    $('.js-share').click(function(){
        var provider = $(this).data('socnet');
        var provider_url;
        var provider_w = 500;
        var provider_h = 500;
        var url = window.location.href;
        if(provider == 'fb') {
            provider_w = 600;
            provider_url = 'https://www.facebook.com/sharer.php?u=' + url;
        }
        if(provider == 'vk') {
            provider_url = 'https://vk.com/share.php?url=' + url;
        }
        if(provider == 'twitter') {
            provider_url = 'https://twitter.com/intent/tweet?status=' + url;
        }
        
        myWin=window.open(provider_url,"displayWindow","width="+provider_w+",height="+provider_h+",left="+parseInt(($(window).width()-provider_w)/2)+",top="+parseInt(($(window).height()-provider_h)/2)+",status=no,toolbar=no,menubar=no");
        return false;
    });


    $('body').on('click','.js-toggle',function(){
        var id = $(this).data('togglebox');
        var text = $(this).data('toggletext');
        var textold = $(this).text();
        var $box;
        
        if( id > '' && $(id).length > 0 ) {
            $box = $(id);
            if($box.css('display') == 'none') {
                $box.show();
                var off = $box.offset();
                window.scroll(0,off.top);
            } else {
                $box.hide();
            }

            if(text > '' ) {
                $(this).html(text);
                $(this).data('toggletext', textold);
            }
        }
        
        return false;
    });
/*
    $('#overlay').click(function(){
        var arDialogs = $('#overlay').data('arDialogs');
        if( arDialogs ){
            
            var winid = arDialogs.pop();
            $('#'+winid).hide();
            $('#'+winid).find('.b-dialog-message').html('').removeClass('dialog-result-true').removeClass('dialog-result-false');
            // если в диалоге несколько чередующихся форм, то переключить на начальную (атрибут initform контейнера)
            var containedblock = $('#'+winid).find('.b-dialog-content > div');
            var initform = containedblock.attr('initform');
            if (initform !== undefined) {
                containedblock.children('form').hide();
                containedblock.find('form#' + initform).show();
            }
        } else {
            arDialogs = [];
        }
    
        $('#overlay').data('arDialogs', arDialogs);
        
        if( arDialogs.length < 1 ){
            $('#overlay').hide();
        }
        return false;
    });
    
    $('.close').live('click',function(){
        $('#overlay').click();
    });

    $('.js-opendialog').click(function(){
        var dialogid, $dialog, $dialogwin, winid;
        var w = 0;
        var h = 0;
        var pos;
        var arDialogs = [];
        var $initlink = $(this);
        
        winid = 'dialog'+ ts;
        
        if( $(this).attr('title') ){
            title = $(this).attr('title');
        } else {
            title = 'Диалог';
        }
    
        // * код содержания диалога * /
        if( $(this).attr('dialogid') ){
            dialogid = $(this).attr('dialogid');
        } else {
            dialogid = 'layer';
        }
        $(this).attr('dialogid', dialogid);
    
        $dialog = $('#'+dialogid);
        $dialogwin = $dialog.closest('.b-dialog');
        
        // * если диалог ни разу не открывали, то создадим его * /
        if( $dialogwin.length == 0 ){
            var ts = new Date().getTime();
            var winid = 'dialog'+ ts;
            if (title > '') {
                $dialogwin = $('<div class="b-dialog" id="'+winid+'"><div class="b-dialog-header"><div class="b-dialog-title">'+title+'</div><div class="b-dialog-close close">&nbsp;</div></div><div class="b-dialog-message"></div><div class="b-dialog-content"></div></div>');
            } else {
                $dialogwin = $('<div class="b-dialog" id="'+winid+'"><div class="b-dialog-header"><div class="b-dialog-close close">&nbsp;</div></div><div class="b-dialog-message"></div><div class="b-dialog-content"></div></div>');
            }
            
            $dialogwin.appendTo('body');
            $dialogwin.find('.b-dialog-content').append( $dialog );
            $dialog.show();
        } else {
            var winid = $dialogwin.attr('id');
            if (title > '') {
                if ($dialogwin.find('.b-dialog-title').length) {
                    $dialogwin.find('.b-dialog-title').html(title);
                } else {
                    $dialogwin.find('.b-dialog-header').prepend('<div class="b-dialog-title">'+title+'</div>');
                }
            } else {
                $dialogwin.find('.b-dialog-title').remove();
            }
        }
    
        // добавить новый диалог в стек если его там еще нет
        arDialogs = $('#overlay').data('arDialogs');
        if( arDialogs == undefined ){
            arDialogs = [];
        } else {
            for (var i = 0; i < arDialogs.length; i++) {
                if (arDialogs[i] == winid) {
                    winid = '';
                    break;
                }
            }
        }
        if (winid > '') {
            arDialogs[arDialogs.length] = winid;
            $('#overlay').show().data('arDialogs', arDialogs);
        }
    
         // * объект которой инициализировал диалог * /
        $dialogwin.data('initlink', $initlink);
        
        if( $(this).attr('dialogclass') > '' ){
            $dialogwin.addClass( $(this).attr('dialogclass') );
        }
    
        if( $(this).attr('dialogh') > 0 ){
            h = $(this).attr('dialogh');
            $dialogwin.height( h );
        } else {
            h = $dialogwin.height();
        }
    
        if( $(this).attr('dialogw') > 0 ){
            w = $(this).attr('dialogw');
            $dialogwin.width( w );
        } else {
            w = $dialogwin.width();
        }
        
        if( $(this).attr('initscript') ){
            eval( $(this).attr('initscript')+'($dialogwin);' );
        }
        
        if( $('object').length > 0 ) {
            $('object').hide();
        }
        
        // * покажем затемнение и диалог * /
        $dialogwin.show();
        
        if( $dialogwin.data('afteropen') ){
            eval( $dialogwin.data('afteropen')+'($initlink)' );
        }
    
        // если нужно центрировать
        if( $(this).attr('centered') == 1) {
            pos = $dialogwin.offset();
            pos.left = ($(window).width()-w)/2;
            pos.top = ($(window).height()-h)/2+$(window).scrollTop();
            if( pos.top < 0 ){ pos.top = 0; }
            $dialogwin.offset( pos );
        } else {
            pos = $dialogwin.offset();
            if( $(window).scrollTop() > 248 ){
                pos.top = $(window).scrollTop();
            } else {
                pos.top = 248;
            }
            $dialogwin.offset( pos );
        }
    
        return false;
    });
*/


});