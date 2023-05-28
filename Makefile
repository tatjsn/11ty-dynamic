# https://www.gnu.org/software/make/manual/html_node/Wildcard-Function.html
# https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
# https://www.gnu.org/software/make/manual/make.html#Prerequisite-Types
out_css_dir := _site/css
out_static_dir := _site/static
njk := $(wildcard views/*.njk)
in_static := $(wildcard static/*.*)
out_static := $(addprefix _site/,$(in_static))
in_css := $(wildcard css/*.css)
out_css := $(addprefix _site/,$(in_css))

all: $(out_css) $(out_js)

$(out_static_dir)/%.js: static/%.js
	cp $< $@

$(out_css_dir)/%.css: css/%.css $(njk)
	npx postcss $< -r -o $@

$(out_js): | $(out_static_dir)

$(out_css): | $(out_css_dir)

$(out_static_dir):
	mkdir -p $(out_static_dir)

$(out_css_dir):
	mkdir -p $(out_css_dir)
