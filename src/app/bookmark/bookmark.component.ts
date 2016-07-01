import {Component} from "@angular/core"

@Component({
    selector: "bookmark",
    templateUrl: "./app/bookmark/bookmark.component.html"
})
export class BookmarkComponent {
    public isBookmarked: boolean = true

    public onBookmark(){
        this.isBookmarked = !this.isBookmarked
    }
}