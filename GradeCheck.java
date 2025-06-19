public class GradeCheck {
    public static void main(String[] args) {
        int mark = 100;

        String grade = (mark > 90) ? "O grade" :
                       (mark > 70) ? "Grade A" :
                       (mark > 35) ? "Pass" :
                       "Fail";

        System.out.println("Mark: " + mark);
        System.out.println("Result: " + grade);
    }
}
