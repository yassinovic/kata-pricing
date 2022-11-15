import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './top-menu-bar.model';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu-bar.component.html',
    styleUrls: ['./top-menu-bar.component.scss']
})
export class TopMenuBaromponent implements OnInit {

    @Input()
    menus: MenuItem[] = [];
    
    constructor(private router:Router)
    {
    }

    ngOnInit() {
    }

    selectMenu(menu: MenuItem) {
        this.router.navigate([menu.path]);
    }

}