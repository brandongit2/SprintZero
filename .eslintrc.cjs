module.exports = {
	extends: [`eslint:recommended`, `plugin:import/recommended`, `next/core-web-vitals`],
	plugins: [`import`],
	env: {
		es6: true,
		node: true,
	},
	rules: {
		eqeqeq: `warn`,
		"import/no-anonymous-default-export": `warn`,
		"import/no-named-as-default": `off`,
		"import/no-named-as-default-member": `off`,
		"import/order": [
			`warn`,
			{
				groups: [
					[`builtin`, `external`],
					[`object`, `unknown`, `type`],
					[`internal`, `parent`, `index`, `sibling`],
				],
				pathGroups: [{pattern: `~/**`, group: `internal`}],
				pathGroupsExcludedImportTypes: [`type`],
				"newlines-between": `always`,
				alphabetize: {order: `asc`, caseInsensitive: true},
				warnOnUnassignedImports: true,
			},
		],
		"import/no-unresolved": [`warn`, {ignore: [`\\.svg$`]}],
		"sort-imports": [`warn`, {ignoreDeclarationSort: true}],
		"no-console": [`warn`, {allow: [`info`, `warn`, `error`, `trace`]}],
		"no-constant-condition": [`error`, {checkLoops: false}],
		"no-control-regex": `off`,
		"no-empty": [`warn`, {allowEmptyCatch: true}],
		"no-mixed-spaces-and-tabs": [`warn`, `smart-tabs`],
		"no-param-reassign": `error`,
		"no-unused-expressions": [`warn`, {enforceForJSX: true, allowShortCircuit: true}],
		"no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
		"object-shorthand": `warn`,
		quotes: [`warn`, `backtick`],
		"require-await": `warn`,
		yoda: `warn`,
	},
	overrides: [
		{
			files: [`**/*.ts`, `**/*.tsx`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: `./tsconfig.json`,
			},
			plugins: [`@typescript-eslint`],
			settings: {
				"import/parsers": {
					"@typescript-eslint/parser": [`.ts`, `.tsx`],
				},
				"import/resolver": {
					typescript: true,
					node: true,
				},
			},
			extends: [
				`plugin:@typescript-eslint/recommended`,
				`plugin:@typescript-eslint/recommended-requiring-type-checking`,
				`plugin:import/typescript`,
			],
			rules: {
				"@typescript-eslint/ban-ts-comment": [`warn`, {"ts-ignore": `allow-with-description`}],
				"@typescript-eslint/consistent-type-imports": `warn`,
				"@typescript-eslint/explicit-module-boundary-types": `warn`,
				"@typescript-eslint/no-empty-function": `off`,
				"@typescript-eslint/no-extra-semi": `off`,
				"@typescript-eslint/no-floating-promises": `warn`,
				"@typescript-eslint/no-misused-promises": `warn`,
				"@typescript-eslint/no-non-null-assertion": `off`,
				"@typescript-eslint/no-unnecessary-condition": `warn`,
				"@typescript-eslint/no-unnecessary-type-assertion": `warn`,
				"@typescript-eslint/no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
				"@typescript-eslint/quotes": [`warn`, `backtick`],
				"@typescript-eslint/require-await": `warn`,
				"prefer-const": `off`,
				quotes: `off`,
			},
		},
		{
			files: [`**/*.jsx`, `**/*.tsx`],
			plugins: [`react`, `react-hooks`, `@tanstack/query`],
			settings: {
				react: {
					version: `detect`,
				},
			},
			extends: [
				`plugin:react/recommended`,
				`plugin:react-hooks/recommended`,
				`plugin:react/jsx-runtime`,
				`plugin:@tanstack/eslint-plugin-query/recommended`,
			],
			rules: {
				"@tanstack/query/exhaustive-deps": `off`,
				"react/button-has-type": `warn`,
				"react/display-name": `warn`,
				"react/forbid-elements": [
					`error`,
					{
						forbid: [
							{
								element: `a`,
								message: `please use <LinkTo> instead.`,
							},
							{
								element: `Link`,
								message: `please use <LinkTo> instead.`,
							},
						],
					},
				],
				"react/jsx-boolean-value": `warn`,
				"react/jsx-curly-brace-presence": `warn`,
				"react/jsx-no-useless-fragment": [`warn`, {allowExpressions: true}],
				"react/no-unused-prop-types": `warn`,
				"react/no-unknown-property": `off`,
				"react/prop-types": `off`,
				"react/self-closing-comp": `off`,
			},
		},
	],
}
