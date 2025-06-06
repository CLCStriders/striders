---
title: CLC Striders 2024 Race Series
datatable: raceseries
layout: datatable
description: CLC Striders running club road race series
permalink: /raceseries
---

### Races in the series

- 25 February – Bourton 10km
- 29 March – Bristol Track Club 5km Day
- 28 April – Berkeley 10km
- 10 May – Bourton 1 Mile
- 29 May – Cleeve Cloud Cuckoo
- 24 July – Midsummer Open 1-Mile
- 7 August - Bugatti 10km
- 21 August – Haresfield 5km
- 1 September – Cheltenham Half
- 15 September - Angels 10km
- 27 October – Stroud Half
- 2 November – Glos League XC
- December – no event


### Rules

In order to participate in the series, you will need to enter and run in at least 6 of them. You can do more than 6 and if you do, your score will be based on your best 6 finishing positions in terms of other striders. 

You need to be a fully paid up member of the club at the time of running the 6 qualifying races so if you join part way through the year, you can still participate from the point you join club but you must run at least 6 races.  

You can compete if you are a second claim member as well as first claim. 

We will check the race results afterwards to see which striders have run so you will automatically be entered into the competition if you run any 6 or more of the above. 

The scoring will work as follows: 
If you finish first CLC man or woman you will get one point, 2nd gets 2 points, 3rd 3 points etc. your lowest 6 scores will be added together to get a total and the lowest total wins. 

This scoring system will be used for the following categories (Age as at 01/01/2024): 
* Open male and female 
* Vet 40-49
* Vet 50-59
* Vet 60-69
* Vet 70-79

At the end of the year, prizes will be awarded at the Christmas do. This will be for the first 3 overall men and first 3 overall women plus the winner male and female in each age category. If a vet is in the overall top 3 then the category prize will go to the next person in the age category. 

### Current Standings

{% assign sections = "MO FO MV40 FV40 MV50 FV50 MV60 FV60 MV70 FV70" | split: " " %}
{% assign category_labels = "MO:Male Open, FO:Female Open, MV40:Male Vet 40-49, FV40:Female Vet 40-49, MV50:Male Vet 50-59, FV50:Female Vet 50-59, MV60:Male Vet 60-69, FV60:Female Vet 60-69, MV70:Male Vet 70-79, FV70:Female Vet 70-79" | split: ", " %}

{% for section in sections %}
  
  {% assign section_id = "site_data_raceseries_" | append: section %}
  {% assign has_rows = false %}
  {% for entry in site.data.raceseries %}
    {% if entry.Category == section %}
      {% assign has_rows = true %}
      {% break %}
    {% endif %}
  {% endfor %}
  
  {% if has_rows %}
    {% for label_map in category_labels %}
      {% assign label_parts = label_map | split: ":" %}
      {% if label_parts[0] == section %}
<br/>
<h4>{{ label_parts[1] }}</h4>
      {% endif %}
    {% endfor %}
<table id="{{section_id}}" style="width:100%">
    <thead>
        <tr>
            <th data-field="Name">Name</th>
            <th data-field="bourton10k"><div class="vertical-text">Bourton 10k</div></th>
            <th data-field="bristol"><div class="vertical-text">Bristol 5k</div></th>
            <th data-field="berkeley"><div class="vertical-text">Berkeley 10k</div></th>
            <th data-field="bourton1mile"><div class="vertical-text">Bourton 1 Mile</div></th>
            <th data-field="cleeve"><div class="vertical-text">Cleeve Cloud Cuckoo</div></th>
            <th data-field="midsummer"><div class="vertical-text">Midsummer Open 1-Mile</div></th>
            <th data-field="haresfield"><div class="vertical-text">Haresfield 5k</div></th>
            <th data-field="bugatti"><div class="vertical-text">Bugatti 10k</div></th>
            <th data-field="cheltenhamhalf"><div class="vertical-text">Cheltenham Half</div></th>
            <th data-field="angels"><div class="vertical-text">Angels 10k</div></th>
            <th data-field="stroudhalf"><div class="vertical-text">Stroud Half</div></th>
            <th data-field="glosxc"><div class="vertical-text">Glos League XC</div></th>
            <th data-field="total">Total (best 6)</th>
            <th data-field="rank">Rank (min. 6 fixtures)</th>
            <th data-field="average">Average</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}
