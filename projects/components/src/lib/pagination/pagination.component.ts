import { Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import { MasActionDropdown } from '../action-dropdown/action-dropdown.component';

@Component({
  selector: 'mas-pagination',
  templateUrl: './pagination.component.html',
})
export class MasPagination {
  @ViewChild(MasActionDropdown) dropdownComponent: MasActionDropdown;
  @ViewChild('dropdown') dropdown: MasActionDropdown;
  @ViewChild('firstFocusable') firstFocusable: ElementRef;
  @Input() size: 'small' | 'medium';
  @Input() type: 'Numbers' | 'Input';
  @Input() itemsPerPage: boolean = false;
  @Input() totalItems: number;
  @Input() initialPageSize: number;
 
  dropdownToggleElement: HTMLElement | null = null;
  selectedIndex: number = -1;
  selectedOption: number;
  currentPage: number = 1;
  pageSize: number;
  totalPages: number;
  pages: number[] = [];
  pageSizeOptions: number[] = [10, 20, 30, 50];
  truncatedPages: (number | string)[] = [];

  constructor() {}

  ngOnInit() {
    this.pageSize = this.initialPageSize;
    this.calculateTotalPages();
    this.generatePages();
    this.updateTruncatedPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  generatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }



  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.goToPage(this.currentPage);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.goToPage(this.currentPage);
    }
  }



  onPageInputChange(event: any) {
    const inputPage = Number(event.target.value);
    if (inputPage >= 1 && inputPage <= this.totalPages) {
      this.goToPage(inputPage);
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
        this.currentPage = page;
        this.updateTruncatedPages();
    }
  }
 updateTruncatedPages() {
  const totalPagesToShow = 10;
  const half = Math.floor(totalPagesToShow / 2);
  let start = Math.max(1, this.currentPage - half);
  let end = Math.min(this.totalPages, this.currentPage + half);
  if (end - start < totalPagesToShow - 1) {
      if (start === 1) {
          end = Math.min(totalPagesToShow, this.totalPages);
      } else if (end === this.totalPages) {
          start = Math.max(1, this.totalPages - totalPagesToShow + 1);
      }
  }

  this.truncatedPages = [];
  if (start > 1) {
      this.truncatedPages.push(1);
      if (start > 2) {
          this.truncatedPages.push('...');
      }
  }
  for (let i = start; i <= end; i++) {
      this.truncatedPages.push(i);
  }
  if (end < this.totalPages) {
      if (end < this.totalPages - 1) {
          this.truncatedPages.push('...');
      }
      this.truncatedPages.push(this.totalPages);
  }
  }

  getButtonClasses(): string {
    let classes = 'button-tertiary';
    if (this.size === 'medium') {
      classes += ' button-tertiary-medium';
    } else if (this.size === 'small') {
      classes += ' button-tertiary-small';
    }
    return classes;
  }

  getPaginationClasses(): string {
    let classes = 'pagination';
    if (this.size === 'medium' && this.type === 'Input') {
      classes += ' pagination-medium-Input';
    } else if (this.size === 'small' && this.type === 'Input') {
      classes += ' pagination-small-Input';
    } else if (this.size === 'medium' && this.type === 'Numbers') {
      classes += ' pagination-medium-Numbers';
    } else if (this.size === 'small' && this.type === 'Numbers') {
      classes += ' pagination-small-Numbers';
    }
    return classes;
  }

  getInputClasses(): string {
    let classes = 'mas-text-input';
    if (this.size === 'medium') {
      classes += ' mas-text-input-medium';
    } else if (this.size === 'small') {
      classes += ' mas-text-input-small';
    }
    return classes;
  }

  onPageSizeChange(newPageSize: number) {
    this.pageSize = +newPageSize;
    this.currentPage = 1;
    this.calculateTotalPages();
    this.generatePages();
    this.updateTruncatedPages();
    this.goToPage(this.currentPage);
  }
 
  onToggleDropdown(): void {
    this.dropdownComponent._onToggle();
    this.selectedIndex = -1;
    setTimeout(() => {
      const options = Array.from(document.querySelectorAll('mas-dropdown-option'));
      if (options.length > 0) {
        if (this.selectedIndex < 0 || this.selectedIndex >= options.length) {
          this.selectedIndex = 0;
        }
        (options[this.selectedIndex] as HTMLElement).focus();
      }
    }, 0);
  }
  
  handleKeydown(event: KeyboardEvent, action: string, option?: number, index?: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      if (action === 'Previous') {
        this.goToPreviousPage();
      } else if (action === 'Next') {
        this.goToNextPage();
      } else if (action === 'OpenDropdown') {
        this.onToggleDropdown();
      } else if (action === 'Option') {
        this.onPageSizeChange(option!);
      }
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateOptions(event, index!);
    } else if (event.key === 'Tab') {
      this.handleTabKey(event);
    }
  }
  
  navigateOptions(event: KeyboardEvent, currentIndex: number): void {
    const options = Array.from(document.querySelectorAll('mas-dropdown-option'));
    if (options.length > 0) {
      if (event.key === 'ArrowDown') {
        this.selectedIndex = (currentIndex + 1) % options.length;
      } else if (event.key === 'ArrowUp') {
        this.selectedIndex = (currentIndex - 1 + options.length) % options.length;
      }
      (options[this.selectedIndex] as HTMLElement).focus();
    }
  }
  
  @HostListener('document:keydown', ['$event'])
  handleTabKey(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const lastElement = focusableElements[focusableElements.length - 1];
    const firstElement = focusableElements[0];
  
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
  
  private getFocusableElements(): HTMLElement[] {
    const dropdown = document.querySelector('.dd');
    return Array.from(dropdown?.querySelectorAll('button, input, mas-action-dropdown, [tabindex]:not([tabindex="-1"])') || []);
  }
}
