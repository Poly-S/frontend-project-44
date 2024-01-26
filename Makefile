install:
		npm ci

brain-games:
		make brain-games.js

publish:
		npm publish --dry-run