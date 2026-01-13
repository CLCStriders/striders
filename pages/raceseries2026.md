---
title: CLC Striders 2026 Race Series
datatable: raceseries2026
layout: datatable
description: CLC Striders running club road race series
permalink: /raceseries2026
---

### Races in the series

- 18 January - **Linda Franks 5 Mile** - Road
- 22 February – **Bourton 10km** - Road
- 29th March - **Cleevewold** - Trail
- Early April - **Bristol & West 5km Race Day** - Road (Not yet confirmed as taking place, backup race is Hereford Couriers 5k on 15th April)
- Late April (TBC) – **3000m Track County Champs** - Track
- 8 May – **Bourton Mile** - Road
- 27 May – **Cleeve Cloud Cuckoo** - Trail
- 22 June – **Frampton 10k** - Road
- Weds (TBC) July - **Midsummer Open 5000m - Gloucester** - Track
- Any Saturday in July - **any parkrun***
- 5 August - **Bugatti 10km** - Road
- 28 August - **Meteor Mile** - Road
- 5 September - **Cranham Boundary Chase** - Road - _not age gradable_
- 25 October – [**Stroud Half**](https://www.stroudhalf.com/) - Road
- 1 April - 30th November - **Any Licensed Road Marathon**** - Road


`*` _Official published time used and ranked against others parkrunning in July_  
`**` _Official chip time used and ranked throughout the qualifying window_


Participation Races:
- Spring Midland Road Relays
- Autumn Midland Road Relays
- Glos League XC 1 in October
- Glos League XC 2 in November
- Midland/Birmingham League XC 1 in November

### Rules

Points will be based on finishing position versus club mates in each race, with 10 points for 1st place, 9 points for 2nd – down to 1 point for 10th place and beyond.

There will be three competitions within the series with prizes up for grabs for the top 3 in each of the following:
- Men's Open Competition – minimum 5 of 15 races to qualify, best 7 scores used
- Ladies Open Competition – minimum 5 of 15 races to qualify, best 7 scores used
- Age-Graded Competition – ranked by Age Grade % for non-trail events, minimum 5 of 12 races to qualify, best 6 scores used

We will check the race results afterwards to see which Striders have run, so you will automatically be entered into the series standings on our website and if you run at least 5 of the races you will qualify with a final ranking in the competition.

In addition there are a number of ‘Participation Races’ (listed above). You will earn 5 points for finishing for the club in the listed team events (Men’s and Women’s Open Competitions only).
These races will not count towards the minimum 5 qualifying races but will give you a chance to boost your score significantly!


In the event of a tie, finishing positions in all competitions will be decided by head-to-head results over the series.


At the end of the year, prizes will be awarded at the Christmas party.


### Previous results

2025: [Results](/raceseries2025)
2024: [Results](/raceseries)

### Current Standings

{% assign sections1 = "MO FO" | split: " " %}
{% assign category_labels1 = "MO:Male Open, FO:Female Open" | split: ", " %}

{% for section in sections1 %}
  
  {% assign section_id = "site_data_raceseries2026_" | append: section %}
  {% assign has_rows = false %}
  {% for entry in site.data.raceseries2026 %}
    {% if entry.Category == section %}
      {% assign has_rows = true %}
      {% break %}
    {% endif %}
  {% endfor %}
  
  {% if has_rows %}
    {% for label_map in category_labels1 %}
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
            <th data-field="lindafranks"><div class="vertical-text">Linda Franks</div></th>
            <th data-field="bourton10k"><div class="vertical-text">Bourton 10k</div></th>
            <th data-field="cleevewold"><div class="vertical-text">Cleevewold</div></th>
            <th data-field="bristol"><div class="vertical-text">Bristol 5k</div></th>
            <th data-field="countychamps"><div class="vertical-text">3k Track County Champs</div></th>
            <th data-field="bourtonmile"><div class="vertical-text">Bourton Mile</div></th>
            <th data-field="cloudcuckoo"><div class="vertical-text">Cleeve Cloud Cuckoo</div></th>
            <th data-field="frampton"><div class="vertical-text">Frampton 10k</div></th>
            <th data-field="midsummer"><div class="vertical-text">Midsummer Open 5000m</div></th>
            <th data-field="parkrun"><div class="vertical-text">parkrun</div></th>
            <th data-field="bugatti"><div class="vertical-text">Bugatti 10k</div></th>
            <th data-field="meteormile"><div class="vertical-text">Meteor Mile</div></th>
            <th data-field="cranham"><div class="vertical-text">Cranham Boundary Chase</div></th>
            <th data-field="stroud"><div class="vertical-text">Stroud Half</div></th>
            <th data-field="marathon"><div class="vertical-text">Marathon</div></th>
            <th data-field="participationbonus"><div class="vertical-text">Participation bonus</div></th>
            <th data-field="total">Total (best 7)</th>
            <th data-field="rank">Rank (min. 6 fixtures)</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}

{% assign sections2 = "AG" | split: " " %}
{% assign category_labels2 = "AG:Age graded" | split: ", " %}

{% for section in sections2 %}
  
  {% assign section_id2 = "site_data_raceseries2026_" | append: section %}
  {% assign has_rows2 = false %}
  {% for entry in site.data.raceseries2026 %}
    {% if entry.Category == section %}
      {% assign has_rows2 = true %}
      {% break %}
    {% endif %}
  {% endfor %}
  
  {% if has_rows2 %}
    {% for label_map in category_labels2 %}
      {% assign label_parts2 = label_map | split: ":" %}
      {% if label_parts2[0] == section %}
<br/>
<h4>{{ label_parts2[1] }}</h4>
      {% endif %}
    {% endfor %}
<table id="{{section_id2}}" style="width:100%">
    <thead>
        <tr>
            <th data-field="Name">Name</th>
            <th data-field="lindafranks"><div class="vertical-text">Linda Franks</div></th>
            <th data-field="bourton10k"><div class="vertical-text">Bourton 10k</div></th>
            <th data-field="bristol"><div class="vertical-text">Bristol 5k</div></th>
            <th data-field="countychamps"><div class="vertical-text">3k Track County Champs</div></th>
            <th data-field="bourtonmile"><div class="vertical-text">Bourton Mile</div></th>
            <th data-field="frampton"><div class="vertical-text">Frampton 10k</div></th>
            <th data-field="midsummer"><div class="vertical-text">Midsummer Open 5000m</div></th>
            <th data-field="parkrun"><div class="vertical-text">parkrun</div></th>
            <th data-field="bugatti"><div class="vertical-text">Bugatti 10k</div></th>
            <th data-field="meteormile"><div class="vertical-text">Meteor Mile</div></th>
            <th data-field="stroud"><div class="vertical-text">Stroud Half</div></th>
            <th data-field="marathon"><div class="vertical-text">Marathon</div></th>
            <th data-field="participationbonus"><div class="vertical-text">Participation bonus</div></th>
            <th data-field="total">Total (best 6)</th>
            <th data-field="rank">Rank (min. 5 fixtures)</th>
        </tr>
    </thead>
</table>
  {% endif %}
{% endfor %}
