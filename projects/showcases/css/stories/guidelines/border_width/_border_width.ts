const coreTokensJson = require('@masoni/css-design-tokens/tokens/border-width/core.json');
const tokensJson = require('@masoni/css-design-tokens/tokens/themes/theme-light.json');

const borderWidth = coreTokensJson.mas.core["border-width"];

const coreToken = new Map();
const tokens = new Map();
Object.keys(borderWidth).map(key => {
    coreToken.set(`mas.core.border-width.${key}`, borderWidth[key].value);
})

Object.keys(tokensJson.mas.semantic['border-width']).map(key => {
    console.log(tokensJson.mas.semantic['border-width'][key].value)
    tokens.set(`mas-semantic-border-width-${key}`, coreToken.get(tokensJson.mas.semantic['border-width'][key].value.slice(1, -1)))
})

export default tokens;

