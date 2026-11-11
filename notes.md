---
layout: default
title: Notes
permalink: /notes/
---
<section class="container archive"><div class="eyebrow">[ PERSONAL KNOWLEDGE BASE ]</div><h1>Learning notes<span class="pink-dot">.</span></h1><p class="archive-intro">Concepts, command references, reminders, and ideas in progress. Written as I learn.</p>{% assign posts = site.notes | sort: 'date' | reverse %}{% if posts.size > 0 %}<div class="filter-toolbar"><div class="filter-group"><span class="eyebrow">NOTES / {{ posts.size }}</span></div><input type="search" data-search-input placeholder="Search notes…" aria-label="Search notes"></div><div class="archive-grid" data-post-grid>{% for post in posts %}{% include post-card.html post=post %}{% endfor %}</div><p class="filter-empty" data-filter-empty hidden>No matching notes.</p>{% else %}<div class="empty-state"><span class="empty-symbol" aria-hidden="true">✦</span><h2>No notes yet.</h2><p>My notes will show up here when I add my first Markdown file to GitHub.</p></div>{% endif %}</section>
