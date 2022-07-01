
import { Component, OnDestroy } from '@angular/core';
import { timer,Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnDestroy {
  data: number = 0
  isRunning:boolean = false
  clickCount:number = 0
  myObservable?:Subscription
  start(){
    this.isRunning = true
    this.myObservable=timer(0,1000).subscribe(()=>{
      this.data++
    })
    }
  pause(){
    this.isRunning = !this.isRunning
    this.myObservable?.unsubscribe()
    if(this.isRunning){
      this.start()
    }
  }
  stop(){
    this.isRunning = false
    this.reset()
    this.myObservable?.unsubscribe()
  }
  reset(){
    this.data = 0  
  }
  doubleClick(){
   this.clickCount++
    setTimeout(()=>{
      if(this.clickCount === 2){
        this.pause()
      }
      this.clickCount = 0
    },500)
  }
  ngOnDestroy():void{
    this.myObservable?.unsubscribe()
  }
}
