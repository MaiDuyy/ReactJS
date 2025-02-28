# ReactJS BaiTap
- Pham Mai Duy
package dao;

import model.Enrollment;
import org.neo4j.driver.SessionConfig;

import java.sql.Driver;

public class StudentDAO {
    private final Driver driver;
    private final SessionConfig sessionConfig;

    public StudentDAO(Driver driver, String dbName){
        this.driver = driver;
        this.sessionConfig = SessionConfig.builder().withDatabase(dbName).build();
    }
//    1. ADD ENROLLMENT COURSE
    public boolean enrollCourse(String sutdentId, String courseId){
        String query = "MACTH(s:Student{student_id : $id}) , (c:Course{couse_id: $idC})" +
                " CREATE (s) -[r:ENROLLED] ->(c)";
        return false;
    }
    //    2. DELETE ENROLLMENT COURSE
    public boolean unenrollCourse(String sutdentId, String courseId){
        return false;
    }
    //    3. FIND ENROLLMENT COURSE
    public Enrollment finEnrollment(String sutdentId, String courseId){
        return null;
    }
    //    4. UPDATE ENROLLMENT COURSE
    public boolean updateEnroll(String sutdentId, String courseId){
        return false;
    }

}
