import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Shallow test
describe('Hero component', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [HeroComponent],
      schemas : [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { 'id': 1, name: 'don', 'strength': 5 };
    expect(fixture.componentInstance.hero.name).toEqual('don');
  });

  it('should render the hero name within the anchor tag', () => {
    fixture.componentInstance.hero = { 'id': 1, name: 'don', 'strength': 5 };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('don');
  });
});

