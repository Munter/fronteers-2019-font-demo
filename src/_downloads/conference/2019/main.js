(function() {
    "use strict";

    var i
    var antiSpamElements = document.querySelectorAll && document.querySelectorAll('.spam-check');
    if (antiSpamElements) {
     for (i = 0; i < antiSpamElements.length; i++) {
      antiSpamElements[i].value = 'Nee';
      antiSpamElements[i].parentNode.style.display = 'none';
     }
    }

    var menu = document.querySelector('#conference-menu h2'); 
    if (menu) {
        menu.addEventListener('click', function(e) {
            document.body.classList.toggle('menu');
            e.preventDefault();
            e.stopPropagation();
        })

        document.documentElement.className = 'menu-enabled';

        var background = document.querySelector('#conference-menu'); 
        if (background) {
            background.addEventListener('click', function(e) {
                if (document.body.classList.contains('menu')) {
                    document.body.classList.remove('menu');
                }
            })
        }
    }


    var header = document.querySelector(".page-index h1 + div.section > p");
    var paragraph = document.querySelector(".page-index h1 + div.section > p strong");

    if (paragraph && header) {
        paragraph.addEventListener('click', function(e) {
            var rect = header.getBoundingClientRect();

            var x = Math.round(rect.left + (rect.width / 2));
            var y = Math.round(rect.top + (rect.height / 2)) + document.documentElement.scrollTop;

            document.documentElement.style.transformOrigin = x + 'px ' + y + 'px';

            document.documentElement.animate([
                { transform: 'rotate(0deg)' }, 
                { transform: 'rotate(360deg)' }
            ], { 
                duration: 500
            });

            header.animate([
                { transform: 'rotate(360deg)' }, 
                { transform: 'rotate(0deg)' }
            ], { 
                duration: 500
            });
        });
    }

    
    var speakers = document.querySelectorAll('.page-speakers .section h3');

    speakers.forEach(speaker => {
        speaker.innerHTML = speaker.textContent + ('<span aria-hidden="true">' + speaker.textContent + '</span>').repeat(4);
    })

   })();