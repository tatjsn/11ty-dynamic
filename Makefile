# https://www.gnu.org/software/make/manual/html_node/Wildcard-Function.html
# https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
# https://www.gnu.org/software/make/manual/make.html#Prerequisite-Types
island_dir := njk/island
island_njks := $(subst 11ty,njk,$(wildcard 11ty/island/*.njk))
island_jss := $(patsubst %.njk,%.js,$(island_njks))

$(island_dir)/%.njk: 11ty/island/%.njk
	cat $< | sed '1,/^---$$/d' > $@

$(island_dir)/%.js: $(island_dir)/%.njk
	cat $< | sed 's/\`/\\\`/g' | sed '1 s/^/export default \`/' | sed '$$ s/$$/\`;/' > $@

all: $(island_njks) $(island_jss)

$(island_njks): | $(island_dir)

$(island_dir):
	mkdir -p $(island_dir)
