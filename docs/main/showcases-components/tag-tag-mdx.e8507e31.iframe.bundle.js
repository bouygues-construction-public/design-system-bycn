"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[7396,3902],{"./projects/components/src/lib/tag/tag.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MasTag});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let MasTag=class MasTag{constructor(){this.size="medium",this.color="orange"}getColorClass(){return this.color?"mas-tag-color-"+this.color:""}static#_=this.propDecorators={label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],leadingIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};MasTag=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"mas-tag",template:'\n      <span class="mas-tag" class="{{getColorClass()}}" \n      [ngClass]="{\'mas-tag-small\': size === \'small\', \'mas-tag-medium\': size === \'medium\'}">\n        <i *ngIf="leadingIcon" class="mas-icon mas-icon-left {{leadingIcon}}"></i>\n        <span class="mas-tag-label">{{ label }}</span>\n      </span>\n  '})],MasTag)},"./projects/showcases/components/stories/tag/tag.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_tag_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/showcases/components/stories/tag/tag.stories.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_tag_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasTag"})," is used to categorize, label and organize adjacent items using keywords to describe them."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Tags are used to group content by category."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It have to be mainly used for create visual hierarchy or share secondary indicators with users."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"colors",children:"Colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The component comes in different variants such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"orange"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"amber"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"green"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"teal"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"blue"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"purple"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"red"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"roc"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_tag_stories__WEBPACK_IMPORTED_MODULE_2__.ShowcaseColors}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The component comes in different sizes : ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"medium"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_tag_stories__WEBPACK_IMPORTED_MODULE_2__.ShowcaseSizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"tag-with-icon",children:"Tag with Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The component can contain icon on the left"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_tag_stories__WEBPACK_IMPORTED_MODULE_2__.ShowcaseIcon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"guidelines",children:"Guidelines"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Best practices are available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://zeroheight.com/9b39bb2a0/p/992e69-components/b/348056",rel:"nofollow",children:"here"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback--contact",children:"Feedback & contact"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Help us improve this pattern by providing feedback, asking questions, and leaving any other comments ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bouygues-construction/design-system-bycn/issues/new",rel:"nofollow",children:"here"})]}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./projects/showcases/components/stories/tag/tag.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ShowcaseColors:()=>ShowcaseColors,ShowcaseIcon:()=>ShowcaseIcon,ShowcaseSizes:()=>ShowcaseSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),projects_components_src_lib_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/components/src/lib/tag/tag.component.ts");const colors=["orange","amber","green","teal","blue","purple","red","roc"],argTypes={label:{type:{name:"string",required:!1},description:"The label of the tag",defaultValue:"Text",control:"text"},size:{type:{name:"string",required:!1},description:"The size of the tag. Available options: 'small', 'medium'. Default: 'medium'",defaultValue:"medium",control:"radio",options:["small","medium"]},leadingIcon:{type:{name:"string",required:!1},description:"The name of the leading  icon to display on the left side of the tag.",defaultValue:"",control:"select",options:["","mas-arrow-arc-left-outlined mas-arrows--outlined","mas-arrow-circle-left-outlined mas-arrows--outlined","mas-arrow-arc-right-outlined mas-arrows--outlined","mas-arrow-circle-right-outlined mas-arrows--outlined","mas-arrow-square-out-outlined mas-arrows--outlined","mas-info-outlined mas-security-and-warnings--outlined","mas-warning-circle-outlined mas-security-and-warnings--outlined","mas-calendar-blank-outlined mas-time--outlined","mas-smiley-meh-outlined mas-people--outlined","mas-check-outlined mas-system-and-device--outlined","mas-upload-simple-outlined mas-system-and-device--outlined","mas-currency-btc-outlined mas-commerce--outlined"]},color:{type:{name:"string",required:!1},description:"The background color of the tag",defaultValue:"",control:"select",options:["",...colors]}},__WEBPACK_DEFAULT_EXPORT__={title:"Components / Indicators / Tags",component:projects_components_src_lib_tag__WEBPACK_IMPORTED_MODULE_1__.O,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[projects_components_src_lib_tag__WEBPACK_IMPORTED_MODULE_1__.O]})],argTypes,parameters:{docs:{description:{component:"Tags are used to categorize, label and organize adjacent items using keywords to describe them."}}},render:({...args})=>({props:args,template:'\n            <mas-tag\n              [label]="label"\n              [size]="size"\n              [leadingIcon]="leadingIcon"\n              [color]="color">\n            </mas-tag>\n    '})},Default={args:{label:"Text",size:"medium"}},ShowcaseSizes=()=>({template:'\n  <div style="display: flex; flex-wrap: wrap;">\n       <mas-tag label="small" size="small"></mas-tag>\n       <mas-tag label="medium" size="medium"></mas-tag>\n  </div>\n  ',props:{colors}}),ShowcaseColors=()=>({template:'\n      <div style="display: flex; flex-wrap: wrap;">\n        <ng-container *ngFor="let color of colors">\n           <mas-tag [label]="color" size="medium" [color]="color"></mas-tag>\n        </ng-container>\n      </div>\n  ',props:{colors}}),ShowcaseIcon=()=>({template:'\n    <mas-tag label="Text" leadingIcon="mas-check-outlined mas-system-and-device--outlined"></mas-tag>\n  '});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"Basic : A tag with default settings",...Default.parameters?.docs?.description}}},ShowcaseSizes.parameters={...ShowcaseSizes.parameters,docs:{...ShowcaseSizes.parameters?.docs,source:{originalSource:'() => ({\n  template: `\n  <div style="display: flex; flex-wrap: wrap;">\n       <mas-tag label="small" size="small"></mas-tag>\n       <mas-tag label="medium" size="medium"></mas-tag>\n  </div>\n  `,\n  props: {\n    colors: colors\n  }\n})',...ShowcaseSizes.parameters?.docs?.source}}},ShowcaseColors.parameters={...ShowcaseColors.parameters,docs:{...ShowcaseColors.parameters?.docs,source:{originalSource:'() => ({\n  template: `\n      <div style="display: flex; flex-wrap: wrap;">\n        <ng-container *ngFor="let color of colors">\n           <mas-tag [label]="color" size="medium" [color]="color"></mas-tag>\n        </ng-container>\n      </div>\n  `,\n  props: {\n    colors: colors\n  }\n})',...ShowcaseColors.parameters?.docs?.source}}},ShowcaseIcon.parameters={...ShowcaseIcon.parameters,docs:{...ShowcaseIcon.parameters?.docs,source:{originalSource:'() => ({\n  template: `\n    <mas-tag label="Text" leadingIcon="mas-check-outlined mas-system-and-device--outlined"></mas-tag>\n  `\n})',...ShowcaseIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ShowcaseSizes","ShowcaseColors","ShowcaseIcon"]}}]);