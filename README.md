## Stackit website

The website [https://stackit.us](https://stackit.us) was made using Jekyll.


## About Jekyll

For those unfamiliar with how Jekyll works, check out [https://jekyllrb.com/](https://jekyllrb.com/) for all the details, 
or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/), 
and [creating pages](https://jekyllrb.com/docs/pages/).


## Jekyll template

A Jekyll version of the "Alpha" theme by [HTML5 UP](https://html5up.net/).


## Setup environment

1. Install Ruby language - [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/)

After installing Ruby language, install bundler, jekyll, guard and sass:

1. `$ gem install bundler jekyll guard sass`

## Editing website

Before start content and layout changes, please run those commands in different terminal windows:

1. `$ sass --watch _sass/main.scss:assets/css/main.css` // to update css files
2. `$ jekyll serve --watch --incremental` // to serve the latest website version
3. Open browser in [http://127.0.0.1:4000](http://127.0.0.1:4000)

Files and folders reference:

* `_site/` - automaticly generated static files, website public files, we never change those files manually;
* `_includes/` - are partial files that are included in the website, like header, footer and etc.;
* `_layout/` - layout files that specify the html page;
* `_sass/` - has the sass files from where the css files are generated, usually visual changes are made on files below that folder;
* `_assets/` - has the css, fonts and javascript static files, usually we don't need to change it;
* `_images` - self explanatory;
* `*.md` - are MarkDown files that become `*.html` files in `_sites/` during the build phase;
* `*.html` - are special `*.html` files that accept a header in YAML and becomes basic `*.html` files in `_sites/` during the build phase;

## Deploying

Generating a build to upload to servers:

1. `$ JEKYLL_ENV=production jekyll build` // runs Jekyll build
2. `$ git status` // show file changes
3. `$ git add [filename]` // to add changes
3. `$ git commit -am '[Comment the changes here]'` // to commit changes
4. `$ git push origin master` // to push to source code repository

After pushing to BitBucket repository the [Netlify](http://netlify.com) service will start a new deploy in couple minutes.


## Credits

Original README from HTML5 UP:

```
Alpha by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A clean, super minimal responsive template geared towards startups, app devs, and other
dedicated folks working tirelessly to launch their products. Includes a landing page,
generic page, contact page, and a page with a whole mess of pre-styled elements (something
new I'm trying out). Sass sources are also included.

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		CSS3 Pie (css3pie.com)
		background-size polyfill (github.com/louisremi)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)

```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).
