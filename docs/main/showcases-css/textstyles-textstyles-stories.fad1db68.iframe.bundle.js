"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[22],{"./projects/showcases/css/stories/guidelines/textstyles/textstyles.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:()=>Body,Captions:()=>Captions,Displays:()=>Displays,Headines:()=>Headines,Overline:()=>Overline,Overview:()=>Overview,Subtitles:()=>Subtitles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textstyles_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let textstyle=class textstyle{constructor(){this.text=[]}static#_=this.propDecorators={text:[{type:core.Input}]}};textstyle=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-textstyle",template:'\n    <div class="block" *ngFor="let line of text">\n      <p class="{{ line.class }}">{{ line.data }}</p>\n    </div>\n  '})],textstyle);const textstyles_stories={title:"Guidelines / Textstyle",component:textstyle,render:args=>({props:{...args}})},Overview={args:{text:[{class:"mas-typo_body-1",data:"Typography helps us create hierarchies, organize information, and guide our users through pages."},{class:"mas-typo_headline-3",data:"Example with CSS utility classes:"},{class:"mas-typo_body-2",data:"Without CSS utility classes, we have a simple text."},{class:"mas-typo_body-2 mas-text-teal mas-font-bold",data:"With CSS utility classes from Tailwind CSS for a global paragraph."},{class:"mas-typo_body-2 mas-icon-orange mas-bg-brand",data:"HIGHLIGHT"}]}},Displays={args:{text:[{class:"mas-typo_display-1",data:"Display 1"},{class:"mas-typo_display-2",data:"Display 2"},{class:"mas-typo_display-3",data:"Display 3"}]}},Headines={args:{text:[{class:"mas-typo_headline-1",data:"Title 1"},{class:"mas-typo_headline-2",data:"Title 2"},{class:"mas-typo_headline-3",data:"Title 3"}]}},Subtitles={args:{text:[{class:"mas-typo_subtitle-1",data:"Subtitle 1"},{class:"mas-typo_subtitle-2",data:"Subtitle 2"},{class:"mas-typo_subtitle-3",data:"Subtitle 3"}]}},Body={args:{text:[{class:"mas-typo_body-1",data:"Text 1"},{class:"mas-typo_body-2",data:"Text 2"},{class:"mas-typo_body-3",data:"Text 3"},{class:"mas-typo_body-1--bold",data:"Text 1 - bold"},{class:"mas-typo_body-2--bold",data:"Text 2 - bold"},{class:"mas-typo_body-3--bold",data:"Text 3 - bold"}]}},Captions={args:{text:[{class:"mas-typo_caption",data:"Caption text"}]}},Overline={args:{text:[{class:"mas-typo_overline",data:"overline text"}]}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_body-1',\n      data: 'Typography helps us create hierarchies, organize information, and guide our users through pages.'\n    }, {\n      class: 'mas-typo_headline-3',\n      data: 'Example with CSS utility classes:'\n    }, {\n      class: 'mas-typo_body-2',\n      data: 'Without CSS utility classes, we have a simple text.'\n    }, {\n      class: 'mas-typo_body-2 mas-text-teal mas-font-bold',\n      data: 'With CSS utility classes from Tailwind CSS for a global paragraph.'\n    }, {\n      class: 'mas-typo_body-2 mas-icon-orange mas-bg-brand',\n      data: 'HIGHLIGHT'\n    }]\n  }\n}",...Overview.parameters?.docs?.source}}},Displays.parameters={...Displays.parameters,docs:{...Displays.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_display-1',\n      data: 'Display 1'\n    }, {\n      class: 'mas-typo_display-2',\n      data: 'Display 2'\n    }, {\n      class: 'mas-typo_display-3',\n      data: 'Display 3'\n    }]\n  }\n}",...Displays.parameters?.docs?.source}}},Headines.parameters={...Headines.parameters,docs:{...Headines.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_headline-1',\n      data: 'Title 1'\n    }, {\n      class: 'mas-typo_headline-2',\n      data: 'Title 2'\n    }, {\n      class: 'mas-typo_headline-3',\n      data: 'Title 3'\n    }]\n  }\n}",...Headines.parameters?.docs?.source}}},Subtitles.parameters={...Subtitles.parameters,docs:{...Subtitles.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_subtitle-1',\n      data: 'Subtitle 1'\n    }, {\n      class: 'mas-typo_subtitle-2',\n      data: 'Subtitle 2'\n    }, {\n      class: 'mas-typo_subtitle-3',\n      data: 'Subtitle 3'\n    }]\n  }\n}",...Subtitles.parameters?.docs?.source}}},Body.parameters={...Body.parameters,docs:{...Body.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_body-1',\n      data: 'Text 1'\n    }, {\n      class: 'mas-typo_body-2',\n      data: 'Text 2'\n    }, {\n      class: 'mas-typo_body-3',\n      data: 'Text 3'\n    }, {\n      class: 'mas-typo_body-1--bold',\n      data: 'Text 1 - bold'\n    }, {\n      class: 'mas-typo_body-2--bold',\n      data: 'Text 2 - bold'\n    }, {\n      class: 'mas-typo_body-3--bold',\n      data: 'Text 3 - bold'\n    }]\n  }\n}",...Body.parameters?.docs?.source}}},Captions.parameters={...Captions.parameters,docs:{...Captions.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_caption',\n      data: 'Caption text'\n    }]\n  }\n}",...Captions.parameters?.docs?.source}}},Overline.parameters={...Overline.parameters,docs:{...Overline.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: [{\n      class: 'mas-typo_overline',\n      data: 'overline text'\n    }]\n  }\n}",...Overline.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Displays","Headines","Subtitles","Body","Captions","Overline"]}}]);