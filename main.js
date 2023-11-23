$(".form-icone").on("click", templateTarefa);

function templateTarefa() {
    const tarefa = $('.form-caixa').val();
    if(tarefa !== '') {
        $('.lista').append(`
            <li class="lista-item">
                <i class="fa-solid fa-square-check lista-icone verifica"></i>
                <p class="lista-tarefa">${tarefa}</p>
                <i class="fa-solid fa-square-minus lista-icone lixo"></i>
            </li>
            `)
    } else {
        alert('Para adicionar uma tarefa você precisa digitar no inbox!');
    };
    $('.form-caixa').focus()

    $('.lixo').on('click', (e) => e.target.parentNode.remove());

    $('.verifica').on( 'click', (e) => {
        $(e.target).css({color: '#acbd5e'})
        $(e.target.parentNode).css({ textDecoration: 'line-through'})
    });

}




