const questionAnswers = document.body.querySelectorAll('.dropdown-set');
const questions = document.body.querySelectorAll('.question');
const answers = document.body.querySelectorAll('.answer');

// for (const question of questions) {
//     question.addEventListener('click', () => {


//         question.classList.toggle('bold');
//         question.nextElementSibling.classList.toggle('hide');
//     })
// }

for (const qa of questionAnswers) {
    qa.addEventListener('click', () => {
        const question = qa.children[0];
        const answer = qa.children[1];

        if (qa.classList.contains('expanded')) {
            qa.classList.remove('expanded');
            question.classList.remove('bold');
            answer.classList.add('hide');
        } else {
            for (const qaInner of questionAnswers) {
                const questionInner = qaInner.children[0];
                const answerInner = qaInner.children[1];

                qaInner.classList.remove('expanded');
                questionInner.classList.remove('bold');
                answerInner.classList.add('hide');
            }

            qa.classList.add('expanded')
            question.classList.add('bold');
            answer.classList.remove('hide');
        }
    });
}