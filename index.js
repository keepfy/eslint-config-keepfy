module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "jsx": true,
      "useJSXTextNode": true
    },
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "eslint:recommended",
      "prettier",
      "prettier/@typescript-eslint",
      "plugin:ramda/recommended"
    ],
    "rules": {
      "no-sequences": "error",
      "spaced-comment": [
        "error",
        "always"
      ],
      "key-spacing": [
        "error",
        {
          "mode": "strict"
        }
      ],
      "max-len": [
        "error",
        {
          "code": 85
        }
      ],
      "max-lines": [
        "error",
        {
          "max": 300,
          "skipBlankLines": true
        }
      ],
      "prefer-const": [
        "error",
        {
          "destructuring": "all"
        }
      ],
      "no-var": "error",
      "newline-before-return": "error",
      "arrow-parens": [
        "error",
        "as-needed"
      ],
      "no-bitwise": "error",
      "max-classes-per-file": "error",
      "no-duplicate-imports": "error",
      "lines-between-class-members": [
        "error",
        "always"
      ],
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": "*",
          "next": "return"
        }
      ],
      "sort-imports": [
        "error",
        {
          "ignoreCase": true,
          "ignoreDeclarationSort": true,
          "ignoreMemberSort": true,
          "memberSyntaxSortOrder": [
            "none",
            "all",
            "multiple",
            "single"
          ]
        }
      ],
      "no-irregular-whitespace": "error",
      "space-before-blocks": "error",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "curly": "error",
      "no-undef": "off",
      "no-case-declarations": "off",
      "indent": [
        "error",
        4
      ],
      "no-unused-vars": [
        "error",
        {
          "ignoreRestSiblings": true
        }
      ],
      "no-console": [
        "error",
        {
          "allow": [
            "log",
            "error"
          ]
        }
      ],
      "comma-dangle": [
        "error",
        "never"
      ],
      "semi": [
        "error",
        "never"
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "quotes": [
        "error",
        "single"
      ],
      "jsx-quotes": [
        "error",
        "prefer-single"
      ],
      "eol-last": [
        "error",
        "always"
      ],
      "no-new-wrappers": "error",
      "arrow-spacing": [
        "error",
        {
          "after": true,
          "before": true
        }
      ],
      "valid-jsdoc": "error",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "react/jsx-closing-bracket-location": [
        1,
        {
          "selfClosing": "line-aligned",
          "nonEmpty": "after-props"
        }
      ],
      "react/jsx-tag-spacing": ["error",{
        "beforeSelfClosing": "always"
      }],
      "react/jsx-props-no-multi-spaces": "error",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-wrap-multilines": ["error", {
        "assignment": "parens-new-line",
        "arrow": "ignore",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }],
      "react/jsx-curly-spacing": [
        "error",
        {
          "when": "always",
          "children": true
        }
      ],
      "react/no-unescaped-entities": "off",
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          "disallowPrototype": true,
          "singleReturnOnly": true,
          "classPropertiesAllowed": false
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/class-name-casing": "error",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "classes": [
            "public-static-field",
            "public-instance-field",
            "private-static-field",
            "private-instance-field",
            "private-constructor",
            "public-constructor",
            "private-instance-method",
            "protected-instance-method",
            "public-instance-method"
          ]
        }
      ],
      "@typescript-eslint/prefer-interface": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-object-literal-type-assertion": "off",
      "@typescript-eslint/interface-name-prefix": [
        "error",
        "always"
      ],
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    },
    "plugins": [
      "react",
      "prefer-arrow",
      "@typescript-eslint",
      "ramda"
    ],
    "settings": {
      "react": {
        "pragma": "React",
        "version": "16.8.6"
      }
    }
  }
