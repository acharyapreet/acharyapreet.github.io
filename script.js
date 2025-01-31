document.getElementById('scrollToPage2').addEventListener('click', function() {
    // Scroll smoothly to the second page
    document.getElementById('second_page').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('scrollToPage3').addEventListener('click', function() {
    // Scroll smoothly to the third page
    document.getElementById('third_page').scrollIntoView({
        behavior: 'smooth'
    });
});
