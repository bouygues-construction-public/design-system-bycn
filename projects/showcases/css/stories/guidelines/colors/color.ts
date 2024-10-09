const coreColortokensJson = require('@masoni/css-design-tokens/tokens/color/core.json');
const tokensJson = require('@masoni/css-design-tokens/tokens/themes/theme-light.json');

const coreToken = new Map();
const token = new Map();

const semanticColor = tokensJson.mas.semantic.color;
const coreColor = coreColortokensJson.mas.core.color;

Object.keys(coreColor).forEach((key) => {
  if (typeof coreColor[key].value === 'string') {
    coreToken.set(`mas.core.color.${key}`, coreColor[key].value);
  } else {
    Object.keys(coreColor[key]).map((variation) =>
      coreToken.set(`mas.core.color.${key}.${variation}`, coreColor[key][variation].value)
    );
  }
});

Object.keys(semanticColor).map((key) => {
  Object.keys(semanticColor[key]).map((variation) => {
    if (typeof semanticColor[key][variation].value === 'string') {
      console.log(
        semanticColor[key][variation].value.slice(1, -1),
        coreToken.get(semanticColor[key][variation].value.slice(1, -1))
      );
      token.set(
        `mas-semantic-color-${key}-${variation}`,
        coreToken.get(semanticColor[key][variation].value.slice(1, -1))
      );
    } else {
      Object.keys(semanticColor[key][variation]).map((version) =>
        token.set(
          `mas-core-color-${key}-${variation}-${version}`,
          coreToken.has(semanticColor[key][variation][version].value.slice(1, -1))
            ? coreToken.get(semanticColor[key][variation][version].value.slice(1, -1))
            : semanticColor[key][variation][version].value
        )
      );
    }
  });
});

export default token;
