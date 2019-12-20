---
# Front matter comment to ensure Jekyll properly reads file.
---
$(document).ready(function () {
 $('#load_data').ready(function(){
     $.ajax({-- -
         # Front matter comment to ensure Jekyll properly reads file.
         ---
   url:"https://raw.githubusercontent.com/ChelseaStats/striders/master/_data/{{ page.source }}?v={{ site.cache }}",
   dataType:"text",
   success:function(data)
   {
    var row_data = data.split(/\r?\n|\r/);
    var table_data = '<table id="output_table_data" class="display table table-bordered table-striped table-hover table-sm .table-responsive">';
    for(var count = 0; count<row_data.length; count++)
    {
      if( count === 0 ) {
       table_data +='<thead>';
        var cell_data = row_data[count].split(",");
         table_data += '<tr>';
         for(var cell_count=0; cell_count<cell_data.length; cell_count++)
         {
          if(count === 0)
          {
           table_data += '<th data-field="'+cell_data[cell_count]+'">'+cell_data[cell_count]+'</th>';
          }
         }
         table_data += '</tr>';
       table_data +='</thead><tbody>';   
      }
      else {
         var cell_data = row_data[count].split(",");
         table_data += '<tr>';
         for(var cell_count=0; cell_count<cell_data.length; cell_count++)
         {
          if(count === 0)
          {
           table_data += '<th>'+cell_data[cell_count]+'</th>';
          }
          else
          {
            if(cell_data == "") 
            {
              table_data += '';
            }
            else {    
              table_data += '<td>'+cell_data[cell_count]+'</td>';
            }
          }
         }
         table_data += '</tr>';
      }
    }
    table_data += '</tbody></table>';
     
    $('#output_table_div').html(table_data);
   }
  });
 });
 
});