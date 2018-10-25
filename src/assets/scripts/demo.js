const doToggle = () => {
    console.log('doToggle');
    $('#btn').on('click', (e) => {
        e.preventDefault();
        $('body').toggle();
    })
};

$(() => {
    doToggle('Hello Cauê');
});