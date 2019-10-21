<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
$(document).ready(
    function() {
        $('.menu-toggle').click(function() {
            $('nav-panel-blog').toggleClass('active')
        })

        $('ul li').hover(function() {
            $(this).toggleClass('active');
        })
    }
)