import {Component} from "@angular/core"
import {Course} from "./course"
import {CoursesService} from "./courses.service"
import { MD_CARD_DIRECTIVES } from "@angular2-material/card"
import { MD_LIST_DIRECTIVES } from "@angular2-material/list"
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button"
import { BookmarkComponent } from '../bookmark/bookmark.component'

import { AutoGrowDirective } from "../auto-grow.directive"

@Component({
    selector: "courses",
    templateUrl: "./app/courses/courses.component.html",
    providers: [CoursesService],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, AutoGrowDirective, BookmarkComponent]
})
export class CoursesComponent {
    courses: Array<Course>;

    constructor(private coursesService: CoursesService) {
        this.courses = []
    }

    public getCourses() {
        this.courses = this.coursesService.getCourses()   
    }

    public clearCourse() {
        this.courses = []
    }
}