---
# Front matter comment to ensure Jekyll properly reads file.
---
$('#site_data_fixtures').DataTable({ 
Data : "{{ site.data.fixtures | jsonify }}",
columns: [
        { data: 0 },
        { data: 2 },
        { data: 3 },
        { data: 4 }
]} );