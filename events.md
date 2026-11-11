---
layout: default
title: "Workshops & conferences"
permalink: /events/
---
<section class="container archive"><div class="eyebrow">[ THE COMMUNITY ]</div><h1>Workshops & conferences<span class="pink-dot">.</span></h1><p class="archive-intro">Workshops, meetups, conferences and sessions I attend, with my own reflections.</p>
{% assign posts = site.events | sort: 'date' | reverse %}
{% if posts.size > 0 %}<div class="archive-grid">{% for post in posts %}{% include post-card.html post=post %}{% endfor %}</div>{% else %}<div class="empty-state"><span class="empty-symbol" aria-hidden="true">✦</span><h2>No events added yet.</h2><p>I'll add entries here when I have something of my own to share.</p></div>{% endif %}</section>
