import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { imagePath, Pagination } from 'src/app/app-constants';
import { GridFields } from 'src/app/core/enum/comman';
import { MessageService } from 'src/app/shared/services/message.service';
import { CadenciesService } from '../cadencies.service';

@Component({
  selector: 'app-cadencies-list',
  templateUrl: './cadencies-list.component.html',
  styleUrls: ['./cadencies-list.component.scss'],
})
export class CadenciesListComponent implements OnInit {

  cadenciesGridData: any = [];
  cadenciesGridDataList: any = [];
  selectedCadencyMode: any;
  CadencyModeData: any[];

    // Image Relative Code
    clearFilter: string = this.images.clearFilter;
    filterIcon: string = this.images.filterIcon;
    plusIcon: string = this.images.plusIcon;
    moreVertGridIcon: string = this.images.moreVertGridIcon;
    cadenciesIcon: string = this.images.cadenciesIcon;

  destroy$: Subject<boolean> = new Subject<boolean>();
  dtSearch: string = '';
  show: boolean = false;
  isCadence: boolean = true;
  totalRecords: number = 0;
  ApplyFilterCount: number = 0;
 // Grid relative Code
 Cadencies: any = [];
 

 hideShowPaginationAndColumns: boolean = true;
 responsiveLayout = GridFields.ResponsiveLayout;
 Breakpoint = GridFields.Breakpoint;
 ScrollDirection = GridFields.ScrollDirection;
 Paginator = JSON.parse(GridFields.Paginator);
 ShowCurrentPageReport = JSON.parse(GridFields.ShowCurrentPageReport);

  // Pagination Relative Code
  pageSizeValues = this.pagination.pageSizeValues;
  rows = this.pagination.rows;
  //

  constructor(private cadenciesService: CadenciesService, 
    private messageService: MessageService,   
    private pagination: Pagination,
    // private dropDownService: DropD
    private images: imagePath) {}

  ngOnInit(): void {
    this.getAllCadencies();
    this.getCanenciesHeader();
  }

  getCanenciesHeader() {
    this.Cadencies = [
      {
        columnClass: "th-image max-width-90",
        gridHeaderTitle: "",
      },
      {
        columnClass: "th-template-name max-width-500",
        gridHeaderTitle: "Cadence Name",
      },
      {
        columnClass: "th-template-type max-width-300 text-left lg:text-center",
        gridHeaderTitle: "Cadence Type",
      },
      {
        columnClass: "th-mode max-width-200",
        gridHeaderTitle:"Mode",
      },
      {
        columnClass: "th-cadencies max-width-300 text-left lg:text-center",
        gridHeaderTitle: "Customer(s)",
      },
      {
        columnClass: "th-action text-center max-width-120",
        gridHeaderTitle: "Actions",
      },
    ];
  }

  /**
   * @name getAllCadencies
   * @description get all cadencies
   */
    getAllCadencies() {
      this.cadenciesService.getCadenciesList()?.pipe(takeUntil(this.destroy$))?.subscribe((res: any) => {
          if (res?.data) {
            this.show = true;
            this.cadenciesGridData = res.data;
            console.log(this.cadenciesGridData )
            this.cadenciesGridDataList = Object.assign([], this.cadenciesGridData);
            this.totalRecords = res?.count || 0;
            if (this.cadenciesGridData?.length > 0) {
              this.isCadence = true;
            }
            else {
              this.isCadence = false;
            }
          } else {
            this.show = true;
            this.cadenciesGridData = [];
            this.cadenciesGridDataList = Object.assign([], this.cadenciesGridData);
            this.totalRecords = 0;
          }
        }, (error: any) => {
          this.messageService.showError(error?.statusText == 'Unauthorized' ? 'Your session has been expired.' : error?.error?.error?.message);
        });

  //   ngOnDestroy() {

  //   }
  // }
}

}
