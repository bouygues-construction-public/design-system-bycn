"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[7476,7854,1832,2724],{"./projects/components/src/lib/toast/toast.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>MasToastModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");var toast_service=__webpack_require__("./projects/components/src/lib/toast/toast.service.ts");let MasToast=class MasToast{constructor(toastService){this.toastService=toastService,this.toastShow=!1,this.show=!1,this.description="Description for the toast ",this.closeBtn=!0,this.actionBtn=!1,this.buttonLabel="Button 1",this.actionButton=new core.EventEmitter}action(){this.actionButtonClickCallback()}ngOnInit(){this.show=!1,this.toastShow=!1,this.toastService.clearToast(),this.toastService.getToastObservable().subscribe((toastBody=>{this.show=!1,this.toastShow=!1,toastBody&&(this.description=toastBody.description,this.actionBtn=toastBody.actionButton,this.actionBtn&&(this.actionButtonClickCallback=toastBody.actionButton.action.bind(this),this.buttonLabel=toastBody.actionButton.label),this.closeBtn=void 0===toastBody.closeBtn||toastBody.closeBtn,setTimeout((()=>{this.show=!0,this.toastShow=!0,(this.timeoutId1||this.timeoutId2)&&(clearTimeout(this.timeoutId1),clearTimeout(this.timeoutId2)),this.timeoutId1=setTimeout((()=>{this.closeToast()}),1e4)}),5))}))}closeToast(){this.toastShow=!1,this.timeoutId2=setTimeout((()=>{this.show=!1,this.toastService.clearToast()}),300)}static#_=this.ctorParameters=()=>[{type:toast_service.f}];static#_2=this.propDecorators={actionButton:[{type:core.Output}]}};MasToast=(0,tslib_es6.Cg)([(0,core.Component)({selector:"mas-toast",template:'<div class="mas-toast"  [ngClass]="{\'toast-show \':toastShow, \'toast-hide \': !toastShow}" *ngIf="show">\r\n    <div class="mas-toast-content">\r\n        <div class="mas-toast-label">\r\n            {{description}}\r\n        </div>\r\n        <div class="mas-toast-buttons" *ngIf="actionBtn || closeBtn">\r\n            <div *ngIf="actionBtn" class="mas-toast-action-button" >\r\n                <div (click)="action()"  class="text-button">\r\n                    {{buttonLabel}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf="closeBtn" class="mas-toast-close"  (click)="closeToast()">\r\n                <i class="mas-x-outlined mas-math-and-finance--outlined " ></i> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'})],MasToast);let MasToastModule=class MasToastModule{};MasToastModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],exports:[MasToast],declarations:[MasToast]})],MasToastModule)},"./projects/components/src/lib/toast/toast.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ToastService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");let ToastService=class ToastService{constructor(){this.toastSubject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.B,this.alertState=this.toastSubject.asObservable()}showToast(message){this.clearToast(),this.toastSubject.next(message)}getToastObservable(){return this.toastSubject.asObservable()}clearToast(){this.toastSubject.next(null)}};ToastService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({providedIn:"root"})],ToastService)},"./projects/showcases/components/stories/mas-toast/toast-service/alert-example.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dU:()=>CloseButtonToastServiceExample,ki:()=>DefaultToastServiceExample,lO:()=>ActionButtonToastServiceExample});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),projects_components_src_lib_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./projects/components/src/lib/toast/toast.service.ts");let DefaultToastServiceExample=class DefaultToastServiceExample{constructor(toastService){this.toastService=toastService,this.actionButton={label:"Action",action:this.myFunction}}showCustomToast(){this.toastService.showToast({description:"Description for toast",closeBtn:!0,actionButton:this.actionButton})}myFunction(){alert("Yes!")}static#_=this.ctorParameters=()=>[{type:projects_components_src_lib_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.f}]};DefaultToastServiceExample=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"default-toast-sevice-example",template:'\n  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 120px;  padding: 8px 16px 8px 16px;\n  cursor: pointer;  margin:10px" \n  class="mas-typo_body-3"\n   (click)="showCustomToast()">\n   Show Toast\n   \n   </button> \n    <mas-toast> </mas-toast>\n  '})],DefaultToastServiceExample);let ActionButtonToastServiceExample=class ActionButtonToastServiceExample{constructor(toastService){this.toastService=toastService,this.actionButton={label:"Action",action:this.myFunction}}showCustomToast(){this.toastService.showToast({description:"Description for toast",closeBtn:!1,actionButton:this.actionButton})}showCustomToast2(){this.toastService.showToast({description:"Description for toast",closeBtn:!1})}myFunction(){alert("Yes!")}static#_=this.ctorParameters=()=>[{type:projects_components_src_lib_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.f}]};ActionButtonToastServiceExample=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"action-button-toast-sevice-example",template:'\n  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;\n  cursor: pointer;  margin:10px" \n  class="mas-typo_body-3"\n   (click)="showCustomToast()">\n   Show Toast With Action Button \n   </button> \n   <br/>\n   <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;\n   cursor: pointer;  margin:10px" \n   class="mas-typo_body-3"\n    (click)="showCustomToast2()">\n    Show Toast Without Action Button \n    </button>\n\n    <mas-toast> </mas-toast>\n  '})],ActionButtonToastServiceExample);let CloseButtonToastServiceExample=class CloseButtonToastServiceExample{constructor(toastService){this.toastService=toastService,this.actionButton={label:"Action",action:this.myFunction}}showCustomToast(){this.toastService.showToast({description:"Description for toast",closeBtn:!0})}showCustomToast2(){this.toastService.showToast({description:"Description for toast",closeBtn:!1})}myFunction(){alert("Yes!")}static#_=this.ctorParameters=()=>[{type:projects_components_src_lib_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.f}]};CloseButtonToastServiceExample=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"close-button-toast-sevice-example",template:'\n  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;\n  cursor: pointer;  margin:10px" \n  class="mas-typo_body-3"\n   (click)="showCustomToast()">\n   Show Toast Without Close Button \n   </button> \n   <br/>\n   <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;\n   cursor: pointer;  margin:10px" \n   class="mas-typo_body-3"\n    (click)="showCustomToast2()">\n    Show Toast Without Close Button \n    </button>\n    \n    <mas-toast> </mas-toast>\n  '})],CloseButtonToastServiceExample)},"./projects/showcases/components/stories/mas-toast/mas-toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_mas_toast_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/showcases/components/stories/mas-toast/mas-toast.stories.ts"),_toast_service_action_button_toast_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/showcases/components/stories/mas-toast/toast-service/action-button-toast.stories.ts"),_toast_service_close_button_toast_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/showcases/components/stories/mas-toast/toast-service/close-button-toast.stories.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_mas_toast_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"mastoast",children:"MasToast"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#properties",children:"Properties"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasToast"})," is used to give a user information on the state of the system and to provide non-disruptive feedback about the outcome of an event.\r\nThe toast gives instructions on how to move forward or resolve issues."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_mas_toast_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasToast"})," are displayed by calling the showToast method provided by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ToastService"}),".\r\nThe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasToast"})," appears at the bottom of the interface above the navigation bar and in front of the main content. It can be almost the entire width of the page, centered or aligned to the left while maintaining a small margin."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasToast"})," disappears after 10 seconds (if there is no action button) or when the user clicks on the closed button."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<button (click)="showCustomToast()">  info  </button> <br/>\r\n <mas-toast> </mas-toast>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"  constructor(private toastService: ToastService) { }\r\n  actionButton  = { label: 'Action', action: this.myFunction }\r\n\r\n  showCustomToast(){\r\n    this.toastService.showToast({description:'description for toast',closeBtn : true , actionButton : this.actionButton}) ;\r\n  }\r\n    \r\n  myFunction() : any{\r\n   alert(\"Yes!\")\r\n  }\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showToast"})," takes the following parameters:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"description"})," (required): A string providing the description or content of the toast."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"actionButton"})," (optional): An optional action button for the toast, defined by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"actionButton"})," variable. In this case, the action button has a label of 'Button' and triggers the myFunction method when clicked."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"closeBtn"})," (optional): A boolean flag specifying whether to include a close button for the toast. The default value is true."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The only mandatory parameter is the description, with optional parameters for actionButton and a close button, each having default values. This allows for flexible usage with minimal required input."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MasToast"}),", you can pass the desired inputs to the component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"action-button",children:"Action Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The button can be used to allow an action related to what has just been performed. It can be used as secondary navigation, linked to the user context."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pay attention :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"only include an action in toast if the same action is available elsewhere on the page, like relaoad a page or undo an action\r\nnot to have the cancel or close action to dismiss the toast.\r\nWhithout user action, toast will be dissmiss after 10 seconds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_toast_service_action_button_toast_stories__WEBPACK_IMPORTED_MODULE_3__.ToastWithActionButton}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"close-button",children:"Close Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"lose button is used to dismiss the toast component at the user's request. This is not a mandatory element. Indeed, toast will be dissmiss after 10 seconds whithout user action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_toast_service_close_button_toast_stories__WEBPACK_IMPORTED_MODULE_4__.ToastWithCloseButton}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Best practices are available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://zeroheight.com/9b39bb2a0/p/99e869-toast/b/75c0d1",rel:"nofollow",children:"here"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback--contact",children:"Feedback & contact"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Help us improve this pattern by providing feedback, asking questions, and leaving any other comments ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bouygues-construction/design-system-bycn/issues/new",rel:"nofollow",children:"here"})]}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./projects/showcases/components/stories/mas-toast/mas-toast.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),projects_components_src_lib_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/components/src/lib/toast/toast.module.ts"),_toast_service_alert_example_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/showcases/components/stories/mas-toast/toast-service/alert-example.component.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_toast_service_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.ki,title:"Components / Overlays / Toast",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_toast_service_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.ki],imports:[projects_components_src_lib_toast__WEBPACK_IMPORTED_MODULE_2__.T]})],render:({...args})=>({props:args})},Default={args:{},render:()=>({template:'\n      <div style="height: 200px">\n        <default-toast-sevice-example></default-toast-sevice-example>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => ({\n    template: `\n      <div style="height: 200px">\n        <default-toast-sevice-example></default-toast-sevice-example>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./projects/showcases/components/stories/mas-toast/toast-service/action-button-toast.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToastWithActionButton:()=>ToastWithActionButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_alert_example_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/showcases/components/stories/mas-toast/toast-service/alert-example.component.ts"),projects_components_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/components/src/lib/toast/toast.module.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.lO,title:"Components / Overlays / Toast",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.lO],imports:[projects_components_src_public_api__WEBPACK_IMPORTED_MODULE_2__.T]})],render:({...args})=>({template:'\n      <div style="height: 300px">\n        <action-button-toast-sevice-example></action-button-toast-sevice-example>\n      </div>\n    ',props:args})},ToastWithActionButton={args:{}};ToastWithActionButton.parameters={...ToastWithActionButton.parameters,docs:{...ToastWithActionButton.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...ToastWithActionButton.parameters?.docs?.source}}};const __namedExportsOrder=["ToastWithActionButton"]},"./projects/showcases/components/stories/mas-toast/toast-service/close-button-toast.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToastWithCloseButton:()=>ToastWithCloseButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_alert_example_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/showcases/components/stories/mas-toast/toast-service/alert-example.component.ts"),projects_components_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/components/src/lib/toast/toast.module.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.dU,title:"Components / Overlays / Toast",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_alert_example_component__WEBPACK_IMPORTED_MODULE_1__.dU],imports:[projects_components_src_public_api__WEBPACK_IMPORTED_MODULE_2__.T]})],render:({...args})=>({props:args,template:'\n      <div style="height: 300px">\n        <close-button-toast-sevice-example></close-button-toast-sevice-example>\n      </div>\n    '})},ToastWithCloseButton={args:{}};ToastWithCloseButton.parameters={...ToastWithCloseButton.parameters,docs:{...ToastWithCloseButton.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...ToastWithCloseButton.parameters?.docs?.source}}};const __namedExportsOrder=["ToastWithCloseButton"]}}]);