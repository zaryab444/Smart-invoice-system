export class AppConstants {
    static readonly TOASTR_CONFIG = {
        timeOut: 3000,
        extendedTimeOut: 1000,
        disableTimeOut: false,
        positionClass: 'toast-bottom-right',
        closeButton: true,
        tapToDismiss: true,
        preventDuplicates: true,
        progressBar: true
      };
     
}


export class Pagination {
  rows = 5;
  pageSizeValues = [2, 5, 10, 15, 20, 25, 50];
  cardPageSizeValues = [3, 6, 9, 12, 15, 30];
  cardRows = 9;
}

export class imagePath {
  clearFilter = 'assets/images/svg/clear_filter.svg';
  filterIcon = 'assets/images/svg/filter_icon.svg';
  plusIcon = 'assets/images/svg/plus_icon.svg';
  moreVertGridIcon = 'assets/images/svg/more_vert_grid_icon.svg';
  cadenciesIcon = 'assets/images/svg/cadencies_icon.svg';
}

