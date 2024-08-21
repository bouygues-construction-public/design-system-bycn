// mas-button.directive.ts
import { Directive, ElementRef, Input, Renderer2, ViewChild, OnInit } from '@angular/core';

@Directive({
  selector: '[MasTooltip]',
})
export class MasTooltipDirective implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() placement: string = 'bottom';
  @Input() buttonLabel: string;
  @Input() width: string = '200px'

  positionsT: string[] = ["top", "bottom", "right", "left"]
  positionsR: string[] = ["right", "left", "bottom", "top"]
  positionsTRComp: string[] = ["top-right", "bottom-right", "right", "left"]
  positionsTLComp: string[] = ["top-left", "bottom-left", "right", "left"]
  positionsBRComp: string[] = ["bottom-right", "top-right", "right", "left"]
  positionsBLComp: string[] = ["bottom-left", "top-left", "right", "left"]

  positions: string[] = []
  notAvailblePositions: string[] = []

  isVisible: boolean = false;

  mouseOnTarget = false;

  topAvailible: boolean
  bottomAvailible: boolean
  rightAvailible: boolean
  leftAvailible: boolean

  originalPlacement: string;

  placementToCheck: string;


  spanRect: DOMRect;
  container: HTMLElement;
  arrowRect: DOMRect;
  tooltip: any;
  finalPosition: boolean = false;
  placementToDisplay: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }




  ngOnInit(): void {
    
    this.originalPlacement = this.placement
    this.el.nativeElement.addEventListener('mouseleave', () => {
      this.LostfocusOnTarget();
      this.hideTooltip()
    });

    this.el.nativeElement.addEventListener('mouseenter', () => {
    this.container = this.el.nativeElement;
    this.focusOnTarget()
    });
    this.initPositionsPriorities()
  }

  initPositionsPriorities(){
    if (this.originalPlacement === "top" || this.originalPlacement === "bottom") {
      this.positions = this.positionsT
    }
    if (this.originalPlacement === "right" || this.originalPlacement === "left") {
      this.positions = this.positionsR
    }
    if (this.originalPlacement === "top-right") {
      this.positions = this.positionsTRComp
    }
    if (this.originalPlacement === "top-left") {
      this.positions = this.positionsTLComp
    }
    if (this.originalPlacement === "bottom-right") {
      this.positions = this.positionsBRComp
    }
    if (this.originalPlacement === "bottom-left") {
      this.positions = this.positionsBLComp
    } 
  }

  showTooltip() {
    this.isVisible = true;
  }

  hideTooltip() {
    
      if (!this.mouseOnTarget ) {
        this.tooltip.style.opacity = '0' ;
        this.tooltip.style.transitionDuration = '0.25s' ;
        setTimeout(() => {
          this.isVisible = false; 
          this.deleteTooltip()
        }, 200);
        
        
      }
    
  }

  LostfocusOnTarget() {
    this.mouseOnTarget = false;
  }


  

  deleteTooltip() {
   let tooltip = document.getElementById("myTooltip")
   this.renderer.removeChild(tooltip?.parentNode, tooltip);
  }

  focusOnTarget() {
    this.originalPlacement = this.placement
    this.placementToCheck = this.originalPlacement;
    this.renderer.addClass(this.el.nativeElement, 'mas-tooltip-container');
    this.renderer.addClass(this.el.nativeElement, 'mas-tooltip-container');
    this.mouseOnTarget = true;
    if(!this.isVisible){
     
      this.createTooltip()
      this.initPositionsPriorities()
      this.notAvailblePositions = []
    
      this.isVisible = true;     
      this.el.nativeElement.style.position = 'relative'
      this.el.nativeElement.style.display = 'inline-block'
      setTimeout(() => {  
      }, 1);
    }
   
   
   
  }

  private createTooltip() {

    let tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip, 'mas-tooltip');
    this.renderer.setAttribute(tooltip, 'id', 'myTooltip');

    this.renderer.addClass(tooltip, this.originalPlacement);
    this.renderer.appendChild(this.el.nativeElement, tooltip);

    const paddingBar = this.renderer.createElement('div');
    this.renderer.addClass(paddingBar, 'padding-bar');
    this.renderer.appendChild(tooltip, paddingBar);

    const arrow = this.renderer.createElement('div');
    this.renderer.addClass(arrow, 'arrow');
    this.renderer.appendChild(tooltip, arrow);

    const innerDiv = this.renderer.createElement('div');
    this.renderer.addClass(innerDiv, 'mas-tooltip-inner');
    this.renderer.appendChild(tooltip, innerDiv);


    if (this.content) {
      const contentDiv = this.renderer.createElement('div');
      this.renderer.addClass(contentDiv, 'mas-tooltip-content');
      this.renderer.appendChild(contentDiv, this.renderer.createText(this.content));
      this.renderer.appendChild(innerDiv, contentDiv);
    }

    this.renderer.setStyle(tooltip, 'height', 'fit-content');
    setTimeout(() => {
      this.calculateTooltipPosition();
    }, 50);


  }


  calculateTooltipPosition() {
    this.finalPosition = false
    this.placement = this.placementToCheck
    this.arrowRect = (document.querySelector('.arrow') as HTMLElement).getBoundingClientRect();
    this.tooltip = (document.getElementById('myTooltip') as HTMLElement);

    this.spanRect = this.el.nativeElement.getBoundingClientRect();
    if (this.placementToCheck === "top-right" || this.placementToCheck === "bottom-right") {
      if (this.arrowRect.left - this.tooltip.clientWidth  < 0) {
        if (this.placementToCheck === "top-right") {this.positions = this.positionsTLComp}
        if (this.placementToCheck === "bottom-right") {this.positions = this.positionsBLComp}
        this.getOtherPlacements();
      } else {
        if (this.placementToCheck === "top-right") {
          if (this.spanRect.top - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("top-right")
            this.getOtherPlacements();
          } else {
             
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
        if (this.placementToCheck === "bottom-right") {
          if ((window.innerHeight - this.spanRect.bottom) - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("bottom-right")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
      }
    }else 

    if (this.placementToCheck === "top-left" || this.placementToCheck === "bottom-left") {
      if ((window.innerWidth - this.arrowRect.right) - this.tooltip.clientWidth < 0 ) {
        if (this.placementToCheck === "top-left") this.positions = this.positionsTLComp
        if (this.placementToCheck === "bottom-left") this.positions = this.positionsBLComp
        this.getOtherPlacements();
      } else {
        if (this.placementToCheck === "top-left") {

          if (this.spanRect.top - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("top-left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
        if (this.placementToCheck === "bottom-left") {
          if ((window.innerHeight - this.spanRect.bottom) - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("bottom-left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }

      }
    }
    else
    if (this.placementToCheck === "top" || this.placementToCheck === "bottom") {
     
      if ( this.arrowRect.left - this.tooltip.clientWidth/2 < 0) {
        if (this.placementToCheck === "top") this.positions = this.positionsTLComp
        if (this.placementToCheck === "bottom") this.positions = this.positionsBLComp
        this.getOtherPlacements();
      } 
      else {
        if (this.placementToCheck === "top") {
          if (this.spanRect.top - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("top")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
        if (this.placementToCheck === "bottom") {
          if ((window.innerHeight - this.spanRect.bottom) - this.tooltip.clientHeight < 0) {
            this.notAvailblePositions.push("bottom")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
      }
    }
    else
    if (this.placementToCheck === "right" || this.placementToCheck === "left") {
      if (this.arrowRect.top - this.tooltip.clientHeight/2  < 0 || this.arrowRect.bottom - this.tooltip.clientHeight/2  < 0) {
        if (this.placementToCheck === "right") this.positions = this.positionsT
        this.getOtherPlacements();
      }
      else {
        if (this.placementToCheck === "right") {
          if ((window.innerWidth - this.spanRect.right) - this.tooltip.clientWidth < 0) {
            this.notAvailblePositions.push("right")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
        if (this.placementToCheck === "left") {
          if (this.spanRect.left - this.tooltip.clientWidth < 0) {
            this.notAvailblePositions.push("left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalTooltip()
          }
        }
      }
    }
  }

  checkNewPlacement(placement: string) {
    this.placementToCheck = placement;
    this.placement = this.placementToCheck
    setTimeout(() => {
      this.calculateTooltipPosition()
    }, 5);
  }

  getOtherPlacements() {

    let availblePositions = this.positions.filter(item => !this.notAvailblePositions.includes(item));
    if (availblePositions.length > 0) {
      let newPLacement = availblePositions[0]
      this.checkNewPlacement(newPLacement)
    }
  }

  displayFinalTooltip() {
    this.placementToDisplay = this.placement
      this.placement = this.originalPlacement
    this.renderer.removeClass(this.tooltip, this.originalPlacement);
    this.renderer.addClass(this.tooltip, this.placementToDisplay);
    setTimeout(() => {
      this.tooltip.style.opacity = '1';
      this.tooltip.style.transitionDuration = '0.25s';
    }, 100);

  }

  close() {
    this.LostfocusOnTarget()
    this.hideTooltip()
  }
}
