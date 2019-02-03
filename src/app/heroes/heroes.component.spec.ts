import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('Heros component', () => {
  let component;
  let heroes;
  let mockHeroService;

  beforeEach(() => {
    heroes = [
      { 'id': 1, name: 'don', 'strength': '5' },
      { 'id': 2, name: 'rob', 'strength': '10' },
      { 'id': 3, name: 'jon', 'strength': '21' }
    ];
    mockHeroService = jasmine.createSpyObj(['addHero', 'deleteHero', 'getHeroes']);
    component = new HeroesComponent(mockHeroService);
  });


  describe('delete', () => {
    // State based test
    it('should remove the indicated hero from the heroes array', () => {
      // Since the mock service is returning a observable, that needs to be mocked too
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;
      component.delete(heroes[1]);
      // TODO : just doing a length check , but should really check if it deleted the expected element
      expect(component.heroes.length).toBe(2);
    });

    // Interaction test
    it('should call delete hero method', () => {
      // Since the mock service is returning a observable, that needs to be mocked too
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;
      component.delete(heroes[1]);
      // TODO : just doing a length check , but should really check if it deleted the expected element
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[1]);
    });
  });



});

