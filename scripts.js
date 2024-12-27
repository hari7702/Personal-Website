// Code injected by live-server
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }

        // Wait for the DOM to fully load before adding event listeners
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM fully loaded and parsed');

            // Smooth scrolling for internal links
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth'
                            });
                            animateHighlight(target); // Animate the target section
                        } else {
                            console.error('Target not found for:', href);
                        }
                    } else {
                        console.log('Navigating to:', href);
                    }
                });
            });
        });

        // Animation on target section after scroll
        function animateHighlight(target) {
            target.style.transition = 'background-color 0.5s ease-in-out';
            target.style.backgroundColor = '#f0f8ff'; // Light blue highlight
            setTimeout(() => {
                target.style.backgroundColor = ''; // Reset background color
            }, 1000);
        }
    })();
} else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

// Add page transition animations
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const targetUrl = this.getAttribute('href');

            // Add fade-out class to body
            document.body.classList.add('fade-out');

            // Wait for the fade-out transition to complete before navigating
            setTimeout(() => {
                window.location.href = targetUrl; // Navigate to the new page
            }, 500); // Match the duration of the CSS transition
        });
    });

    // Add animation when the page is loaded
    window.addEventListener('load', function() {
        document.body.classList.add('fade-in');
    });
});