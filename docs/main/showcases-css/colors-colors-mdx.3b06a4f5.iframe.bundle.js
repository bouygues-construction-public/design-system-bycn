(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[606],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./projects/css/presets/tailwind/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const theme=__webpack_require__("./projects/css/presets/tailwind/theme.js");module.exports={prefix:"mas-",theme,plugins:[],corePlugins:{preflight:!1}}},"./projects/css/presets/tailwind/theme.js":module=>{module.exports={screens:{mobile:{min:"0px"},tablet:{min:"600px"},desktop:{min:"1440px"}},spacing:{0:"var(--mas-spacing_0)","025":"var(--mas-spacing_025)","050":"var(--mas-spacing_050)","075":"var(--mas-spacing_075)",100:"var(--mas-spacing_100)",150:"var(--mas-spacing_150)",200:"var(--mas-spacing_200)",250:"var(--mas-spacing_250)",300:"var(--mas-spacing_300)",400:"var(--mas-spacing_400)",500:"var(--mas-spacing_500)",600:"var(--mas-spacing_600)",800:"var(--mas-spacing_800)"},colors:{current:"currentColor",transparent:"transparent","background-primary":"var(--mas-semantic-color_background-primary)","background-secondary":"var(--mas-semantic-color_background-secondary)","surface-primary":"var(--mas-semantic-color_surface-primary)","surface-secondary":"var(--mas-semantic-color_surface-secondary)","surface-tiertiary":"var(--mas-semantic-color_surface-tiertiary)","icon-primary":"var(--mas-semantic-color_icon-primary)","icon-secondary":"var(--mas-semantic-color_icon-secondary)","icon-tiertiary":"var(--mas-semantic-color_icon-tiertiary)","icon-reverse":"var(--mas-semantic-color_icon-reverse)","icon-orange":"var(--mas-semantic-color_icon-orange)","icon-amber":"var(--mas-semantic-color_icon-amber)","icon-green":"var(--mas-semantic-color_icon-green)","icon-teal":"var(--mas-semantic-color_icon-teal)","icon-blue":"var(--mas-semantic-color_icon-blue)","icon-purple":"var(--mas-semantic-color_icon-purple)","icon-red":"var(--mas-semantic-color_icon-red)","border-primary":"var(--mas-semantic-color_border-primary)","border-secondary":"var(--mas-semantic-color_border-secondary)","border-tiertiary":"var(--mas-semantic-color_border-tiertiary)","action-primary--default":"var(--mas-semantic-color_action-primary--default)","action-primary--hovered":"var(--mas-semantic-color_action-primary--hovered)","action-primary--pressed":"var(--mas-semantic-color_action-primary--pressed)","action-primary--disabled":"var(--mas-semantic-color_action-primary--disabled)","action-secondary--default":"var(--mas-semantic-color_action-secondary--default)","action-secondary--hovered":"var(--mas-semantic-color_action-secondary--hovered)","action-secondary--pressed":"var(--mas-semantic-color_action-secondary--pressed)","action-secondary--disabled":"var(--mas-semantic-color_action-secondary--disabled)","action-tiertiary--default":"var(--mas-semantic-color_action-tiertiary--default)","action-tiertiary--hovered":"var(--mas-semantic-color_action-tiertiary--hovered)","action-tiertiary--pressed":"var(--mas-semantic-color_action-tiertiary--pressed)","action-tiertiary--disabled":"var(--mas-semantic-color_action-tiertiary--disabled)","action-reverse--default":"var(--mas-semantic-color_action-reverse--default)","action-reverse--hovered":"var(--mas-semantic-color_action-reverse--hovered)","action-reverse--pressed":"var(--mas-semantic-color_action-reverse--pressed)","action-reverse--disabled":"var(--mas-semantic-color_action-reverse--disabled)","surface-orange":"var(--mas-semantic-color_surface-orange)","surface-amber":"var(--mas-semantic-color_surface-amber)","surface-green":"var(--mas-semantic-color_surface-green)","surface-teal":"var(--mas-semantic-color_surface-teal)","surface-blue":"var(--mas-semantic-color_surface-blue)","surface-purple":"var(--mas-semantic-color_surface-purple)","surface-red":"var(--mas-semantic-color_surface-red)","text-primary":"var(--mas-semantic-color_text-primary)","text-secondary":"var(--mas-semantic-color_text-secondary)","text-tiertiary":"var(--mas-semantic-color_text-tiertiary)","text-reverse":"var(--mas-semantic-color_text-reverse)","text-orange":"var(--mas-semantic-color_text-orange)","text-amber":"var(--mas-semantic-color_text-amber)","text-green":"var(--mas-semantic-color_text-green)","text-teal":"var(--mas-semantic-color_text-teal)","text-blue":"var(--mas-semantic-color_text-blue)","text-purple":"var(--mas-semantic-color_text-purple)","text-red":"var(--mas-semantic-color_text-red)",brand:{DEFAULT:"var(--mas-primitive-color_orange600)"},"brand--hovered":"var(--mas-primitive-color_orange700)","brand--pressed":"var(--mas-primitive-color_orange800)","brand--disabled":"var(--mas-primitive-color_orange600)"},extend:{textColor:{orange:"var(--mas-semantic-color_text-orange)",amber:"var(--mas-semantic-color_text-amber)",green:"var(--mas-semantic-color_text-green)",teal:"var(--mas-semantic-color_text-teal)",blue:"var(--mas-semantic-color_text-blue)",purple:"var(--mas-semantic-color_text-purple)",red:"var(--mas-semantic-color_text-red)"},borderColor:{primary:"var(--mas-semantic-color_border-primary)",secondary:"var(--mas-semantic-color_border-secondary)",tiertiary:"var(--mas-semantic-color_border-tiertiary)"},backgroundColor:{primary:"var(--mas-semantic-color_background-primary)",secondary:"var(--mas-semantic-color_background-secondary)"},borderRadius:{0:"var(--mas-radius_0)",.5:"var(--mas-radius_05)",1:"var(--mas-radius_1)",2:"var(--mas-radius_2)",3:"var(--mas-radius_3)",4:"var(--mas-radius_4)",5:"var(--mas-radius_5)",6:"var(--mas-radius_6)",7:"var(--mas-radius_7)",8:"var(--mas-radius_8)",full:"var(--mas-radius_full)"},boxShadow:{100:"var(--mas-shadow_100)",200:"var(--mas-shadow_200)",300:"var(--mas-shadow_300)",400:"var(--mas-shadow_400)"}}}},"./projects/showcases/css/stories/guidelines/colors/colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./projects/css/presets/tailwind/index.js");const color=__webpack_require__("./projects/css/src/design_tokens/tokens/color/core.json").mas.core.color;function _createMdxContent(props){const _components={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Guidelines / Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Colors are an important element of BYCN Design system, as they play a key role in establishing brand identity, conveying meaning, and creating visual hierarchy."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For more detail, see our ",(0,jsx_runtime.jsx)(_components.a,{href:"https://zeroheight.com/9b39bb2a0/p/27aa26-colors/b/38114b",rel:"nofollow",children:"Colors' guideline"})]}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"using-css-custom-properties",children:["Using ",(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you don't know CSS Custom Properties, you can see basic usage documentation ",(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Basic_usage",rel:"nofollow",children:"here"}),'. All our CSS Custom Properties for colors are listed at "Swatches" column just below:']}),"\n",(0,jsx_runtime.jsx)(dist.rE,{children:Object.keys(color).map((key=>"string"==typeof color[key].value?(0,jsx_runtime.jsx)(dist.Jl,{title:`${key}`,colors:[color[key].value]}):Object.keys(color[key]).map((variation=>(0,jsx_runtime.jsx)(dist.Jl,{title:`${key}-${variation}`,colors:[color[key][variation].value]})))))}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"using-tailwind-css-utility-classes",children:["Using ",(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com",rel:"nofollow",children:"Tailwind CSS"})," utility classes"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You can use colors with Tailwind CSS utility classes for ",(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/background-color",rel:"nofollow",children:"Background Color"})," & ",(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/text-color",rel:"nofollow",children:"Text Color"})," for example.\r\nBut you can also use them for borders, gradients, etc. Go to ",(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs",rel:"nofollow",children:"Tailwind CSS documentation"})," & quick search for anything!"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All our Tailwind CSS colors names are just above next to their representation."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./projects/css/src/design_tokens/tokens/color/core.json":module=>{"use strict";module.exports=JSON.parse('{"mas":{"core":{"color":{"orange":{"100":{"value":"#FBDDD0","type":"color"},"200":{"value":"#F7BBA1","type":"color"},"300":{"value":"#F3956D","type":"color"},"400":{"value":"#EF733E","type":"color"},"500":{"value":"#E75113","type":"color"},"600":{"value":"#B8420F","type":"color"},"700":{"value":"#89310B","type":"color"},"800":{"value":"#5E2208","type":"color"},"900":{"value":"#2F1104","type":"color"}},"yellow":{"100":{"value":"#FDE7B9","type":"color"},"200":{"value":"#FCCE74","type":"color"},"300":{"value":"#FAB82F","type":"color"},"400":{"value":"#F9A806","type":"color"},"500":{"value":"#D18D05","type":"color"},"600":{"value":"#A46F04","type":"color"},"700":{"value":"#7D5403","type":"color"},"800":{"value":"#553902","type":"color"},"900":{"value":"#281B01","type":"color"}},"green":{"100":{"value":"#DBEDD4","type":"color"},"200":{"value":"#B8DBA8","type":"color"},"300":{"value":"#93C97B","type":"color"},"400":{"value":"#76BB59","type":"color"},"500":{"value":"#60A343","type":"color"},"600":{"value":"#4C8235","type":"color"},"700":{"value":"#396228","type":"color"},"800":{"value":"#26411B","type":"color"},"900":{"value":"#13210D","type":"color"}},"blue":{"100":{"value":"#E0E7FA","type":"color"},"200":{"value":"#C6D3F6","type":"color"},"300":{"value":"#A7BBF1","type":"color"},"400":{"value":"#89A3EC","type":"color"},"500":{"value":"#6B8DE7","type":"color"},"600":{"value":"#315FDE","type":"color"},"700":{"value":"#1C44B0","type":"color"},"800":{"value":"#132E76","type":"color"},"900":{"value":"#091639","type":"color"}},"red":{"100":{"value":"#FCD9E0","type":"color"},"200":{"value":"#F8AFBE","type":"color"},"300":{"value":"#F5899F","type":"color"},"400":{"value":"#F25F7C","type":"color"},"500":{"value":"#EF395D","type":"color"},"600":{"value":"#E7133D","type":"color"},"700":{"value":"#AE0E2E","type":"color"},"800":{"value":"#760A1F","type":"color"},"900":{"value":"#39050F","type":"color"}},"grey":{"100":{"value":"#F2F3F5","type":"color"},"200":{"value":"#DFE1E3","type":"color"},"300":{"value":"#C6CACE","type":"color"},"400":{"value":"#A9AFB5","type":"color"},"500":{"value":"#858D96","type":"color"},"600":{"value":"#65707B","type":"color"},"700":{"value":"#475461","type":"color"},"800":{"value":"#2D3C4A","type":"color"},"900":{"value":"#102031","type":"color"}},"white":{"value":"#FFFFFF","type":"color"},"black":{"value":"#000000","type":"color"}}}}}')}}]);