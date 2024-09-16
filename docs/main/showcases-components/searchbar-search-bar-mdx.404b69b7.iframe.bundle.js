"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[1057,3539],{"./projects/components/src/lib/search-bar/search-bar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>MasSearchBar});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let MasSearchBar=class MasSearchBar{constructor(){this.focused=!1,this._query="",this.input=new fesm2022_forms.MJ(""),this.onChangeHandler=_=>{},this.onTouchedHandler=()=>{},this.placeholder="",this.clearClick=new core.EventEmitter,this.closeClick=new core.EventEmitter,this.search=new core.EventEmitter}get query(){return this._query}set query(value){this._query=value}get empty(){return""===this.query}ngAfterViewInit(){this.input.setValue(this.query),this.input.valueChanges.subscribe((value=>{this.onChangeHandler(value?.trim()),this.query=value??""}))}writeValue(obj){this.input.setValue(obj)}registerOnChange(fn){this.onChangeHandler=fn}registerOnTouched(fn){this.onTouchedHandler=fn}setDisabledState(isDisabled){this.disabled=isDisabled}onClearClick(event){this.input.setValue(""),this.inputViewChild?.nativeElement.focus(),this.clearClick.emit(event)}onCloseClick(event){this.onFocus(!1),this.closeClick.emit(event)}onSearch(query){""!==query&&this.search.emit(query)}onFocus(isFocused){isFocused!==this.focused&&(this.focused=isFocused)}static#_=this.propDecorators={inputViewChild:[{type:core.ViewChild,args:["searchinput"]}],disabled:[{type:core.Input}],placeholder:[{type:core.Input}],query:[{type:core.Input}],clearClick:[{type:core.Output}],closeClick:[{type:core.Output}],search:[{type:core.Output}]}};MasSearchBar=(0,tslib_es6.Cg)([(0,core.Component)({selector:"mas-search-bar",template:'<div class="mas-search-bar_container" role="search" >\r\n  <i class="mas-search-bar_leading-icon mas-magnifying-glass-outlined mas-system-and-device--outlined mas-icon"></i>\r\n  <input\r\n    #searchinput\r\n    class="mas-search-bar_input mas-typo_body-3"\r\n    [formControl]="input"\r\n    [placeholder]="placeholder"\r\n    [value]="query"\r\n    (keydown.enter)="onSearch(query)"\r\n    (focus)="onFocus(true)"\r\n    (blur)="onFocus(false)"\r\n  />\r\n  <button *ngIf="!empty" (click)="onClearClick($event)">\r\n    <span class="mas-search-bar_clear mas-typo_body-3">Clear</span>\r\n  </button>\r\n  <i\r\n    *ngIf="focused"\r\n    class="mas-search-bar_close-icon mas-x-outlined mas-math-and-finance--outlined mas-icon"\r\n    (click)="onCloseClick($event)"\r\n  ></i>\r\n</div>\r\n',providers:[{provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>MasSearchBar)),multi:!0}],host:{class:"mas-search-bar","[class.mas-search-bar--disabled]":"disabled"}})],MasSearchBar)},"./projects/components/src/lib/search-bar/search-bar.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>MasSearchBarModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_search_bar_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/components/src/lib/search-bar/search-bar.component.ts");let MasSearchBarModule=class MasSearchBarModule{};MasSearchBarModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.X1],exports:[_search_bar_component__WEBPACK_IMPORTED_MODULE_4__.t],declarations:[_search_bar_component__WEBPACK_IMPORTED_MODULE_4__.t]})],MasSearchBarModule)},"./projects/showcases/components/stories/searchbar/search-bar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_search_bar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/showcases/components/stories/searchbar/search-bar.stories.ts");function _createMdxContent(props){const _components={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_search_bar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Searchbar allow people to set up queries, words or sentences to get information."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Searchbar enable people to find relevant informations by enter queries, words or sentences."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Can introduce suggestions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Can be used as a way of discovering content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Can be used with filters"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Place the search bar where the user expects to find it, and in proximity to the content that will be influenced by it. The search bar can be on a page, within a navigation component, or in a layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"overview-1",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Best practices are available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://zeroheight.com/9b39bb2a0/p/010dc9-searchbar/b/964f27",rel:"nofollow",children:"here"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback--contact",children:"Feedback & contact"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Help us improve this pattern by providing feedback, asking questions, and leaving any other comments ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bouygues-construction/design-system-bycn/issues/new",rel:"nofollow",children:"here"})]}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./projects/showcases/components/stories/searchbar/search-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),projects_components_src_lib_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/components/src/lib/search-bar/search-bar.component.ts"),projects_components_src_lib_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/components/src/lib/search-bar/search-bar.module.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:projects_components_src_lib_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__.t,title:"Components/Navigations/Search Bar",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.YN,projects_components_src_lib_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_4__.T]})],parameters:{componentSubtitle:"",docs:{description:{component:""}}},render:({...args})=>({props:args,template:'\n    <div>\n      <mas-search-bar [placeholder]="placeholder" ></mas-search-bar>\n    </div>\n  '}),argTypes:{onSearch:{action:"search"}}},Basic={args:{placeholder:'Search "Suggestion"'}},Overview={render:()=>({template:'\n      <div style="display: flex; gap: 16px; justify-content: center; flex-direction: column;">\n        <mas-search-bar placeholder=\'Search "Suggestion"\'></mas-search-bar>\n        <mas-search-bar placeholder=\'Search "Suggestion"\' query="What\'s Design System?"></mas-search-bar>\n      </div>\n    '})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Search \"Suggestion\"'\n  }\n}",...Basic.parameters?.docs?.source}}},Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n      <div style="display: flex; gap: 16px; justify-content: center; flex-direction: column;">\n        <mas-search-bar placeholder=\'Search "Suggestion"\'></mas-search-bar>\n        <mas-search-bar placeholder=\'Search "Suggestion"\' query="What\'s Design System?"></mas-search-bar>\n      </div>\n    `\n  })\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Overview"]}}]);