// mas-button.directive.ts
import { Directive, ElementRef, Input, Renderer2, ViewChild, OnInit } from '@angular/core';

@Directive({
  selector: '[MasPopover]',
})
export class MasPopoverDirective implements OnInit {

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

  mouseOnpopOver = false;
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
  popover: any;
  finalPosition: boolean = false;
  placementToDisplay: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }




  ngOnInit(): void {
    
    this.originalPlacement = this.placement
    this.el.nativeElement.addEventListener('mouseleave', () => {
      this.LostfocusOnTarget();
      this.hidePopover()
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

  showPopover() {
    this.isVisible = true;
  }

  hidePopover() {
    
      if (!this.mouseOnTarget && !this.mouseOnpopOver) {
         this.deletePopOver()
        this.isVisible = false; 
      }
    
  }

  focusOnPopOver() {
    this.mouseOnpopOver = true;
  }
  LostfocusOnPopOver() {
    this.mouseOnpopOver = false;
  }
  LostfocusOnTarget() {
    this.mouseOnTarget = false;
  }


  

  deletePopOver() {
   let popover = document.getElementById("myPopover")
   this.renderer.removeChild(popover?.parentNode, popover);

    // if(this.popover && this.el.nativeElement.contains(this.popover)){
    //   this.renderer.removeChild(this.el.nativeElement, this.popover);
    //   console.log(this.popover)
    // }   
  }

  focusOnTarget() {
    this.originalPlacement = this.placement
    this.placementToCheck = this.originalPlacement;
    this.renderer.addClass(this.el.nativeElement, 'mas-popover-container');
    this.renderer.addClass(this.el.nativeElement, 'mas-popover-container');
    this.mouseOnTarget = true;
    if(!this.isVisible){
      // this.placement = this.originalPlacement
     
      this.createPopover()
      this.initPositionsPriorities()
      this.notAvailblePositions = []
    
      this.isVisible = true;
     
      // this.spanRect = this.el.nativeElement.getBoundingClientRect();
     
      this.el.nativeElement.style.position = 'relative'
      this.el.nativeElement.style.display = 'inline-block'
      setTimeout(() => {
        
        
  
        // = document.querySelector('.mas-popover-container') as HTMLElement;
        // this.popover = document.querySelector('.mas-popover') as HTMLElement;
       
  
      }, 1);
    }
   
   
   
  }

  private createPopover() {
    // this.deletePopOver()
   


    let popover = this.renderer.createElement('div');
    this.renderer.addClass(popover, 'mas-popover');
    this.renderer.setAttribute(popover, 'id', 'myPopover');

    this.renderer.addClass(popover, this.originalPlacement);
    this.renderer.appendChild(this.el.nativeElement, popover);
    this.renderer.setStyle(popover, 'width', this.width);
    // this.renderer.setStyle(popover, 'opacity', '1 !important');
    // popover.style.opacity = '1';
    popover.addEventListener('mouseleave', () => {
      this.LostfocusOnPopOver();
      this.hidePopover()
      
    });

    popover.addEventListener('mouseenter', () => {
      this.focusOnPopOver();
      this.showPopover()
    });

    const paddingBar = this.renderer.createElement('div');
    this.renderer.addClass(paddingBar, 'padding-bar');
    this.renderer.appendChild(popover, paddingBar);

    const arrow = this.renderer.createElement('div');
    this.renderer.addClass(arrow, 'arrow');
    this.renderer.appendChild(popover, arrow);

    const innerDiv = this.renderer.createElement('div');
    this.renderer.addClass(innerDiv, 'mas-popover-inner');
    this.renderer.appendChild(popover, innerDiv);

    if (this.title) {
      const titleDiv = this.renderer.createElement('div');
      this.renderer.addClass(titleDiv, 'mas-popover-title');
      this.renderer.appendChild(titleDiv, this.renderer.createText(this.title));
      this.renderer.appendChild(innerDiv, titleDiv);
    }

    if (this.content) {
      const contentDiv = this.renderer.createElement('div');
      this.renderer.addClass(contentDiv, 'mas-popover-content');
      this.renderer.appendChild(contentDiv, this.renderer.createText(this.content));
      this.renderer.appendChild(innerDiv, contentDiv);
    }

    if (this.buttonLabel) {
      const buttonDiv = this.renderer.createElement('div');
      this.renderer.addClass(buttonDiv, 'mas-popover-button');

      const button = this.renderer.createElement('div');
      
      this.renderer.appendChild(button, this.renderer.createText(this.buttonLabel));
      this.renderer.addClass(button, 'text-button');
      this.renderer.addClass(button, 'text-button');
      this.renderer.listen(button, 'click', () => this.close());

      this.renderer.appendChild(buttonDiv, button);
      this.renderer.appendChild(innerDiv, buttonDiv);
    }

    this.renderer.setStyle(popover, 'height', 'fit-content');
    setTimeout(() => {
      this.calculatePopoverPosition();
    }, 50);


  }


  calculatePopoverPosition() {
    // this.container = document.querySelector('.mas-popover-container') as HTMLElement;
    this.finalPosition = false
    this.placement = this.placementToCheck
    this.arrowRect = (document.querySelector('.arrow') as HTMLElement).getBoundingClientRect();
    this.popover = (document.getElementById('myPopover') as HTMLElement);

    this.spanRect = this.el.nativeElement.getBoundingClientRect();
    if (this.placementToCheck === "top-right" || this.placementToCheck === "bottom-right") {
      if (this.arrowRect.left - this.popover.clientWidth  < 0) {
        if (this.placementToCheck === "top-right") {this.positions = this.positionsTLComp}
        if (this.placementToCheck === "bottom-right") {this.positions = this.positionsBLComp}
        this.getOtherPlacements();
      } else {
        if (this.placementToCheck === "top-right") {
          if (this.spanRect.top - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("top-right")
            this.getOtherPlacements();
          } else {
             
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
        if (this.placementToCheck === "bottom-right") {
          if ((window.innerHeight - this.spanRect.bottom) - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("bottom-right")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
      }
    }else 

    if (this.placementToCheck === "top-left" || this.placementToCheck === "bottom-left") {
      if ((window.innerWidth - this.arrowRect.right) - this.popover.clientWidth < 0 ) {
        if (this.placementToCheck === "top-left") this.positions = this.positionsTLComp
        if (this.placementToCheck === "bottom-left") this.positions = this.positionsBLComp
        this.getOtherPlacements();
      } else {
        if (this.placementToCheck === "top-left") {

          if (this.spanRect.top - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("top-left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
        if (this.placementToCheck === "bottom-left") {
          if ((window.innerHeight - this.spanRect.bottom) - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("bottom-left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }

      }
    }
    else
    if (this.placementToCheck === "top" || this.placementToCheck === "bottom") {
     
      if ( this.arrowRect.left - this.popover.clientWidth/2 < 0) {
        if (this.placementToCheck === "top") this.positions = this.positionsTLComp
        if (this.placementToCheck === "bottom") this.positions = this.positionsBLComp
        this.getOtherPlacements();
      } 
      else {
        if (this.placementToCheck === "top") {
          if (this.spanRect.top - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("top")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
        if (this.placementToCheck === "bottom") {
          if ((window.innerHeight - this.spanRect.bottom) - this.popover.clientHeight < 0) {
            this.notAvailblePositions.push("bottom")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
      }
    }
    else
    if (this.placementToCheck === "right" || this.placementToCheck === "left") {
      if (this.arrowRect.top - this.popover.clientHeight/2  < 0 || this.arrowRect.bottom - this.popover.clientHeight/2  < 0) {
        if (this.placementToCheck === "right") this.positions = this.positionsT
        this.getOtherPlacements();
      }
      else {
        if (this.placementToCheck === "right") {
          if ((window.innerWidth - this.spanRect.right) - this.popover.clientWidth < 0) {
            this.notAvailblePositions.push("right")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
        if (this.placementToCheck === "left") {
          if (this.spanRect.left - this.popover.clientWidth < 0) {
            this.notAvailblePositions.push("left")
            this.getOtherPlacements();
          } else {
            this.placement = this.placementToCheck;
            this.displayFinalPopOver()
          }
        }
      }
    }
  }

  checkNewPlacement(placement: string) {
    this.placementToCheck = placement;
    this.placement = this.placementToCheck
    setTimeout(() => {
      this.calculatePopoverPosition()
    }, 5);
  }

  getOtherPlacements() {

    let availblePositions = this.positions.filter(item => !this.notAvailblePositions.includes(item));
    if (availblePositions.length > 0) {
      let newPLacement = availblePositions[0]
      this.checkNewPlacement(newPLacement)
    }
  }

  displayFinalPopOver() {
    this.placementToDisplay = this.placement
      this.placement = this.originalPlacement
    this.renderer.removeClass(this.popover, this.originalPlacement);
    this.renderer.addClass(this.popover, this.placementToDisplay);
    setTimeout(() => {
      this.popover.style.opacity = '1';
      this.popover.style.transitionDuration = '0.25s';
    }, 100);

  }

  close() {
    this.LostfocusOnPopOver()
    this.LostfocusOnTarget()
    this.hidePopover()
  }
}
