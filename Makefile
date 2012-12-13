FILES = chrome/ \
				bootstrap.js \
				chrome.manifest \
				install.rdf

all:
	rm -f test.xpi && zip -r test.xpi $(FILES)
	wget --post-file=$(PWD)/test.xpi http://localhost:8888/
