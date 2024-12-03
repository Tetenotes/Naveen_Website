import { Component, OnInit, OnDestroy } from '@angular/core';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-animated-object',
  standalone: true,
  templateUrl: './animated-object.component.html', 
  styleUrls: ['./animated-object.component.css']
})
export class AnimatedObjectComponent implements OnInit, OnDestroy {
  transform: string = 'translate(0px, 0px)';
  private x = 0;
  private y = 0;
  private listener: any;

  ngOnInit() {
    this.listener = Motion.addListener('accel', (event) => {
      this.x = this.clampValue(this.x + event.acceleration?.x * 5, -50, 50);
      this.y = this.clampValue(this.y - event.acceleration?.y * 5, -50, 50);

      this.transform = `translate(${this.x}px, ${this.y}px)`;
    });
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener.remove();
    }
  }

  private clampValue(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
  }
}
