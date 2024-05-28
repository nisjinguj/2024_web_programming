// score는 수학, 국어, 영어, 과학순
class Student{
    name;
    id;
    score;
    rank = 0;
    // 
    constructor(name, id, score){
        this.name = name;
        this.id = id;
        this.score = score;
    }
    avg(score, rank){
        let i;
        let sum = 0;
        for(i = 0; i < length(score); i++){
            sum += score[i];
        }
        rank = sum / length(score);
        return rank;
    }
    rank_input(rank){
        switch(rank / 10){
            case(10):
            case(9): return rank = 'A';
            case(8): return rank = 'B';
            case(7): return rank = 'C';
            case(6): return rank = 'D';
            default: return rank = 'F';
        }
    }
    draw_student(){
        document.write(`<h1>학번 : ${this.id} 이름 : ${this.name}</h1> 평균 등급 : ${rank}`);

    }

}

const student_1 = ["최진호", 10520, [90, 70, 80, 85]];
let a = new Student(student_1);
a.draw_student();

alert("출력이 안되는~~~~");