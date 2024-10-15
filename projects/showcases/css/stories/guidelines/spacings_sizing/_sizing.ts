const coreTokensJson = require('@masoni/css-design-tokens/tokens/sizing/core.json');
const tokensJson = require('@masoni/css-design-tokens/tokens/themes/theme-light.json');

const sizing = coreTokensJson.mas.core.sizing;

const coreToken = new Map();
const tokens = new Map();
Object.keys(sizing).map(key => {
    coreToken.set(`mas.core.sizing.${key}`, sizing[key].value);
})

Object.keys(tokensJson.mas.semantic['sizing']).map(key => {
    console.log(tokensJson.mas.semantic['sizing'][key].value)
    tokens.set(`mas-semantic-sizing-${key}`, coreToken.get(tokensJson.mas.semantic['sizing'][key].value.slice(1, -1)))
})

console.log(tokens)
export default tokens;
