"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[8420,4014],{"./projects/components/src/lib/avatar/avatar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>MasAvatar});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let MasAvatar=class MasAvatar{constructor(){this.icon=null}static#_=this.propDecorators={UrlImg:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],Initial:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};MasAvatar=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"mas-avatar",template:'\n  <div class="avatar avatar-{{size}} avatar-stroke" >\n    <ng-container *ngIf="type === \'Image\'">\n      <img src="{{UrlImg}}" alt="Avatar" />\n    </ng-container>\n    <i class="{{icon}}" *ngIf="type === \'Icon\'"></i>\n    <ng-container *ngIf="type === \'Initial\'"><p>{{Initial.toUpperCase()}}</p></ng-container>\n  </div>\n  '})],MasAvatar)},"./projects/components/src/lib/avatar/avatar.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MasAvatarModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_avatar_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/components/src/lib/avatar/avatar.component.ts");let MasAvatarModule=class MasAvatarModule{};MasAvatarModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],exports:[_avatar_component__WEBPACK_IMPORTED_MODULE_3__.n],declarations:[_avatar_component__WEBPACK_IMPORTED_MODULE_3__.n]})],MasAvatarModule)},"./projects/showcases/components/stories/avatar/avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_avatar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/showcases/components/stories/avatar/avatar.stories.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_avatar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatars",children:"Avatars"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Size"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"avatar"})," is a representation of the user. It allows the user to personalize themselves in the interface and link them to content"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),": The size of the avatar. Accepts values: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'XS'"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'S'"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'M'"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'L'"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type"}),": The variant of the avatar. Accepts values: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'Image'"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'Icon'"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'Initial'"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"initial"}),": The initial letter or character displayed in the avatar when the type is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'Initial'"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Image"}),": Used to display an image in the avatar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Icon"}),": Used to display an icon in the avatar."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_avatar_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To incorporate the Avatar component into your application, simply provide the necessary inputs to the component. The Avatar component offers a range of customizable properties such as type, size, background color, border color, border weight, and border radius, allowing you to tailor the appearance of the avatar to suit your application's requirements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The component comes in different Type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Image"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Icon"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Initial"}),"  and different Size ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Extra Small"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Small"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Medium"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Large"})," :"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Avatar"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_avatar_stories__WEBPACK_IMPORTED_MODULE_2__.ImageSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Icon"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_avatar_stories__WEBPACK_IMPORTED_MODULE_2__.IconSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Initial"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_avatar_stories__WEBPACK_IMPORTED_MODULE_2__.Type}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Best practices are available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://zeroheight.com/9b39bb2a0/p/812a2f-avatar/b/964f27",rel:"nofollow",children:"here"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback--contact",children:"Feedback & contact"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Help us improve this pattern by providing feedback, asking questions, and leaving any other comments ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bouygues-construction/design-system-bycn/issues/new",rel:"nofollow",children:"here"})]}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_projects_workspace_design_system_bycn_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./projects/showcases/components/stories/avatar/avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconSize:()=>IconSize,ImageSize:()=>ImageSize,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),projects_components_src_lib_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/components/src/lib/avatar/avatar.component.ts"),projects_components_src_lib_avatar_avatar_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/components/src/lib/avatar/avatar.module.ts");const Img="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a",__WEBPACK_DEFAULT_EXPORT__={title:"Components / Indicators / Avatar",component:projects_components_src_lib_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.n,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,projects_components_src_lib_avatar_avatar_module__WEBPACK_IMPORTED_MODULE_3__.Z]})],parameters:{docs:{description:{component:"The `Avatar` component represents an avatar with different variants (Avatar, Icon, Initial) and sizes (XS, S, M, L)."}}},render:({...args})=>({props:args,template:'\n            <mas-avatar\n              [type]="type"\n              [size]="size"\n              [icon]="icon"\n              [UrlImg]="UrlImg"\n              [Initial]="Initial"\n            ></mas-avatar>\n    '}),argTypes:{UrlImg:{type:{name:"string",required:!1},description:"The image of the Avatar",defaultValue:Img,control:"text"},Initial:{type:{name:"string",required:!1},description:"The lettre intial of the Avatar",defaultValue:"A",control:"text"},type:{type:{name:"string",required:!1},description:"The variant of the avatar",defaultValue:"Icon",control:"select",options:["Image","Icon","Initial"]},size:{type:{name:"string",required:!1},description:"The size of the avatar",defaultValue:"M",control:"radio",options:["XS","S","M","L"]},icon:{type:{name:"string",required:!1},description:"The name of the icon .",defaultValue:"mas-user-outlined mas-people--outlined mas-icon",control:"select",options:["","mas-user-outlined mas-people--outlined mas-icon","mas-user-circle-outlined mas-people--outlined mas-icon","mas-user-circle-minus-outlined mas-people--outlined mas-icon","mas-user-circle-gear-outlined mas-people--outlined mas-icon","mas-user-switch-outlined mas-people--outlined mas-icon"]}}},Default={args:{type:"Icon",size:"M",icon:"mas-user-outlined mas-people--outlined mas-icon",UrlImg:Img,Initial:"A"}},ImageSize={render:()=>({template:'\n      <div style="display: flex; gap: 20px;align-items: end">\n        <mas-avatar type="Image" size="XS" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="S" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="M" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="L" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n      </div>\n    '})},IconSize={render:()=>({template:'\n      <div style="display: flex; gap: 20px;align-items: end">\n        <mas-avatar type="Icon" size="XS" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="S" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="M" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="L" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n      </div>\n\n    '})},Type={render:()=>({template:'\n      <div style="display: flex; gap: 20px; align-items: end">\n        <mas-avatar type="Initial" size="XS" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="S" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="M" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="L" Initial="A"></mas-avatar>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'Icon',\n    size: 'M',\n    icon: 'mas-user-outlined mas-people--outlined mas-icon',\n    UrlImg: Img,\n    Initial: 'A'\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Basic : A avatar with default settings",...Default.parameters?.docs?.description}}},ImageSize.parameters={...ImageSize.parameters,docs:{...ImageSize.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n      <div style="display: flex; gap: 20px;align-items: end">\n        <mas-avatar type="Image" size="XS" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="S" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="M" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n        <mas-avatar type="Image" size="L" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>\n      </div>\n    `\n  })\n}',...ImageSize.parameters?.docs?.source}}},IconSize.parameters={...IconSize.parameters,docs:{...IconSize.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n      <div style="display: flex; gap: 20px;align-items: end">\n        <mas-avatar type="Icon" size="XS" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="S" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="M" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n        <mas-avatar type="Icon" size="L" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>\n      </div>\n\n    `\n  })\n}',...IconSize.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n      <div style="display: flex; gap: 20px; align-items: end">\n        <mas-avatar type="Initial" size="XS" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="S" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="M" Initial="A"></mas-avatar>\n        <mas-avatar type="Initial" size="L" Initial="A"></mas-avatar>\n      </div>\n    `\n  })\n}',...Type.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ImageSize","IconSize","Type"]}}]);