# https://www.gnu.org/software/make/manual/html_node/Wildcard-Function.html
# https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
# https://www.gnu.org/software/make/manual/make.html#Prerequisite-Types
island_dir := njk/island
island_njks := $(subst 11ty,njk,$(wildcard 11ty/island/*.njk))

$(island_dir)/%.njk: 11ty/island/%.njk
	cat $< | sed '1,/^---$$/d' > $@

all: $(island_njks)

$(island_njks): | $(island_dir)

$(island_dir):
	mkdir -p $(island_dir)
