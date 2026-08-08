.PHONY: $(MAKECMDGOALS)

dev:
	@cd site && npm run dev

build:
	@cd site && npm run build

preview:
	@cd site && npm run preview

check:
	@cd site && npm run check

install:
	@cd site && npm install
