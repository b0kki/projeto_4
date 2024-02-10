document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const TargetTab = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${TargetTab}]`);
            HideAllTabs();
            tab.classList.add('info__container__content__box--is-active');
            removeActiveButton ();
            botao.target.classList.add('info__container__tabs__button--is-active')
        })
    }

    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openNclose);
    }
})

function openNclose (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeActiveButton () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('info__container__tabs__button--is-active')
    }
}

function HideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('info__container__content__box--is-active')
    }
}