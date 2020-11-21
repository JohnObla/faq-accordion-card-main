const questionAnswers = document.body.querySelectorAll('.dropdown-set');
const questions = document.body.querySelectorAll('.question');
const answers = document.body.querySelectorAll('.answer');

function expandQuestion(qa) {
    const question = qa.children[0];
    const answer = qa.children[1];

    qa.classList.add('expanded')
    question.classList.add('bold');
    answer.classList.remove('hide');
}

function closeQuestion(qa) {
    const question = qa.children[0];
    const answer = qa.children[1];

    qa.classList.remove('expanded');
    question.classList.remove('bold');
    answer.classList.add('hide');
}

for (const qa of questionAnswers) {
    qa.addEventListener('click', () => {
        if (qa.classList.contains('expanded')) {
            closeQuestion(qa);
        } else {
            // Close all currently expanded questions
            for (const qaInner of questionAnswers) {
                closeQuestion(qaInner);
            }
            expandQuestion(qa);
        }
    });
}
