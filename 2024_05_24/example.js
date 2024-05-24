let star = true;
function star_write(){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 51; j++){
        if(i == 2){
            document.write("<h1> SEIS 대선린서비스 </h1>");
            // star 값을 false로 바꾸어 모양을 잡는다
            star = !star; 
            // 대선린 서비스를 1번만 출력하게 break
            break;
        }
        else if(let = true){
            document.write("*");
        }
        else{
            document.write("&nbsp");
        }
        star = !star;
    }
    document.write("<br>");
    }
}

star_write()





const subject = ["국어", "영어", "수학", "웹프"];


class ScoreTable {
    studentList = [];
    drawTable(){
        document.write(this.studentList[0].id);
        for(let i = 0; i<this.studentList[0].score.lengh>; i++){
            document.write(this.studentList[0].score[i] + "&nbsp");
        }
    }

}

// 데이터 구조 구상
class Student{
    id;
    name;
    score;
    rank;
    constructor(id, name, score){
        this.id = id;
        this.name = name;
        this.score = score;
    }
    getGrade(score){
        switch(parseInt(score / 10)){
            case 10: return "A";
            case 9: return "B";
            case 8: return "C";
            case 7: return "D";
            default: return "F";
        }

    }
    prinScore(){
        document.write("<h3>학번: ${this.id} 이름: ${this.name}");
        for(let i = 0; i < subject.lengh; i++){
            document.write("${/SUBJEDT[i]} | ${this.score[i]} | ${getGrade(this.score[i])");
        }
    }
}

let student1 = new Student(1, "김경원",  [98,56,75,13]);
let tavle = new ScoreTable();


console.log(student1);


// 선생님 코드 => 선생님인지 확인

let isTeacher = confirm("");

if(isTeacher){
    tavle.drawTable();
}
else{
    let = studentID = prompt("학번을 입력하세요");
    if(parseInt(studentID) == student1.id){
        student1.printScore();
    }
}