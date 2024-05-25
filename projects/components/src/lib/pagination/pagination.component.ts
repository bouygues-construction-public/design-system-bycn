import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'mas-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class MasPagination {
  @Input() size: 'small' | 'medium';
  @Input() type: 'Numbers' | 'Input';
  @Input() itemsPerPage: boolean = false;

  @Input() totalItems: number = 500;
  @Input() initialPageSize: number = 24;
  currentPage: number = 1;
  pageSize: number;
  totalPages: number;
  pages: number[] = [];
  pageSizeOptions: number[] = [10, 20, 30, 50];
  truncatedPages: (number | string)[] = [];
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    console.log('ngOnInit - totalItems:', this.totalItems);
    console.log('ngOnInit - initialPageSize:', this.initialPageSize);
    
    this.pageSize = this.initialPageSize;
    this.calculateTotalPages();
    this.generatePages();
    this.updateTruncatedPages();
    
    console.log('ngOnInit - totalPages:', this.totalPages);
    console.log('ngOnInit - pages:', this.pages);
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    console.log('calculateTotalPages - totalPages:', this.totalPages);
  }

  generatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    console.log('generatePages - pages:', this.pages);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateTruncatedPages();
    console.log('goToPage - currentPage:', this.currentPage);
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

  onPageSizeChange(newPageSize: number) {
    this.pageSize = +newPageSize;
    this.currentPage = 1;
    this.calculateTotalPages();
    this.generatePages();
    this.updateTruncatedPages();
    this.goToPage(this.currentPage);
    console.log('onPageSizeChange - newPageSize:', this.pageSize);
  }

  onPageInputChange(event: any) {
    const inputPage = Number(event.target.value);
    if (inputPage >= 1 && inputPage <= this.totalPages) {
      this.goToPage(inputPage);
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



}
