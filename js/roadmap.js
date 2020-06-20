$('#blueline, #redline').css({
    'width': '100%',
    'height': '5%',
    'margin-top': '5%',
    'margin-bottom': '5%'
});
$('[class$=dot]').css({
    'width':'50%',
    'margin-left':'8%',
    'opacity': '0'
}).hover(function () {
    $(this).animate({'width':'100%', 'margin-left':'-10%'})
}, function () {
    $(this).animate({'width':'50%', 'margin-left':'8%'})
})
$('.date').next().css({
    'width': '100%',
    'height': '72%',
    'font-family': '"Noto Sans KR", sans-serif',
    'font-weight': 'bold',
    'color': '#505152',
    'font-size': '50%',
    'padding': '1% 2%'
});
$('.date:odd').next().css('text-align', 'right');
$('.date:even').css('color','#1BB9D7');
$('.date:odd').css({
    'color':'#EF5B50',
    'text-align': 'right'
});
// animate
$('#blackline').animate({
  height: "86%",
}, 1500 );

$(function () {
    // hover시 글자 크기 커지기
    let dot = $('[class$=dot]');
    let date = $('.date');
    let description = $('.date').next();
    
    for(let i=0; i<dot.length; i++){
        dot.eq(i).hover(function () {
            date.eq(i).animate({'font-size': '24px'});
            description.eq(i).animate({'font-size': '100%'});
        }, function () {
            date.eq(i).animate({'font-size': '12px'});
            description.eq(i).animate({'font-size': '5%'});
        })
    }

    // dot 차례대로 나타나기
    let showTime = 500;
    let dotArr = $('[class$=dot]');
    $(dotArr.eq(0)).animate({
        opacity:'1'
    }, showTime, function () {
        $(dotArr.eq(1)).animate({
            opacity: '1'
        }, showTime, function () {
            $(dotArr.eq(2)).animate({
                opacity: '1'
            }, showTime, function () {
                $(dotArr.eq(3)).animate({
                    opacity: '1'
                }, showTime, function () {
                    $(dotArr.eq(4)).animate({
                        opacity: '1'
                    }, showTime)
                })
            })
        })
    })
    // 순서대로 마진 늘리기
    let i=0;
    $('.bluedot').each(function () {
        $(this).css('margin-top', i+'px');
        i += 392;
    })
    i = 196;
    $('.reddot').each(function () {
        $(this).css('margin-top', i+'px');
        i += 392;
    })

    let j = 0;
    $('.content:even').each(function () {
        $(this).css({
            'margin-left': '52%',
            'margin-top': j+'%'
        })
        j += 47;
    })
    j = 24;
    $('.content:odd').each(function () {
        $(this).css({
            'margin-left': '4%',
            'margin-top': j+'%'
        })
        j += 48;
    })
})