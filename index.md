---
layout: default
title: Home
permalink: /
---
<section class="hero container">
  <div class="hero-content">
    <div class="eyebrow">[ CYBERSECURITY / PERSONAL LAB ]</div>
    <h1>niksetty’s<br><em>Cyber Lab</em><span class="tiny-star" aria-hidden="true">✧</span></h1>
    <p>Technical writeups, hands-on security labs, notes and everything I'm learning along the way.</p>
    <div class="hero-actions"><a class="btn primary" href="{{ '/writeups/' | relative_url }}">Explore writeups ↗</a><a class="btn secondary" href="{{ '/about/' | relative_url }}">About me</a></div>
    <span class="hero-note">learning in public, one lab at a time.</span>
  </div>
  <div class="hero-visual"><img src="{{ '/assets/img/chrome-shield.png' | relative_url }}" alt="Glossy pink glass padlock and shield with chrome orbit" width="420" height="254" decoding="async" fetchpriority="high"></div></section>
<section class="container home-recent"><div class="section-heading"><div><span class="eyebrow">[ THE ARCHIVE ]</span><h2>Latest additions<span class="pink-dot">.</span></h2></div><a href="{{ '/writeups/' | relative_url }}">All writeups ↗</a></div>
{% assign all_items = site.writeups | concat: site.notes | sort: 'date' | reverse %}
{% if all_items.size > 0 %}<div class="archive-grid">{% for post in all_items limit:3 %}{% include post-card.html post=post %}{% endfor %}</div>{% else %}<div class="empty-state"><span class="empty-symbol">✳</span><h3>Nothing published yet.</h3><p>This archive starts with my first real writeup or note.</p></div>{% endif %}</section>
