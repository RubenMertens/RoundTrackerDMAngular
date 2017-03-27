/* tslint:disable:no-unused-variable */

import {TestBed, async, tick, fakeAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ConnectionService} from "../providers/ConnectionService";

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        ConnectionService
      ]
    });
    TestBed.compileComponents();


  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it("should enter a roundentity", fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;

    comp.inputname = "a";
    comp.inputHealth = 1;
    comp.inputInitRoll =1;
    comp.inputInitMod =1;
    comp.sendRoundEntity();
    expect(comp.roundEntities.length).not.toEqual(0);

  }))
});
