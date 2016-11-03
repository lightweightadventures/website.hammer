BUILDER
=======

css
---
- tighten up grid
- search.html

js
--
- paginate index.html, tag and cats
- add in functionality for published: true
- DRY up how builder saves
- Google Analytics code in scripts.html & site.json

framework
---------
- ensure there is a complete scss components framework with redundant parts ignored
- ensure there is a complete template components framework with redundant parts ignored
- ensure there is a complete js components framework with redundant parts ignored

housework
---------
- minimise code, lintjs, and optimise images, autoprefixer, hashnames
- create .min files (eg - nav-toggle.min.js) in build and lose in .build/assets/js 
- DRY up templates
- crossdomain.xml
- github hooks
- review humans.txt
- 404 url to read 404



**In ```<head>```**

- reduce overhead of typekit by editing kit
- which js to call in head; which in scripts include?
- which scripts to have as a local file; which to call from CDN?

<!-- icons -->
- understand which startup icons are needed cf rock-hammer
- include _head-icons.html, _head-ios.html, _head-ios-startup.html, _head-windows.html
- serve webfonts properly



**In head-meta.html**

- understand all other header options:
- https://github.com/h5bp/html5 boilerplate/blob/master/doc/extend.md
- include(?):
```
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
```
- add Twitter and Facebook metadata (OG)
- RSS feed (cf mixture RSS.liquid)



investigate
-----------
- browsersync.io
- contentful/ prismic for client interface
- vertical rhythm (use http://basehold.it for overlay)
- grid — neat/susy
- checkout http://breakpoint-sass.com to handle media queries
- travis CI (continuous integration and testing)
- npm favicons


DONE DONE DOOOOOOONE
====================
- copy over robots.txt, humans.txt, favicon.ico etc... to root of .build/
- abstract out cats-tags.html into partial
- build posts
- build index.html
- build archive.html
- build tag & category pages
- build pages.js into builder.js
- lose css yaml in pages and set in template from title
- rebuild using functional programming (perhaps async if better — build post & pages / cats & tags at same time)
- sort index & archives by date
- sort out layout
- make sure js, img and webfont folder copied over correctly
- http-server
- build pages & blog posts
- 404 page when lost
- watch/ livereload
- complete understanding of [npm as build tool]
- add port proxy to .pow instead of symlink (echo 9090 > ~/.pow/drevasvoyage)
- dates in format "09 Nov 2015"
- get script to conditionally load google.js on contact page
- build page for tag/ and category/ with archive list of tags and categories and posts in each
- add .site to tag/index.html and category/index.html
- get bottom panels to extend full-width and top gray bar to exit on /category/ and /tag/
- stylise tag/index.html & category/index.html with css not |capitalize
- get search working
- DRY up code (for tags/cats & save pages/posts especially)
- re-write builder in point-free functional style
- excerpt for search
- investigate browserify


LINKS
=====
[npm as build tool] http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/