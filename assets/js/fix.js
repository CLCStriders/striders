---
# Front matter comment to ensure Jekyll properly reads file.
---

//var myData = '{{ site.data.fixtures | jsonify }}';
//$('#site_data_fixtures').DataTable({ 
//Data : myData,
//columns: [
//        { data: "Data" },
//        { data: "Race" },
//        { data: "Distance" },
//        { data: "Terrain" }
//    ]
//});

var fixData1 = { "Rows": {{ site.data.fixtures }} };
console.log(fixData1);

var fixData = { "Rows": {{ site.data.fixtures | jsonify }} };
console.log(fixData);

$(document).ready(function () {
    $("#site_data_fixtures").DataTable({
        "ajax": fixData,
        "columns": [
            { data: "Date" },
            { data: "Race" },
            { data: "Distance" },
            { data: "Terrain" }
        ]
    });
});
