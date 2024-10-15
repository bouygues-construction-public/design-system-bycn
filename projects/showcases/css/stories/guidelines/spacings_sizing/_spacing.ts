const coreTokensJson = require('@masoni/css-design-tokens/tokens/spacing/core.json');
const tokensJson = require('@masoni/css-design-tokens/tokens/themes/theme-light.json');

const spacing = coreTokensJson.mas.core.spacing;

const coreToken = new Map();
const tokens = new Map();
Object.keys(spacing).map(key => {
    coreToken.set(`mas.core.spacing.${key}`, spacing[key].value);
})

Object.keys(tokensJson.mas.semantic['spacing']).map(key => {
    console.log(tokensJson.mas.semantic['spacing'][key].value)
    tokens.set(`mas-semantic-spacing-${key}`, coreToken.get(tokensJson.mas.semantic['spacing'][key].value.slice(1, -1)))
})

console.log(tokens)
export default tokens;
