const questionAnswers = document.body.querySelectorAll('.dropdown-set');

function getVariables(qa) {
    return {
        question: qa.children[0],
        answer: qa.children[1],
        arrow: qa.children[0].children[0]
    }
}

function expandQuestion(qa) {
    const { question, answer, arrow } = getVariables(qa);

    qa.classList.add('expanded')
    question.classList.add('bold');
    answer.classList.add('visible');
    arrow.classList.add('flip');
}

function closeQuestion(qa) {
    const { question, answer, arrow } = getVariables(qa);

    qa.classList.remove('expanded');
    question.classList.remove('bold');
    answer.classList.remove('visible');
    arrow.classList.remove('flip');
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
