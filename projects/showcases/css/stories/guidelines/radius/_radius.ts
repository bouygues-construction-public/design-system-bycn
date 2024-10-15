const coreTokensJson = require('@masoni/css-design-tokens/tokens/radius/core.json');
const tokensJson = require('@masoni/css-design-tokens/tokens/themes/theme-light.json');

const radius = coreTokensJson.mas.core["border-radius"];

const coreToken = new Map();
const tokens = new Map();
Object.keys(radius).map(key => {
    coreToken.set(`mas.core.border-radius.${key}`, radius[key].value);
})

Object.keys(tokensJson.mas.semantic['border-radius']).map(key => {
    console.log(tokensJson.mas.semantic['border-radius'][key].value)
    tokens.set(`mas-semantic-border-radius-${key}`, coreToken.get(tokensJson.mas.semantic['border-radius'][key].value.slice(1, -1)))
})

export default tokens;

