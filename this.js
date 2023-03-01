const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.name + 'is perticipating in an exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam ${subject}`;
    },
    tradtDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

student.exam();

const student2 = {
    name: 'Tanvir',
    money: 8000
}

student2.exam = student.exam;
student2.exam();

function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn').addEventListener('click', function(){
    console.log(this)
})