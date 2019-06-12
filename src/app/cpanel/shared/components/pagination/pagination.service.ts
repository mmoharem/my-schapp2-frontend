import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CompHttpService } from '../comp-http.service';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  // changeEmit = new Subject;
  // responseEmit = new Subject;
  // dataErrEmit = new Subject;
  emitUrl = new Subject;

  constructor(private compHttp: CompHttpService) { }

  paginate(state: string, data, perPage: number) {

    let url;
    // const cur = data.current_page;
    const path = data.path;

    if(state === 'perPage') {
      url = `${path}?page=1&per_page=${perPage}`;

    } else if(state === 'next') {
      url = `${data.next_page_url}&per_page=${perPage}`;

    } else if(state === 'back') {
      url = `${data.prev_page_url}&per_page=${perPage}`;
    }

    if(path.includes('search')) {
      this.compHttp.searchRequest(url);
      return;
    }

    this.compHttp.getRequest(url);
  }
}
