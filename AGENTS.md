# AGENTS.md

## Purpose

This repository is a simple reading-log system.

Its purpose is not to build a knowledge management framework, a digital garden for atomic notes, or a publishing pipeline for polished reviews.

Its purpose is only this:

- write reading entries in Obsidian
- keep them as plain Markdown
- publish them with Astro
- keep the whole system lightweight and easy to maintain

This repository should optimize for continuity, simplicity, and human writing.

---

## Core Principles

### 1. Simplicity over sophistication

Do not introduce complex workflows, multi-stage note pipelines, heavy metadata, or elaborate automation unless clearly required.

This repository is for straightforward reading records.

### 2. Human writing comes first

The primary actor is a human writing in Obsidian.

Agents, scripts, and tooling should support that workflow, not dominate it.

### 3. Markdown is the source of truth

Reading entries are written and stored as Markdown files inside the repository.

Obsidian is the input interface.
Astro is the publishing layer.

The Markdown files are the canonical source.

### 4. Keep publishing concerns lightweight

Astro should render and publish the entries, but publishing requirements should not make writing harder.

If a change makes note-writing more annoying, it is probably the wrong change.

### 5. Favor stable structure

Prefer a small, understandable directory structure and stable frontmatter.

Avoid frequent structural changes.

### 6. Preserve readability

Entries should remain easy to read as plain Markdown, even outside Obsidian or Astro.

---

## Repository Role

This repository has only two main jobs:

1. store reading entries written in Obsidian
2. publish them as a website with Astro

It is not necessary to separate capture / integration / abstraction / publication into many layers.

A simple structure is preferred.

---

## Recommended Directory Concept

A minimal structure like the following is preferred:

```text
.
├─ content/
│  └─ entries/
├─ templates/
├─ public/
└─ src/
```

Or, if Obsidian compatibility is prioritized more directly:

```text
.
├─ 01_Entries/
├─ 99_Assets/
├─ templates/
└─ site/
```

If the repository already has an established structure, do not change it casually.

---

## What a Reading Entry Should Contain

Each reading entry should be simple and human-friendly.

A reading entry may include:

- title of the book or text
- author
- date or reading period
- status (reading / finished / paused)
- short impression
- notable points
- favorite quotes if needed
- what felt important
- optional personal reflection

Do not force all fields to be filled.

The structure should help writing, not become overhead.

---

## Frontmatter Guidance

Use minimal and stable frontmatter.

Preferred fields:

```yaml
---
title: ""
author: ""
date: YYYY-MM-DD
status: reading
published: true
---
```

Optional fields may include:

- tags
- cover
- isbn
- started_at
- finished_at

Do not add fields unless they clearly improve writing, browsing, or publishing.

---

## Writing Guidance

When creating or editing reading entries:

- keep the writer's original voice where possible
- do not over-polish rough but meaningful notes
- do not transform a simple reading log into an essay unless explicitly requested
- prefer clarity over decoration
- prefer small improvements over total rewrites

This repository values readable records, not literary perfection.

---

## Obsidian Guidance

When working with Obsidian-oriented files:

- preserve wiki links if the repository uses them
- do not introduce plugins as a requirement unless explicitly requested
- keep notes usable with default Obsidian behavior as much as possible
- avoid workflows that depend on proprietary or fragile tooling

Obsidian should remain a comfortable writing environment.

---

## Astro Guidance

When working with Astro-related code:

- treat Astro as the publishing layer
- keep content loading simple and predictable
- prefer standard Astro content collections or straightforward Markdown loading
- avoid unnecessary complexity in build logic
- optimize for maintainability and easy deployment

The website exists to publish the reading entries, not to become a complex application.

---

## Linking and Organization Guidance

Use links only when they improve navigation.

Useful examples:

- link related entries by the same author
- link series or related books
- link an index page to individual entries

Avoid excessive cross-linking.

This is a reading log, not a dense knowledge graph.

---

## Tagging Guidance

Use tags sparingly.

Prefer a small number of durable categories over large taxonomies.

If tags do not clearly improve browsing, omit them.

---

## Templates Guidance

Templates should be minimal.

A good template helps the user start writing quickly.
A bad template creates pressure to fill unnecessary sections.

Prefer concise templates with only a few useful prompts.

---

## Change Management

Before proposing structural or workflow changes, evaluate them with these questions:

- does this make writing reading entries easier?
- does this keep Obsidian usage simple?
- does this keep Astro publishing maintainable?
- does this reduce long-term maintenance cost?
- will this still feel understandable in a few months?

If the answer is mostly no, do not make the change.

---

## Anti-Goals

Avoid pushing this repository toward:

- an over-engineered PKM system
- a heavy metadata system
- excessive templating
- forced atomization of notes
- unnecessary automation
- complex publishing workflows
- tool-centric design over human usability

---

## Safe Defaults

When uncertain, prefer the following defaults:

- keep the structure small
- keep Markdown readable
- keep frontmatter minimal
- keep Obsidian writing friction low
- keep Astro implementation simple
- make the smallest useful change
- prioritize maintainability over cleverness

---

## Final Standard

A good contribution to this repository does at least one of these:

- makes writing easier
- makes reading logs easier to browse
- makes publishing easier
- makes the system easier to maintain

A bad contribution makes the system look more advanced while making it harder to write, edit, publish, or understand.

When in doubt, choose the simpler path.
