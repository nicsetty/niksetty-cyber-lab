# Niksetty Cyber Lab — setup and publishing

## Replace the previous website (once)

This ZIP is a complete replacement website, not a backend service. GitHub Pages and Jekyll automatically turn your Markdown into public pages.

1. Open Terminal and navigate to your EXISTING cloned repository, the directory containing `.git` (verify using `git rev-parse --show-toplevel`).
2. Make sure the branch is up to date before overwriting anything:

   git status
   git pull --rebase origin main

   If there are changes you haven't committed, commit or back them up first; don't run rebase while your working tree has uncommitted edits.

3. **Important:** remove the old `.nojekyll` file, if present. It would prevent Markdown publishing. Also remove old site HTML pages, the old writeups directory, old homepages, and any obsolete old CSS/JS if present. Keep your `.git` directory. This new ZIP replaces the old website.

   Example, from the verified repository root:

   rm -f .nojekyll index.html writeups.html notes.html about.html labs.html resources.html
   rm -rf writeups

4. Extract this ZIP and copy the **contents** to the repository root (not a nested directory). Example if ZIP is in Downloads:

   unzip -o ~/Downloads/niksetty-clean-github-pages.zip -d .

5. Verify `_config.yml`, `index.md`, `_layouts/`, `_writeups/`, `_notes/` and `assets/` are all at the repository ROOT.
6. Upload:

   git add -A
   git commit -m "Replace examples with clean Markdown-powered portfolio"
   git push origin main

7. GitHub repository Settings → Pages → Source: **Deploy from a branch** → `main` → `/(root)` → Save. This works with Jekyll; do not enable `.nojekyll`.
8. Visit https://nicsetty.github.io/niksetty-cyber-lab/ after successful publishing.

## Publish a writeup, entirely from GitHub

In GitHub open `_writeups/` → Add file → Create new file; name it `my-first-lab.md`. Paste this starter and replace every placeholder with your own work:

    ---
    title: "My first lab"
    description: "What I investigated and learned."
    date: 2026-11-10
    category: "Networking"
    tags: [OpenVPN, TryHackMe]
    ---

    ## Objective

    Describe the goal in your own words.

    ## My approach

    Document your methods, commands, and observations.

    ## Lessons learned

    Explain what you learned.

Then choose Commit changes. GitHub Pages regenerates the public website automatically. Your article will appear in Writeups and Latest additions. Use `category` values like `Networking`, `SOC`, `TryHackMe`, or `Other` for the filtering buttons.

## Publish a note

Same process but add a Markdown file to `_notes/` instead:

    ---
    title: "My note title"
    description: "A quick reference I wrote."
    date: 2026-11-10
    category: "Linux"
    tags: [commands]
    ---

    My own notes go here.

Notes show in Notes and Latest additions.

## Publish from Terminal or VS Code

Create or edit `.md` files in `_writeups/` or `_notes/`, then:

    git add -A
    git commit -m "Add my latest writeup"
    git pull --rebase origin main
    git push origin main

If rebase reports conflicts, resolve those before pushing.

## Screenshots

Put your own screenshots in `assets/img/`. Use this Markdown syntax in a writeup:

    ![Description]({{ '/assets/img/my-screenshot.png' | relative_url }})

The Jekyll liquid expression must be typed as shown. Avoid any passwords, API tokens, private keys, flags, or TryHackMe VPN `.ovpn` files in this public repository. Only publish walkthroughs when permitted by the challenge rules.

## Drafts

Files outside the GitHub repo stay private. You can keep unfinished drafts on your Mac and copy them into `_writeups/` only when ready. Don't commit sensitive personal notes or unpublished challenge flags.

## Why the site updates automatically

GitHub Pages builds Jekyll on each push to its configured branch. `collections` in `_config.yml` turn the `_writeups` and `_notes` Markdown files into article pages and dynamically generate the listings. No Python editor or server required.
