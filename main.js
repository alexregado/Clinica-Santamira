setInterval( () => {
    let mainw = $('main').width();
    let mright = $('main').css('margin-right');
    let mleft = $('main').css('margin-left');
    $('#rectangle').css('width', mainw);
    $('#rectangle').css('margin-left', mleft);
    $('#rectangle').css('margin-right', mright);
    // console.log(mainw, mright, mleft)
} ,100);