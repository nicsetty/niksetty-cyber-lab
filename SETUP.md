# Publish an entry on niksetty.exe

From the repository’s `main` branch on GitHub, choose **Add file → Create new file**.
Use a short filename with lowercase words and hyphens, such as `_notes/linux-permissions.md`.
Choose the directory that matches your entry:

| Directory | Site section |
| --- | --- |
| `_writeups/` | Writeups |
| `_notes/` | Notes |
| `_achievements/` | Achievements |
| `_events/` | Workshops & conferences |

Start the file with YAML front matter. Replace the example values and write your entry below the second `---`.

```markdown
---
title: "My entry title"
description: "A short summary for the archive card."
date: YYYY-MM-DD
category: "Networking"
tags: [Linux, commands]
---

## What I learned

Add your Markdown here.
```

Use your actual date. Description, category, and tags are optional. Writeup category buttons recognize Networking, SOC, and TryHackMe. Other categories and uncategorized writeups appear under Other.

Use fenced blocks marked `bash` for commands and `text` for terminal output. Upload approved screenshots to `assets/img/` and reference them like this:

```markdown
![Screenshot description]({{ '/assets/img/my-screenshot.png' | relative_url }})
```

Commit to `main` to publish. GitHub Pages creates the article and updates its archive automatically. The three newest writeups and notes also appear on the homepage. Check **Actions → pages build and deployment** if the site has not updated after the commit.

Keep private drafts and screenshots off this public repository. For draft text you are comfortable exposing as source on GitHub, use `published: false` in the front matter to exclude it from the generated site and archive. Change it to `true` or remove that line to publish. Review screenshots and terminal output for private details, credentials, or flags before committing.

## Hosting

GitHub Pages builds from `main` and `/(root)`. The repository’s `CNAME` and Jekyll `url` point to `niksetty.xyz`. Keep `baseurl` empty for the custom domain.
