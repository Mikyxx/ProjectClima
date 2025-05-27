document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').ariaValueMax;
    
    if(input != '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=5ce4eb3da98cb28ffc51b0e9252ae057&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innetHTML = msg;
}