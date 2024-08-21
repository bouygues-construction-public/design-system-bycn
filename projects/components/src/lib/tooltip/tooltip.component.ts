import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-tooltip',
  templateUrl: './tooltip.component.html'
})
export class MasTooltip implements OnInit {

  @Input() text: string ;
  @Input() content: string = '';
  @Input() placement: string = 'bottom';

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
  tooltip: HTMLElement;
  finalPosition: boolean = false ;
  placementToDisplay: string;
  
  get classes(): { [key: string]: boolean } {
    return {
      
      'mas-tooltip-ready': true
    }
  }


  ngOnInit(): void {
    this.originalPlacement = this.placement
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
    this.tooltip.style.opacity = '0' ;
    this.tooltip.style.transitionDuration = '0.25s' ;
    setTimeout(() => {
      if (!this.mouseOnTarget) {
        this.isVisible = false;
      }
    }, 100);

  }


  focusOnTarget(event: any) {
    this.originalPlacement = this.placement
    this.mouseOnTarget = true;
    // this.originalPlacement = this.placement
    this.placementToCheck = this.originalPlacement;
    
    if(!this.isVisible){

      this.initPositionsPriorities()
      this.notAvailblePositions = []
      
      this.isVisible = true;
      // event.stopPropagation();
      setTimeout(() => {
        this.spanRect = (event.target as HTMLElement).getBoundingClientRect();
        
        this.tooltip = document.querySelector('.mas-tooltip') as HTMLElement;
        this.calculateTooltipPosition();
      }, 5);
    }   
  }

  LostfocusOnTarget() {
    this.mouseOnTarget = false;
  }

  close() {
    this.LostfocusOnTarget()
    this.hideTooltip()
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
  calculateTooltipPosition() {
    this.container = document.querySelector('.mas-tooltip-container') as HTMLElement;
   
    this.finalPosition = false
    this.placement = this.placementToCheck
    this.arrowRect = (document.querySelector('.arrow') as HTMLElement).getBoundingClientRect();
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

  displayFinalTooltip(){
    this.placementToDisplay = this.placement
      this.placement = this.originalPlacement
    setTimeout(() => {
      this.tooltip.style.opacity = '1' ;
      this.tooltip.style.transitionDuration = '0.25s' ;
    }, 5);
   
  }
}

