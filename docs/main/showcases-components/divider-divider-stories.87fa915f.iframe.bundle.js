"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[9270],{"./projects/components/src/lib/divider/divider.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MasDivider});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let MasDivider=class MasDivider{constructor(){this.orientation="horizontal"}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={orientation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};MasDivider=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"mas-divider",host:{class:"mas-divider"},template:'<div class="{{ orientation }}"></div>'})],MasDivider)},"./projects/showcases/components/stories/divider/divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./projects/components/src/lib/divider/divider.component.ts").Z,title:"Components/Structure/Divider",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]})],parameters:{componentSubtitle:"",docs:{description:{component:"\n        "}}},render:({...args})=>({props:args,template:'\n      <div style="height: 124px">\n        <mas-divider [orientation]="orientation"></mas-divider>\n      </div>\n    '}),argTypes:{orientation:{type:{name:"string",required:!1},control:"radio",options:["horizontal","vertical"],description:""}}},Basic={args:{orientation:"horizontal"}},Overview={render:()=>({template:'\n    <div style="display: flex; flex-direction: column; align-items: center; font-family: var(--mas-typo_font-family);">\n      <h2 style="font-weight: var(--mas-typo_headline-font-weight)">Bouygues Construction Expert in building</h2>\n      <div style="display: flex; flex-direction: row; justify-content: center; flex: 1; margin-top: 16px">\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+10000</h3>\n          <span>\n            projects delivered in 10 years\n          </span>\n        </div>\n        <mas-divider orientation="vertical"/>\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+9</h3>\n          <span>\n            country supported by the supply\n          </span>\n        </div>\n        <mas-divider orientation="vertical"/>\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+3000</h3>\n          <span>\n            Construction experts\n          </span>\n        </div>\n      </div>\n    </div>\n    '})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    orientation: 'horizontal'\n  }\n}",...Basic.parameters?.docs?.source}}},Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n    <div style="display: flex; flex-direction: column; align-items: center; font-family: var(--mas-typo_font-family);">\n      <h2 style="font-weight: var(--mas-typo_headline-font-weight)">Bouygues Construction Expert in building</h2>\n      <div style="display: flex; flex-direction: row; justify-content: center; flex: 1; margin-top: 16px">\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+10000</h3>\n          <span>\n            projects delivered in 10 years\n          </span>\n        </div>\n        <mas-divider orientation="vertical"/>\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+9</h3>\n          <span>\n            country supported by the supply\n          </span>\n        </div>\n        <mas-divider orientation="vertical"/>\n        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">\n          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+3000</h3>\n          <span>\n            Construction experts\n          </span>\n        </div>\n      </div>\n    </div>\n    `\n  })\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Overview"]}}]);