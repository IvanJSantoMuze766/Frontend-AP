import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoftSkillsComponent } from './modal-soft-skills.component';

describe('ModalSoftSkillsComponent', () => {
  let component: ModalSoftSkillsComponent;
  let fixture: ComponentFixture<ModalSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
