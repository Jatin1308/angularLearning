import { Directive, TemplateRef, Renderer2, HostListener, ElementRef ,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat, changeText'
})
export class RepeatDirective {



  // inject two classes called TemplateRef which acquires <ng-template> content and another clss called ViewContainerRef
  // which access the HTML container to add and remove elements from it
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }



  // Create a setter methodfor an appRepeat directiveby attaching @Input directive which specified that this 
  // directive will receive value from component. This method takes the number passed to the appRepeat directie
  //  as an argument 
  // @Input() set appRepeat(count: number){
  //   for (let i = 0; i<count;i++){
  //     this.viewContainer.createEmbeddedView(this.templateRef)
  //   }
  // }

  repeatElement(count: number){
    for (let i  = 0; i<count; i++){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

  changeElementText(count: number){
    for( let i = 0; i< count; i++){
      document.getElementsByTagName('span')[i].innerHTML = "Text is changed"
    }
  }










}
