import {Course} from "./course"

export class CoursesService {

    public getCourses(): Array<Course> {
        let course1 = new Course()
        let course2 = new Course()
        let course3 = new Course()

        course1.name = "Maths"
        course1.time = 100;

        course2.name = "Science"
        course2.time = 200;

        course3.name = "English"
        course3.time = 300
        
        return [course1, course2, course3]
    }
}