---
# Front matter comment to ensure Jekyll properly reads file.
---

var myData = "{{ site.data.fixtures | jsonify }}";
$('#site_data_fixtures').DataTable({ 
Data : myData,
columns: [
        { data: "Data" },
        { data: "Race" },
        { data: "Distance" },
        { data: "Terrain" }
    ]
});


$('.committee').DataTable({ "paging": false, "info": false});