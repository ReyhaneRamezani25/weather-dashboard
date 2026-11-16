import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedLoactions } from './saved-loactions';

describe('SavedLoactions', () => {
  let component: SavedLoactions;
  let fixture: ComponentFixture<SavedLoactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedLoactions],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedLoactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
