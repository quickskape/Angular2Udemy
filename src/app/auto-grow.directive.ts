import  {Directive, ElementRef, Renderer} from "@angular/core"

@Directive({
    selector: '[autoGrow]',
    host: {
        "(focus)": "onFocus()",
        "(blur)": "onBlur()"
    }
})
export class AutoGrowDirective {
    private originalWidth: string
    private htmlElement: HTMLHtmlElement
    
    constructor(private elementRef: ElementRef, private render: Renderer) {
      
    }
    
    public onFocus(){
        this.htmlElement = this.elementRef.nativeElement
        this.originalWidth = this.htmlElement.style.width
        console.log(this.originalWidth)

        let newWidth = this.originalWidth + 200;
        console.log(newWidth)

        let styleWidth: string = newWidth+"px";
        console.log(styleWidth)

        this.render.setElementStyle(this.elementRef.nativeElement, "width", styleWidth)
    }

    public onBlur(){
        this.render.setElementStyle(this.elementRef.nativeElement, "width", this.originalWidth)
    }
}