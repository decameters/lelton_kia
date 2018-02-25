$(document).ready(readyNow);

function readyNow(){
console.log('JQ loaded');

$("a").hover(
    function() {
        $(this).find('img').attr("src", "lelton_kia2.jpg");
    },
    function() {
        $(this).find('img').attr("src", "lelton_kia1.jpg");
    }
    );

};