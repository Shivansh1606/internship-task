$(document).ready(function() {
    // Menu toggle for mobile
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('showing');
    });

    // Slick slider initialization
    $('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

});
const recentList = document.getElementById('recent-list');
const postTitles = document.querySelectorAll('.main-content .post h2 a');
if (recentList && postTitles.length) {
recentList.innerHTML = '';
postTitles.forEach((a, idx) => {
if (idx < 6) { // limit items
const li = document.createElement('li');
const link = document.createElement('a');
link.href = a.getAttribute('href') || '#';
link.textContent = a.textContent.trim();
li.appendChild(link);
recentList.appendChild(li);
}
});
}

// Duplicate Quick Links from footer into "Follow Me" section (right sidebar)
const quickLinks = document.querySelectorAll('#quick-links li a');
const followLinks = document.getElementById('follow-links');
if (quickLinks.length && followLinks) {
followLinks.innerHTML = '';
quickLinks.forEach(a => {
const li = document.createElement('li');
const link = document.createElement('a');
link.href = a.getAttribute('href') || '#';
link.textContent = a.textContent.trim();
li.appendChild(link);
followLinks.appendChild(li);
});
}