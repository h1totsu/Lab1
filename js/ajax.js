define(['text!../dust/item.html'], function (template) {
    return {
        render: function () {
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var jsonObj = JSON.parse(xhr.responseText);
                    dust.renderSource(template, jsonObj, function (err, out) {

                        document.getElementById('bodyRight').innerHTML = out;

                        var links = document.getElementsByClassName('togle-link');

                        Array.prototype.forEach.call(links, function(link) {
                            link.addEventListener('click', function () {
                                var table = document.getElementsByClassName(link.getAttribute('data-table'));
                                Array.prototype.forEach.call(links, function(tb) {
                                    console.log(tb.getAttribute('display'));
                                })
                            }, false);
                        })
                    });
                }
            };
            xhr.open("GET", "php/info.php", true);
            xhr.send();
        }
    }
})
