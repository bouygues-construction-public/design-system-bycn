"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[8678],{"./projects/showcases/components/stories/mas-popover/mas-popover.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Directive:()=>Directive,PopoverPlacement:()=>PopoverPlacement,WithButton:()=>WithButton,WithTitle:()=>WithTitle,WithoutButton:()=>WithoutButton,WithoutTitle:()=>WithoutTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mas_popover_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let MasPopOver=class MasPopOver{constructor(){this.text="",this.title="",this.content="",this.placement="bottom",this.width="250px",this.positionsT=["top","bottom","right","left"],this.positionsR=["right","left","bottom","top"],this.positionsTRComp=["top-right","bottom-right","right","left"],this.positionsTLComp=["top-left","bottom-left","right","left"],this.positionsBRComp=["bottom-right","top-right","right","left"],this.positionsBLComp=["bottom-left","top-left","right","left"],this.positions=[],this.notAvailblePositions=[],this.isVisible=!1,this.mouseOnpopOver=!1,this.mouseOnTarget=!1,this.finalPosition=!1}get classes(){return{"mas-popover-ready":!0}}ngOnInit(){this.originalPlacement=this.placement,this.initPositionsPriorities()}initPositionsPriorities(){"top"!==this.originalPlacement&&"bottom"!==this.originalPlacement||(this.positions=this.positionsT),"right"!==this.originalPlacement&&"left"!==this.originalPlacement||(this.positions=this.positionsR),"top-right"===this.originalPlacement&&(this.positions=this.positionsTRComp),"top-left"===this.originalPlacement&&(this.positions=this.positionsTLComp),"bottom-right"===this.originalPlacement&&(this.positions=this.positionsBRComp),"bottom-left"===this.originalPlacement&&(this.positions=this.positionsBLComp)}showPopover(){this.isVisible=!0}hidePopover(){setTimeout((()=>{this.mouseOnTarget||this.mouseOnpopOver||(this.isVisible=!1)}),30)}focusOnPopOver(){this.mouseOnpopOver=!0}LostfocusOnPopOver(){this.mouseOnpopOver=!1}focusOnTarget(event){this.originalPlacement=this.placement,this.mouseOnTarget=!0,this.placementToCheck=this.originalPlacement,this.isVisible||(this.initPositionsPriorities(),this.notAvailblePositions=[],this.isVisible=!0,setTimeout((()=>{this.spanRect=event.target.getBoundingClientRect(),this.popover=document.querySelector(".mas-popover"),this.calculatePopoverPosition()}),5))}LostfocusOnTarget(){this.mouseOnTarget=!1}close(){this.LostfocusOnPopOver(),this.LostfocusOnTarget(),this.hidePopover()}checkNewPlacement(placement){this.placementToCheck=placement,this.placement=this.placementToCheck,setTimeout((()=>{this.calculatePopoverPosition()}),5)}getOtherPlacements(){let availblePositions=this.positions.filter((item=>!this.notAvailblePositions.includes(item)));if(availblePositions.length>0){let newPLacement=availblePositions[0];this.checkNewPlacement(newPLacement)}}calculatePopoverPosition(){this.container=document.querySelector(".mas-popover-container"),this.finalPosition=!1,this.placement=this.placementToCheck,this.arrowRect=document.querySelector(".arrow").getBoundingClientRect(),"top-right"===this.placementToCheck||"bottom-right"===this.placementToCheck?this.arrowRect.left-this.popover.clientWidth<0?("top-right"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom-right"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top-right"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top-right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom-right"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom-right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"top-left"===this.placementToCheck||"bottom-left"===this.placementToCheck?window.innerWidth-this.arrowRect.right-this.popover.clientWidth<0?("top-left"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom-left"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top-left"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top-left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom-left"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom-left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"top"===this.placementToCheck||"bottom"===this.placementToCheck?this.arrowRect.left-this.popover.clientWidth/2<0?("top"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"right"!==this.placementToCheck&&"left"!==this.placementToCheck||(this.arrowRect.top-this.popover.clientHeight/2<0||this.arrowRect.bottom-this.popover.clientHeight/2<0?("right"===this.placementToCheck&&(this.positions=this.positionsT),this.getOtherPlacements()):("right"===this.placementToCheck&&(window.innerWidth-this.spanRect.right-this.popover.clientWidth<0?(this.notAvailblePositions.push("right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"left"===this.placementToCheck&&(this.spanRect.left-this.popover.clientWidth<0?(this.notAvailblePositions.push("left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))))}displayFinalPopOver(){this.placementToDisplay=this.placement,this.placement=this.originalPlacement,setTimeout((()=>{this.popover.style.opacity="1",this.popover.style.transitionDuration="0.25s"}),5)}static#_=this.propDecorators={text:[{type:core.Input}],title:[{type:core.Input}],content:[{type:core.Input}],placement:[{type:core.Input}],buttonLabel:[{type:core.Input}],width:[{type:core.Input}]}};MasPopOver=(0,tslib_es6.Cg)([(0,core.Component)({selector:"mas-popover",template:'<div class="mas-popover-container" style="position: relative;display: inline-block; background-color: rgb(255, 255, 255);margin: 0px;">\r\n  <span [innerHTML]="text" (mouseenter)="focusOnTarget($event);showPopover()" (mouseleave)="LostfocusOnTarget();hidePopover()"></span>  \r\n  <div #masPopover class="mas-popover" *ngIf="isVisible" [ngClass]="placementToDisplay" [style.width]="width" (mouseenter)="focusOnPopOver();showPopover()" (mouseleave)="LostfocusOnPopOver();hidePopover()">\r\n    <div class="padding-bar"></div> \r\n    <div class="arrow"></div>\r\n        <div class="mas-popover-inner">\r\n          <div class="mas-popover-title" *ngIf="title">{{ title }}</div>\r\n          <div class="mas-popover-content" *ngIf="content">{{ content }}</div>\r\n          <div  class="mas-popover-button">\r\n            <div (click)="close()" *ngIf="buttonLabel" class="text-button text-right">\r\n                {{buttonLabel}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'})],MasPopOver);let MasPopoverDirective=class MasPopoverDirective{constructor(el,renderer){this.el=el,this.renderer=renderer,this.title="",this.content="",this.placement="bottom",this.width="200px",this.positionsT=["top","bottom","right","left"],this.positionsR=["right","left","bottom","top"],this.positionsTRComp=["top-right","bottom-right","right","left"],this.positionsTLComp=["top-left","bottom-left","right","left"],this.positionsBRComp=["bottom-right","top-right","right","left"],this.positionsBLComp=["bottom-left","top-left","right","left"],this.positions=[],this.notAvailblePositions=[],this.isVisible=!1,this.mouseOnpopOver=!1,this.mouseOnTarget=!1,this.finalPosition=!1}ngOnInit(){this.originalPlacement=this.placement,this.el.nativeElement.addEventListener("mouseleave",(()=>{this.LostfocusOnTarget(),this.hidePopover()})),this.el.nativeElement.addEventListener("mouseenter",(()=>{this.container=this.el.nativeElement,this.focusOnTarget()})),this.initPositionsPriorities()}initPositionsPriorities(){"top"!==this.originalPlacement&&"bottom"!==this.originalPlacement||(this.positions=this.positionsT),"right"!==this.originalPlacement&&"left"!==this.originalPlacement||(this.positions=this.positionsR),"top-right"===this.originalPlacement&&(this.positions=this.positionsTRComp),"top-left"===this.originalPlacement&&(this.positions=this.positionsTLComp),"bottom-right"===this.originalPlacement&&(this.positions=this.positionsBRComp),"bottom-left"===this.originalPlacement&&(this.positions=this.positionsBLComp)}showPopover(){this.isVisible=!0}hidePopover(){this.mouseOnTarget||this.mouseOnpopOver||(this.deletePopOver(),this.isVisible=!1)}focusOnPopOver(){this.mouseOnpopOver=!0}LostfocusOnPopOver(){this.mouseOnpopOver=!1}LostfocusOnTarget(){this.mouseOnTarget=!1}deletePopOver(){let popover=document.getElementById("myPopover");this.renderer.removeChild(popover?.parentNode,popover)}focusOnTarget(){this.originalPlacement=this.placement,this.placementToCheck=this.originalPlacement,this.renderer.addClass(this.el.nativeElement,"mas-popover-container"),this.renderer.addClass(this.el.nativeElement,"mas-popover-container"),this.mouseOnTarget=!0,this.isVisible||(this.createPopover(),this.initPositionsPriorities(),this.notAvailblePositions=[],this.isVisible=!0,this.el.nativeElement.style.position="relative",this.el.nativeElement.style.display="inline-block",setTimeout((()=>{}),1))}createPopover(){let popover=this.renderer.createElement("div");this.renderer.addClass(popover,"mas-popover"),this.renderer.setAttribute(popover,"id","myPopover"),this.renderer.addClass(popover,this.originalPlacement),this.renderer.appendChild(this.el.nativeElement,popover),this.renderer.setStyle(popover,"width",this.width),popover.addEventListener("mouseleave",(()=>{this.LostfocusOnPopOver(),this.hidePopover()})),popover.addEventListener("mouseenter",(()=>{this.focusOnPopOver(),this.showPopover()}));const paddingBar=this.renderer.createElement("div");this.renderer.addClass(paddingBar,"padding-bar"),this.renderer.appendChild(popover,paddingBar);const arrow=this.renderer.createElement("div");this.renderer.addClass(arrow,"arrow"),this.renderer.appendChild(popover,arrow);const innerDiv=this.renderer.createElement("div");if(this.renderer.addClass(innerDiv,"mas-popover-inner"),this.renderer.appendChild(popover,innerDiv),this.title){const titleDiv=this.renderer.createElement("div");this.renderer.addClass(titleDiv,"mas-popover-title"),this.renderer.appendChild(titleDiv,this.renderer.createText(this.title)),this.renderer.appendChild(innerDiv,titleDiv)}if(this.content){const contentDiv=this.renderer.createElement("div");this.renderer.addClass(contentDiv,"mas-popover-content"),this.renderer.appendChild(contentDiv,this.renderer.createText(this.content)),this.renderer.appendChild(innerDiv,contentDiv)}if(this.buttonLabel){const buttonDiv=this.renderer.createElement("div");this.renderer.addClass(buttonDiv,"mas-popover-button");const button=this.renderer.createElement("div");this.renderer.appendChild(button,this.renderer.createText(this.buttonLabel)),this.renderer.addClass(button,"text-button"),this.renderer.addClass(button,"text-button"),this.renderer.listen(button,"click",(()=>this.close())),this.renderer.appendChild(buttonDiv,button),this.renderer.appendChild(innerDiv,buttonDiv)}this.renderer.setStyle(popover,"height","fit-content"),setTimeout((()=>{this.calculatePopoverPosition()}),50)}calculatePopoverPosition(){this.finalPosition=!1,this.placement=this.placementToCheck,this.arrowRect=document.querySelector(".arrow").getBoundingClientRect(),this.popover=document.getElementById("myPopover"),this.spanRect=this.el.nativeElement.getBoundingClientRect(),"top-right"===this.placementToCheck||"bottom-right"===this.placementToCheck?this.arrowRect.left-this.popover.clientWidth<0?("top-right"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom-right"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top-right"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top-right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom-right"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom-right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"top-left"===this.placementToCheck||"bottom-left"===this.placementToCheck?window.innerWidth-this.arrowRect.right-this.popover.clientWidth<0?("top-left"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom-left"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top-left"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top-left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom-left"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom-left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"top"===this.placementToCheck||"bottom"===this.placementToCheck?this.arrowRect.left-this.popover.clientWidth/2<0?("top"===this.placementToCheck&&(this.positions=this.positionsTLComp),"bottom"===this.placementToCheck&&(this.positions=this.positionsBLComp),this.getOtherPlacements()):("top"===this.placementToCheck&&(this.spanRect.top-this.popover.clientHeight<0?(this.notAvailblePositions.push("top"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"bottom"===this.placementToCheck&&(window.innerHeight-this.spanRect.bottom-this.popover.clientHeight<0?(this.notAvailblePositions.push("bottom"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))):"right"!==this.placementToCheck&&"left"!==this.placementToCheck||(this.arrowRect.top-this.popover.clientHeight/2<0||this.arrowRect.bottom-this.popover.clientHeight/2<0?("right"===this.placementToCheck&&(this.positions=this.positionsT),this.getOtherPlacements()):("right"===this.placementToCheck&&(window.innerWidth-this.spanRect.right-this.popover.clientWidth<0?(this.notAvailblePositions.push("right"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver())),"left"===this.placementToCheck&&(this.spanRect.left-this.popover.clientWidth<0?(this.notAvailblePositions.push("left"),this.getOtherPlacements()):(this.placement=this.placementToCheck,this.displayFinalPopOver()))))}checkNewPlacement(placement){this.placementToCheck=placement,this.placement=this.placementToCheck,setTimeout((()=>{this.calculatePopoverPosition()}),5)}getOtherPlacements(){let availblePositions=this.positions.filter((item=>!this.notAvailblePositions.includes(item)));if(availblePositions.length>0){let newPLacement=availblePositions[0];this.checkNewPlacement(newPLacement)}}displayFinalPopOver(){this.placementToDisplay=this.placement,this.placement=this.originalPlacement,this.renderer.removeClass(this.popover,this.originalPlacement),this.renderer.addClass(this.popover,this.placementToDisplay),setTimeout((()=>{this.popover.style.opacity="1",this.popover.style.transitionDuration="0.25s"}),100)}close(){this.LostfocusOnPopOver(),this.LostfocusOnTarget(),this.hidePopover()}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}];static#_2=this.propDecorators={title:[{type:core.Input}],content:[{type:core.Input}],placement:[{type:core.Input}],buttonLabel:[{type:core.Input}],width:[{type:core.Input}]}};MasPopoverDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[MasPopover]"})],MasPopoverDirective);const mas_popover_stories={title:"Components / Overlays / Popover",component:MasPopOver,decorators:[(0,dist.moduleMetadata)({declarations:[MasPopOver,MasPopoverDirective]})],argTypes:{text:{type:{name:"string",required:!0},description:"The text to hover "},title:{type:{name:"string",required:!1},description:"The title of the Popover"},content:{type:{name:"string",required:!1},description:"The body of the Popover"},buttonLabel:{type:{name:"string",required:!1},description:"the action button inside the popover to close the Popover"},placement:{type:{name:"string",required:!1},description:"Placement to display the Popover",defaultValue:"bottom",control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]},width:{type:{name:"boolean",required:!1},description:"th wdith of the Popover. Default: 200px",defaultValue:"200px",control:"text"}},parameters:{docs:{description:{component:"Buttons serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation."}}},render:({...args})=>({props:args,template:'\n    <div style="padding:200px 400px">\n      <mas-popover\n        [text]="text" \n        [title]="title" \n        [content]="content" \n        [placement]="placement"\n        [buttonLabel]="buttonLabel"\n        [width]="width">\n      </mas-popover>\n    <div>\n  \n              '})},Default={args:{text:"Hover me!",title:"Popover Title",content:"Popover can be used to provide additional content on an element or for discovery.",placement:"bottom-left",buttonLabel:"Got it",width:"250px"}},WithTitle={render:()=>({template:'\n    <div style="padding:25px 150px 150px">\n       <mas-popover\n          [text]="\'Popover with title\'" \n          [title]="\'Popover title\'" \n          [content]="\'Popover can be used to provide additional content on an element or for discovery.\'" \n          [placement]="\'bottom\'"\n          [buttonLabel]="\'Got it\'"\n          >\n       </mas-popover>\n    </div>\n    '})},WithoutTitle={render:()=>({template:"\n \n  <mas-popover\n  [text]=\"'Popover without title'\" \n  [content]=\"'Popover can be used to provide additional content on an element or for discovery.'\" \n  [placement]=\"'bottom'\"\n  [buttonLabel]=\"'Got it'\"\n  >\n</mas-popover>\n\n \n  "})},WithButton={render:()=>({template:'\n  <div style="padding:25px 150px 150px">\n     <mas-popover\n        [text]="\'Popover with button\'" \n        [title]="\'Popover title\'" \n        [content]="\'Popover content\'" \n        [placement]="\'bottom\'"\n        [buttonLabel]="\'Got it\'"\n        >\n     </mas-popover>\n  </div>\n  '})},WithoutButton={render:()=>({template:"\n \n  <mas-popover\n  [text]=\"'Popover without button'\" \n  [title]=\"'Popover title'\" \n  [content]=\"'Popover content'\" \n  [placement]=\"'bottom'\"\n  >\n</mas-popover>\n\n \n  "})},Directive={render:()=>({template:'\n  <div  MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"\n  style="margin:100px 400px 150px"> \n  Directive  </div>\n  '})},PopoverPlacement={render:()=>({template:'\n      <div style="margin: 150px 250px">\n        <div style="display: flex; justify-content: space-between">\n          <div MasPopover title="Popover content" content="Popover Content" placement="top" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP\n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="top-left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP LEFT\n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="top-right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP RIGHT\n          </div>\n        </div>\n        <div style="display: flex; justify-content: space-between">\n          <div MasPopover title="Popover content" content="Popover Content" placement="right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >RIGHT \n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >LEFT \n        </div>\n        </div>\n        <div style="display: flex; justify-content: space-between">\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM \n          </div>\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom-right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM RIGHT\n          </div>\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom-left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM LEFT\n          </div>\n        </div>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"Basic : A button with default settings",...Default.parameters?.docs?.description}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n    <div style="padding:25px 150px 150px">\n       <mas-popover\n          [text]="\'Popover with title\'" \n          [title]="\'Popover title\'" \n          [content]="\'Popover can be used to provide additional content on an element or for discovery.\'" \n          [placement]="\'bottom\'"\n          [buttonLabel]="\'Got it\'"\n          >\n       </mas-popover>\n    </div>\n    `\n  })\n}',...WithTitle.parameters?.docs?.source}}},WithoutTitle.parameters={...WithoutTitle.parameters,docs:{...WithoutTitle.parameters?.docs,source:{originalSource:"{\n  render: () => ({\n    template: `\n \n  <mas-popover\n  [text]=\"'Popover without title'\" \n  [content]=\"'Popover can be used to provide additional content on an element or for discovery.'\" \n  [placement]=\"'bottom'\"\n  [buttonLabel]=\"'Got it'\"\n  >\n</mas-popover>\n\n \n  `\n  })\n}",...WithoutTitle.parameters?.docs?.source}}},WithButton.parameters={...WithButton.parameters,docs:{...WithButton.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n  <div style="padding:25px 150px 150px">\n     <mas-popover\n        [text]="\'Popover with button\'" \n        [title]="\'Popover title\'" \n        [content]="\'Popover content\'" \n        [placement]="\'bottom\'"\n        [buttonLabel]="\'Got it\'"\n        >\n     </mas-popover>\n  </div>\n  `\n  })\n}',...WithButton.parameters?.docs?.source}}},WithoutButton.parameters={...WithoutButton.parameters,docs:{...WithoutButton.parameters?.docs,source:{originalSource:"{\n  render: () => ({\n    template: `\n \n  <mas-popover\n  [text]=\"'Popover without button'\" \n  [title]=\"'Popover title'\" \n  [content]=\"'Popover content'\" \n  [placement]=\"'bottom'\"\n  >\n</mas-popover>\n\n \n  `\n  })\n}",...WithoutButton.parameters?.docs?.source}}},Directive.parameters={...Directive.parameters,docs:{...Directive.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n  <div  MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"\n  style="margin:100px 400px 150px"> \n  Directive  </div>\n  `\n  })\n}',...Directive.parameters?.docs?.source}}},PopoverPlacement.parameters={...PopoverPlacement.parameters,docs:{...PopoverPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    template: `\n      <div style="margin: 150px 250px">\n        <div style="display: flex; justify-content: space-between">\n          <div MasPopover title="Popover content" content="Popover Content" placement="top" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP\n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="top-left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP LEFT\n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="top-right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >TOP RIGHT\n          </div>\n        </div>\n        <div style="display: flex; justify-content: space-between">\n          <div MasPopover title="Popover content" content="Popover Content" placement="right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >RIGHT \n          </div>\n          <div MasPopover title="Popover content" content="Popover Content" placement="left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >LEFT \n        </div>\n        </div>\n        <div style="display: flex; justify-content: space-between">\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM \n          </div>\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom-right" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM RIGHT\n          </div>\n          <div \n            MasPopover title="Popover content" content="Popover Content" placement="bottom-left" buttonLabel="Got it"\n            style="color: #0C0C0D; \n            borderRadius: 8px;  \n            border: 1px solid #D7D7DB;  \n            width: fit-content;\n            padding: 8px 16px 8px 16px;\n            cursor: pointer; \n            margin:10px"\n            >BOTTOM LEFT\n          </div>\n        </div>\n      </div>\n    `\n  })\n}',...PopoverPlacement.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithTitle","WithoutTitle","WithButton","WithoutButton","Directive","PopoverPlacement"]}}]);