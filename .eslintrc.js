module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    'camelcase': 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react/destructuring-assignment":0,
    "react/state-in-constructor":0
  },
};
