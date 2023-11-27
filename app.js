$(function() {
     /* Nav Toggle on mobile
    =================================*/

    let navToggle = $('#navToggle');
    let nav = $('#nav');
    let navCatalog = $('#navCatalog')

    navToggle.on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        nav.toggleClass('show');
        navCatalog.toggleClass('show');
        
        $('body').toggleClass('no-scroll');
        
    });
});
