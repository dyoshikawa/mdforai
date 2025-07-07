export default {
  "*.{js,ts,jsx,tsx}": ["biome check --write", "oxlint --fix", "eslint --fix"],
  "*.{json,md}": ["biome check --write"],
  "**/*": ["secretlint"],
};
