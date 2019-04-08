var slides = $('.slide');
var slidesDown = $('.slide-down');
slides.first().before(slides.last());
slidesDown.first().before(slidesDown.last());

$('button').on('click', function () {
    slides = $('.slide');
    var button = $(this);
    if (button.attr('id') == 'next') {
        slides.last().after(slides.first());
    }
    if (button.attr('id') == 'previous') {
        slides.first().before(slides.last());
    }
});

$('button').on('click', function () {
    slidesDown = $('.slide-down');
    var button = $(this);
    if (button.attr('id') == 'next') {
        slidesDown.last().after(slidesDown.first());
    }
    if (button.attr('id') == 'previous') {
        slidesDown.first().before(slidesDown.last());
    }
});