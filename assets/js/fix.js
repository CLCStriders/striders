---
# Front matter comment to ensure Jekyll properly reads file.
---


$('.committee').DataTable({ "paging": false, "info": false });


var myData = {{ site.data.fixtures | jsonify }};
$("#site_data_fixtures").DataTable({ 
Data : myData,
columns: [
        { data: "Date" },
        { data: "Race" },
        { data: "Distance" },
        { data: "Terrain" }
    ]
});


