'use strict';

module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "ecmaVersion": 7,
  "ecmaFeatures": {
    "classes": true,
    "experimentalObjectRestSpread": true,
    "jsx": true,
    "modules": true,
    "templateStrings": true
  },
  "globals": {
    "new": true,
    "process": true,
    "require": true,
    "target": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "arrow-body-style": ["error", "always"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "block-scoped-var": "error",
    "brace-style": "error",
    "camelCase": "off",
    "comma-dangle": "off",
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "off",
    "consistent-return": "error",
    "curly": ["error", "all"],
    "default-case": "off",
    "dot-notation": ["error", {"allowKeywords": true}],
    "eol-last": "error",
    "eqeqeq": "error",
    "func-names": "off",
    "func-style": ["error", "declaration"],
    "generator-star": "off",
    "guard-for-in": "off",
    "handle-callback-err": "error",
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": "error",
    "max-depth": ["warn", 4],
    "max-len": ["error", 120],
    "max-nested-callbacks": ["warn", 2],
    "max-params": ["warn", 4],
    "max-statements": ["off", 10],
    "new-cap": "error",
    "new-parens": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-cond-assign": ["error", "always"],
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "off",
    "no-dupe-keys": "error",
    "no-else-return": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "off",
    "no-func-assign": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-mixed-requires": ["off", false],
    "no-mixed-spaces-and-tabs": ["error", false],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", {"max": 2}],
    "no-native-reassign": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "off",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "off",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-path-concat": "off",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-reserved-keys": "off",
    "no-restricted-modules": "off",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-sync": "off",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", {"vars": "all", "args": "after-used"}],
    "no-use-before-define": "error",
    "no-void": "error",
    "no-var": "off",
    "no-warning-comments": ["off", {"terms": ["todo", "fixme", "xxx"], "location": "start"}],
    "no-with": "error",
    "one-var": "error",
    "operator-assignment": ["off", "always"],
    "padded-blocks": "off",
    "quote-props": "off",
    "radix": "error",
    "sort-vars": "off",
    "space-after-function-name": ["off", "never"],
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "spaced-comment": "error",
    "strict": ["error", "global"],
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yoda": "off",

    // ES2015 RULES
    "arrow-parens": "error",
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-this-before-super": "off",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-reflect": "error",
    "prefer-template": "error",
    "require-yield": "error",

    // REACT RULES
    "react/display-name": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-literals": "off",
    "react/jsx-no-undef": "warn",
    "jsx-quotes": "warn",
    "react/jsx-sort-props": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-danger": "warn",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-multi-comp": "warn",
    "react/no-set-state": "off",
    "react/no-unknown-property": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-extension": "off",
    "react/self-closing-comp": "off",
    "react/sort-comp": "off",
    "react/sort-prop-types": "warn",
    "react/wrap-multilines": "off"
  }
};
