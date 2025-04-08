---
title: CLC Striders 2025 Race Series
datatable: raceseries2025
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

Scoring for this year’s competition will work differently to last year.

Points will be based on finishing position versus club mates in each race, with 10 points for 1st place, 9 points for 2nd – down to 1 point for 10th place and beyond.

There will be three competitions within the series with prizes up for grabs for the top 3 in each of the following:
- Men's Open Competition – minimum 5 of 12 races to qualify, best 6 scores used
- Ladies Open Competition – minimum 5 of 12 races to qualify, best 6 scores used
- Age-Graded Competition – ranked by Age Grade % for non-trail events, minimum 5 of 10 races to qualify, best 5 scores used

We will check the race results afterwards to see which Striders have run, so you will automatically be entered into the series standings on our website. And if you run at least 5 of the races you will qualify with a final ranking in the competition.

Another change for 2025 is the addition of the above listed ‘Participation Races’. These races will not count towards the minimum 5 qualifying races but will give you a chance to boost your score significantly!

At the end of the year, prizes will be awarded at the Christmas party.


### Current Standings

{% assign sections1 = "MO FO" | split: " " %}
{% assign category_labels1 = "MO:Male Open, FO:Female Open" | split: ", " %}

{% for section in sections1 %}
  
  {% assign section_id = "site_data_raceseries2025_" | append: section %}
  {% assign has_rows = false %}
  {% for entry in site.data.raceseries2025 %}
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
            <th data-field="rank">Rank (min. 5 fixtures)</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}

{% assign sections2 = "AG" | split: " " %}
{% assign category_labels2 = "AG:Age graded" | split: ", " %}

{% for section in sections2 %}
  
  {% assign section_id = "site_data_raceseries2025_" | append: section %}
  {% assign has_rows = false %}
  {% for entry in site.data.raceseries2025 %}
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
            <th data-field="cirencester"><div class="vertical-text">Cirencester Park 10k</div></th>
            <th data-field="frampton"><div class="vertical-text">Frampton 10k</div></th>
            <th data-field="midsummer"><div class="vertical-text">Midsummer Open 1-Mile</div></th>
            <th data-field="bugatti"><div class="vertical-text">Bugatti 10k</div></th>
            <th data-field="angels"><div class="vertical-text">Angels 10k</div></th>
            <th data-field="stroud"><div class="vertical-text">Stroud Half</div></th>
            <th data-field="participationbonus"><div class="vertical-text">Participation bonus</div></th>
            <th data-field="total">Total (best 5)</th>
            <th data-field="rank">Rank (min. 5 fixtures)</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}
