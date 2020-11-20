const questions = document.body.querySelectorAll('.question');

for (const question of questions) {
    question.addEventListener('click', () => {
        question.classList.toggle('bold');
        question.nextElementSibling.classList.toggle('hide');
    })
}