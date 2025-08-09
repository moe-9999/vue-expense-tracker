import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  rules: {
    "vue/block-order": ["error", {
      order: ["template", "script", "style"],
    }],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
  },
  ignores: [],
});
