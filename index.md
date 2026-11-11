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
  <div class="hero-visual" aria-hidden="true"><div class="graph-grid"></div><div class="halo"></div><div class="shield">◇</div><div class="lock"><div class="lock-loop"></div><div class="lock-face"><div class="keyhole"></div></div></div><div class="orbit"></div><div class="visual-label">PRIVATE NETWORK / PERSONAL LAB</div></div>
</section>
<section class="container"><div class="feature-grid">
 <a class="feature" href="{{ '/writeups/' | relative_url }}"><span class="feature-icon">⌘</span><h2>Writeups</h2><p>Technical breakdowns of the labs I actually complete.</p><span class="feature-arrow">↗</span></a>
 <a class="feature" href="{{ '/notes/' | relative_url }}"><span class="feature-icon">&gt;_</span><h2>Notes</h2><p>Commands, ideas and concepts worth keeping.</p><span class="feature-arrow">↗</span></a>
 <a class="feature" href="{{ '/achievements/' | relative_url }}"><span class="feature-icon">✳</span><h2>Achievements</h2><p>Milestones and certifications I earn.</p><span class="feature-arrow">↗</span></a>
</div></section>
<section class="container home-recent"><div class="section-heading"><div><span class="eyebrow">[ THE ARCHIVE ]</span><h2>Latest additions<span class="pink-dot">.</span></h2></div><a href="{{ '/writeups/' | relative_url }}">All writeups ↗</a></div>
{% assign all_items = site.writeups | concat: site.notes | sort: 'date' | reverse %}
{% if all_items.size > 0 %}<div class="archive-grid">{% for post in all_items limit:3 %}{% include post-card.html post=post %}{% endfor %}</div>{% else %}<div class="empty-state"><span class="empty-symbol">✳</span><h3>Nothing published yet.</h3><p>This archive starts with my first real writeup or note.</p></div>{% endif %}</section>
