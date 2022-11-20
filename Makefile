# https://www.gnu.org/software/make/manual/html_node/Wildcard-Function.html
# https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
# https://www.gnu.org/software/make/manual/make.html#Prerequisite-Types
dir := njk/island
njks := $(subst 11ty,njk,$(wildcard 11ty/*.njk) $(wildcard 11ty/*/*.njk))
jss := $(patsubst %.njk,%.js,$(njks))

njk/%.njk: 11ty/%.njk
	cat $< | sed '1,/^---$$/d' > $@

%.js: %.njk
	cat $< | sed 's/\`/\\\`/g' | sed '1 s/^/export default \`/' | sed '$$ s/$$/\`;/' > $@

all: $(jss)

$(njks): | $(dir)

$(dir):
	mkdir -p $(dir)
