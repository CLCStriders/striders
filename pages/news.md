---
layout: default
title:  News
description: CLC Stiders Running Club in Cheltenham Spa, Gloucestershire

---

<ul class="posts">
{% for post in site.posts | limit: 10 offset: 1 %}
  <li class="{{ post.popular }} {{ post.new }}">
    <a href="{{ post.url }}">{{ post.title }}</a> 
          <br/>
    <span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
    <span class="num-words"><em>{{ post.content | number_of_words }}</em> words</span>
    <span class="miles"><em>{% if post.tags != empty %}{% for tag in post.tags %}{{ tag }}{% endfor %}{% endif %}</em> total miles</span>
  </li>
  {% endfor %}
</ul>
