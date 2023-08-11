$(document).ready(function(){
    $('#fade-out').click(function(){
        $('#img1').fadeOut(2000)
    })
    
    $('#fade-in').click(function(){
        $('#img1').fadeIn(2000)
    })


    $('#last-div').hide();

    $('#btn3').click(function() {
        $('#last-div').slideDown('slow');
    });

    $('#btn2').click(function(){
        let lastLi = $('#icon_prefix').val();
        $('#guests').append('<li class="collection-item">'+ lastLi + '</li>');
    });

    $('#hide').click(function(){
        $('footer').hide(1000)
    })
    
    $('#show').click(function(){
        $('footer').show(1000)
    })

    $('h2').hover(function(){
        $('p').css('color','purple')
    })
    
    
    












});