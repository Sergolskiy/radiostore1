import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

    users: any = null;
    userTypes: any = null;
    searcher: string = '';
    filterByParam: Array<any> = [];
    currentlyFilters: Array<any> = [];
    displayedColumns: Array<string> = ['id', 'email', 'first_name', 'last_name', 'user_role_id', 'user_group_id', 'action' ];
    sort: object = { id: true, email: false, first_name: false, last_name: false, user_role_id:false, user_group_id: false };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    constructor(private service: UserService, private router: Router) { }

    ngOnInit() {
        this.service.getUsers(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
            this.item_length = res.total_items;
            this.userTypes = res.userTags;
        });
    }

    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getUsers(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getUsers(this.current_page+1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
        });
    }

    search(form: NgForm) {
        console.log(form.value);
        this.searcher = form.value.searcher;
        this.service.getUsers(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
            this.current_page = 0;
        });
    }

    filterUserList(type, userType, name, reviewTitle = null) {
        if(type == 'comment') {
            if (this.filterByParam.hasOwnProperty(type)) {
                if(!this.filterByParam[type].includes(userType)) {
                    this.filterByParam[type].push(userType);
                    this.currentlyFilters.push({
                        value: userType,
                        name: reviewTitle,
                        title: name,
                        type: type,
                    });
                }
            } else {
                this.filterByParam[type] = [userType];
                this.currentlyFilters.push({
                    value: userType,
                    name: reviewTitle,
                    title: name,
                    type: type,
                });
            }
        } else if(type == 'orderPeriod'){
            this.filterByParam[type] = [userType];
            this.currentlyFilters = this.currentlyFilters.filter(function(value) {
                return value.type !== "orderPeriod";
            });
            this.currentlyFilters.push({
                value: userType,
                name: reviewTitle,
                title: name,
                type: type,
            });

        } else {
            if(this.filterByParam.hasOwnProperty(type)) {
                if(!this.filterByParam[type].includes(userType.id)) {
                    this.filterByParam[type].push(userType.id);
                    this.currentlyFilters.push({
                        id: userType.id,
                        name: userType.title,
                        title: name,
                        type: type,
                    });
                }
            } else {
                this.filterByParam[type] = [userType.id];
                this.currentlyFilters.push({
                    id: userType.id,
                    name: userType.title,
                    title: name,
                    type: type,
                });
            }
        }
        this.service.getUsers(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
            this.current_page = 0;
        });
    }

    deleteFilterUserList(param, indexParam) {
        if(this.filterByParam.hasOwnProperty(param.type)) {
            if(param.type == 'tags') {
                this.filterByParam[param.type] = this.filterByParam[param.type].filter(function(id) {
                    return id !== param.id;
                });
            } else if(param.type == 'comment' || param.type == 'orderPeriod') {
                this.filterByParam[param.type] = this.filterByParam[param.type].filter(function(type) {
                    return type !== param.value;
                });
            }
            this.currentlyFilters.splice(indexParam,1);
            if (!Object.keys(this.filterByParam[param.type]).length) {
                delete this.filterByParam[param.type];
            }
        }
        this.service.getUsers(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
            this.users = new MatTableDataSource(res.users);
            this.current_page = 0;
        });
    }

    toCreate() {
        this.router.navigate(['/users/create']);
    }

    toUpdate(id) {
        // console.log(id);
        this.router.navigate(['/users/update', id]);
    }

    deleteUser(id) {
        this.service.deleteUser(id).subscribe((res:any) => {
            if(res.user) {
                this.users.data.forEach((el, i) => {
                    if (el.id == id) {
                        this.users.data.splice(i, 1);
                    }
                });

                this.users = new MatTableDataSource(this.users.data);
            }
        });
    }
}
