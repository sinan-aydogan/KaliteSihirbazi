import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    {
        ignores: [
            '_reference/**',
            'phpstorm.config.js',
            'vendor/**',
            'node_modules/**',
            'public/**',
            'storage/**',
            'resources/js/actions/**',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
    },
    js.configs.recommended,
    ...vue.configs['flat/essential'],
    {
        files: ['resources/js/**/*.{js,vue}', 'vite.config.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                Ziggy: 'readonly',
                axios: 'readonly',
                dayjs: 'readonly',
                route: 'readonly',
                t: 'readonly',
            },
        },
        rules: {
            'no-undef': 'warn',
            'no-extra-boolean-cast': 'warn',
            'no-prototype-builtins': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'vue/no-deprecated-v-on-native-modifier': 'warn',
            'vue/no-mutating-props': 'warn',
            'vue/no-ref-as-operand': 'warn',
            'vue/no-reserved-component-names': 'warn',
            'vue/no-unused-components': 'warn',
            'vue/no-unused-vars': 'warn',
            'vue/no-v-text-v-html-on-component': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/require-v-for-key': 'warn',
            'vue/require-valid-default-prop': 'warn',
            'vue/return-in-computed-property': 'warn',
            'vue/valid-v-for': 'warn',
        },
    },
    prettier,
];
