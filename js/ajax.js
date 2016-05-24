define(['text!../dust/item.html'], function (template) {
    return {
        render: function () {
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var jsonObj = JSON.parse(xhr.responseText);
                    dust.renderSource(template, jsonObj, function (err, out) {
                        document.getElementById('bodyRight').innerHTML = out;
                        var link = document.getElementsByClassName('togle-link');
                        console.log(link);
                        // link.onclick = function () {
                        //     var linkedTable = document.getElementsByClassName(link.getAttribute('data-table'));
                        //     console.log(linkedTable)
                        // }
                    });
                }
            };
            xhr.open("GET", "php/info.php", true);
            xhr.send();
        }
    }
})
