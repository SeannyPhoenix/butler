module.exports = {
  extends: ["next", "google"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "require-jsdoc": "off"
  },
};
