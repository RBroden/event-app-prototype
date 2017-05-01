import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HeaderComponent } from '../header.component';

describe('Header', () => {

    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        });

        fixture = TestBed.createComponent(HeaderComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement;

        el = de.nativeElement;
    });

    it ('HeaderComponent should get created', () => {
        expect(fixture.componentInstance instanceof HeaderComponent)
            .toBe(true, 'should create HeaderComponent');
    });

});
