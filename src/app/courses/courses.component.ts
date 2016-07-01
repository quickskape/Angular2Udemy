import {Component} from "@angular/core"
import {Course} from "./course"
import {CoursesService} from "./courses.service"
import { MD_CARD_DIRECTIVES } from "@angular2-material/card"
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button"

@Component({
    selector: "courses",
    templateUrl: "./app/courses/courses.component.html",
    providers: [CoursesService],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
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