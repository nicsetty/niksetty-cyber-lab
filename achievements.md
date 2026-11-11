---
layout: default
title: "Achievements"
permalink: /achievements/
---
<section class="container archive"><div class="eyebrow">[ THE MILESTONES ]</div><h1>Achievements<span class="pink-dot">.</span></h1><p class="archive-intro">Certifications, challenges and meaningful milestones — documented as I earn them.</p>
{% assign posts = site.achievements | sort: 'date' | reverse %}
{% if posts.size > 0 %}<div class="archive-grid">{% for post in posts %}{% include post-card.html post=post %}{% endfor %}</div>{% else %}<div class="empty-state"><span class="empty-symbol" aria-hidden="true">✦</span><h2>No achievements added yet.</h2><p>I'll add entries here when I have something of my own to share.</p></div>{% endif %}</section>
