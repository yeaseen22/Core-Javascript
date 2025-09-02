const tabs = document.querySelector('.tabs')
console.log('tabs', tabs);


tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('tab')) {
        const tabId = e.target.dataset.tab; // which tab number?
        console.log('clicked tab:', tabId);

        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        e.target.classList.add('active');
        document.querySelector(`.content[data-tab="${tabId}"]`).classList.add('active');

    }
})