import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// libs
import { LogService } from '@<%= npmScope %>/core';
import { ItemService, ItemDetailBaseComponent } from '@<%= npmScope %>/features';
import { AppService } from '@<%= npmScope %>/nativescript/core/services/app.service';

@Component({
  moduleId: module.id,
  selector: '<%= prefix %>-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {

  constructor(
    log: LogService,
    itemService: ItemService,
    route: ActivatedRoute,
    public appService: AppService
  ) {
    super(log, itemService, route);
  }
}
