// add bootstrap table to all tables
$(document).ready(function() { $('table').addClass('display table table-bordered table-striped table-hover table-sm table-responsive'); });

// homepage callout
var taglines=[
"CLC Striders, are a mixed running club based at <a href='https://www.google.co.uk/maps/place/Cheltenham,+Gloucestershire+GL50+2NX/@51.8996855,-2.0905991,17.26z/data=!4m2!3m1!1s0x48711b750b7cf72f:0x18adca3553c78bca?hl=en'>Cheltenham's Ladies College</a> in Gloucestershire.",
"CLC Striders have <a href='/pages/training'>training runs</a> on Monday and Wednesday, and Friday during track season.",
"CLC Striders host the <a href='/pages/staverton-10'>Staverton 10 mile</a> in January every year. Entries are now open for 2020.",	
]

var selection = document.querySelector('#tagline') !== null;
if(selection) {
  document.querySelector('#tagline').innerHTML = taglines[ Math.floor(Math.random()*taglines.length) ];
}

$('.display').DataTable({ "paging": false, "info": false });
