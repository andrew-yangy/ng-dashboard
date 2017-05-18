/**
 * Created by andrew.yang on 2/6/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Login} from "../../models/login";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class Navigation implements OnInit {
    @Input() loginInfo:Login;
    constructor( private router: Router) { }

    ngOnInit() { }
    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}