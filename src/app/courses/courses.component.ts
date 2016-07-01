import {Component} from "@angular/core"
import {Course} from "./course"
import {CoursesService} from "./courses.service"

@Component({
    selector: "courses",
    templateUrl: "./app/courses/courses.component.html",
    providers: [CoursesService]
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