$(document).ready(readyNow);

function readyNow(){
console.log('JQ loaded');

$("a").hover(
    function() {
        $(this).find('img').attr("src", "kia_2_final.jpg");
    },
    function() {
        $(this).find('img').attr("src", "kia_1_final.jpg");
    }
    );
};