import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommonTableComponent {

  dataSource = new MatTableDataSource([]);
  displayedColumns: any[] = [];
  filterValue = "";
  isAdmin = false;

  @Input() defaultSort = "";
  @Input() actionColumn = false;
  @Input() isEdit = false;
  @Input() isDelete = false;
  @Input() isPageable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: any;
  @Input() rowActionIcon: string = "edit";
  @Input() rowActionText!: string;
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];
  @Input() isDisablePaginationSizes = false;
  @Input() totalRows = 0;
  @Input() pageSize = 10;
  @Input() currentPage = 0;
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  public paginatorAvailable: any;
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageEmit: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort, { static: true }) matSort!: MatSort;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.setPagenaition();
  }

  constructor() { }

  ngOnInit(): void {
    this.paginatorAvailable = this.isPageable;
  }
  setPagenaition() {
    if (this.matPaginator) {
      this.matPaginator.pageIndex = this.currentPage;
      this.matPaginator.length = this.totalRows;
    }
  }

  setTableDataSource(data: any): void {
    this.dataSource = new MatTableDataSource(data);
    this.displayedColumns = this.tableColumns.map((x: { dataKey: any; }) => x.dataKey);
    this.displayedColumns = this.actionColumn ? this.displayedColumns.concat(["action"]) : this.displayedColumns;
    this.dataSource.paginator = this.matPaginator;
    this.matSort.sort({ id: this.defaultSort, start: "asc" } as MatSortable);
    this.dataSource.sort = this.matSort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.isPageable && this.dataSource.filteredData.length) {
      this.dataSource.paginator!.firstPage();
    } else if (!this.dataSource.filteredData.length) {
      this.isPageable = false;
    }
  }

  goTo(row: any): void {
    this.rowAction.emit(row);
  }

  goToDelete(row: any): void {
    this.deleteAction.emit(row);
  }

  clearFilter(): void {
    this.filterValue = "";
    this.dataSource.filter = "";
    this.isPageable = this.paginatorAvailable;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEmit.emit(e)
  }
}
