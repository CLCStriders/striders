---
title: CLC Striders 2025 Race Series
datatable: raceseries
layout: datatable
description: CLC Striders running club road race series
permalink: /raceseries2025
---

### Races in the series

- 26 February – Bourton 10km
- 6 April – Bristol Track Club 5km Day
- 27 April – 3000m Track County Champs
- 09 May – Bourton Mile
- 28 May – Cleeve Cloud Cuckoo
- 11 June – Cirencester Park 10k
- 7 July – Frampton 10k
- 23 July (TBC) – Midsummer Open 1-Mile
- 6 August - Bugatti 10km
- 7 September – Woodchester Trail Challenge
- 14 September - Angels 10km
- 26 October – Stroud Half

Participation Races:
- Gloucester XC Races 1/2/3 (if scheduled in 2025)
- Birmingham/Midland League XC - Races 1/2
- Sprint 6/12 Stage Road Relays
- Autumn 4/6 Stage Road Relays
- Cotswold Way Relay


### Rules

In order to participate in the series, you will need to enter and run in at least 5 of them. You can do more than 5 and if you do, your score will be based on your best 6 finishing positions in terms of other striders. 

You need to be a fully paid up member of the club at the time of running the 5 qualifying races so if you join part way through the year, you can still participate from the point you join club but you must run at least 5 races.  

You can compete if you are a second claim member as well as first claim. 

We will check the race results afterwards to see which striders have run so you will automatically be entered into the competition if you run any 6 or more of the above. 

The scoring will work as follows: 
If you finish first CLC man or woman you will get 10 points, 2nd gets 9 points, down to 1 point for 10th place and beyond. Your highest 6 scores will be added together to get a total and the highest total wins. 

This scoring system will be used for the following competitions: 
* Open male and female competition
* Age-graded competition

At the end of the year, prizes will be awarded at the Christmas do. This will be for the first 3 overall men and first 3 overall women plus the first 3 in the age-graded competition.

### Current Standings

{% assign sections = "MO FO" | split: " " %}
{% assign category_labels = "MO:Male Open, FO:Female Open" | split: ", " %}

{% for section in sections %}
  
  {% assign section_id = "site_data_raceseries2025_" | append: section %}
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
            <th data-field="countychamps"><div class="vertical-text">3k Track County Champs</div></th>
            <th data-field="bourton1mile"><div class="vertical-text">Bourton 1 Mile</div></th>
            <th data-field="cleeve"><div class="vertical-text">Cleeve Cloud Cuckoo</div></th>
            <th data-field="cirencester"><div class="vertical-text">Cirencester Park 10k</div></th>
            <th data-field="frampton"><div class="vertical-text">Frampton 10k</div></th>
            <th data-field="midsummer"><div class="vertical-text">Midsummer Open 1-Mile</div></th>
            <th data-field="bugatti"><div class="vertical-text">Bugatti 10k</div></th>
            <th data-field="woodchester"><div class="vertical-text">Woodchester Trail Challenge</div></th>
            <th data-field="angels"><div class="vertical-text">Angels 10k</div></th>
            <th data-field="stroud"><div class="vertical-text">Stroud Half</div></th>
            <th data-field="participationbonus"><div class="vertical-text">Participation bonus</div></th>
            <th data-field="total">Total (best 6)</th>
            <th data-field="rank">Rank (min. 6 fixtures)</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}
