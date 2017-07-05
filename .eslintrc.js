var OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    "rules": {
        "no-console": OFF,
        "no-unused-vars": OFF,
        "prefer-const": ERROR,
        "quotes": [WARN, "single"]
    },
    "env": {
        "node": true,
        "mocha": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended"
    ]
}