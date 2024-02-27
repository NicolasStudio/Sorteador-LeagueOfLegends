function buscarChamp() {
    // Capturar o elemento select
    let selectElement = document.getElementById('opcoesRoutes');
    // Capturar o valor selecionado
    let rota = selectElement.value;

    // Array de campeões para cada rota
    let champions = {
        autoFill: [],
        topLaner: ["Aatrox", "Akali", "Briar", "Camille", "Cho Gath", "Darius", "Dr Mundo", "Fiora", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jarvan IV", "Jax", "Jayce", "Kayle", "Kennen", "Kled", "K sante", "Lillia", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Rek Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryse", "Sejuani", "Sett", "Shen", "Singed", "Sion", "Tahm Kench", "Trundle", "Tryndamere", "Udyr", "Vi", "Viego", "Viktor", "Vladimir ", "Volibear", "Warwick", "Wukong", "Volibear", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zac"],
        jungle: ["Aatrox", "Amumu", "Bel Veth", "Briar", "Cho Gath", "Diana", "Dr Mundo", "Ekko","Elise", "Evelynn", "Fiddlesticks", "Gragas","Graves", "Hecarim", "Ivern", "Jarvan IV", "Jax", "Karthus", "Kayn", "Kha Zix", "Kindred", "Lee Sin", "Lillia", "Maokai", "Master Yi", "Morgana", "Nasus", "Nidalee", "Nocturne", "Nunu e Willump", "Olaf", "Poppy", "Rammus", "Rek Sai", "Rell", "Rengar", "Rumble", "Sejuani", "Shaco", "Shyvana", "Sion", "Skarner", "Sylas", "Taliyah", "Talon", "Trundle", "Twitch", "Udyr", "Vi", "Viego", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Zac", "Zed"],
        midLaner: ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Azir", "Brand", "Cassiopeia", "Cho Gath", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Gragas", "Gwen", "Heimerdinger", "Hwei", "Irelia", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "LeBlanc", "Lissandra", "Lucian", "Lux", "Malzahar", "Morgana", "Naafiri", "Nautilus", "Neeko", "Nocturne", "Orianna", "Pyke", "Qiyana", "Renekton", "Rumble", "Sion", "Ryse", "Sivir", "Smolder", "Swain", "Sylas", "Syndra", "Taliyah", "Talon", "Twisted Fate", "Veigar", "Vel Koz", "Vex", "Viktor", "Vladimir", "Volibear", "Wukong", "Xerath", "Yasuo", "Yone", "Yorick", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"],
        adcarry: ["Akshan", "Aphelios", "Ashe", "Caitlyn", "Corki", "Draven", "Ezreal", "Jayce", "Jhin", "Jinx", "Kai Sa", "Kalista", "Lucian", "Miss Fortune", "Neeko", "Nilah", "Quinn", "Samira", "Senna", "Seraphine", "Sivir", "Smolder", "Tristana", "Varus", "Vayne", "Xayah", "Yasuo", "Zeri"],
        support: ["Amumu", "Annie", "Alistar", "Ashe", "Bardo", "Blitzcrank", "Brand", "Braum", "Cho Gath", "Fiddlesticks", "Galio", "Ivern", "Janna", "Jarvan IV", "Karma", "Leona", "Lulu", "Malphite", "Maokai", "Milio", "Morgana", "Nami", "Nautilus", "Neeko", "Ornn", "Pantheon", "Poppy", "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine", "Shaco", "Sona", "Soraka", "Thresh", "Vel Koz", "Xerath", "Yumi", "Zilean"]
    };

// Preencher o array autoFill com os campeões únicos dos outros arrays
Object.keys(champions).forEach(key => {
        // Iterar sobre cada array de campeões, exceto o autoFill
        if (key !== "autoFill") {
            champions[key].forEach(campeao => {
                // Verificar se o campeão já está presente no array autoFill
                if (!champions.autoFill.includes(campeao)) {
                    // Se não estiver presente, adicionar o campeão ao array autoFill
                    champions.autoFill.push(campeao);
                }
            });
        }
});

    // Selecionar um campeão aleatório com base na rota selecionada
    let campeoesDaRota = champions[rota];
    let campeaoSorteado = campeoesDaRota[Math.floor(Math.random() * campeoesDaRota.length)];

    // Atualizar a imagem do campeão com o campeão sorteado
    let imgChampion = document.querySelector('.imgChampion');
    imgChampion.src = `Img/Champions/${campeaoSorteado}.png`;

}

function buscarRuna() {
    let determinacao = {
        principal: ["Aperto dos Mortos-Vivos", "Guardiao", "Pos-choque"],
        linhaUm: ["Demolir", "Fonte de Vida", "Golpe de Escudo"],
        linhaDois: ["Condicionamento", "Ventos Revigorantes", "Osso Revestidos"],
        linhaTres: ["Crescimento Excessivo", "Inabalável", "Revitalizar"]
    };

    let dominacao = {
        principal: ["Chuva de Laminas", "Colheita Sombria", "Eletrocutar", "Predador"],
        linhaUm: ["Golpe Desleal", "Gosto de Sangue", "Impacto Repentino"],
        linhaDois: ["Globos Oculares", "Poro Fantasma", "Sentinela Zumbi"],
        linhaTres: ["Caça Ardilosa", "Caça Incansavel", "Caça Suprema", "Caçador de Tesouros"]
    };

    let feiticaria = {
        principal: ["Cometa Arcano", "Impeto Gradual", "Invocar Aery"],
        linhaUm: ["Faixa de Fluxo de Mana", "Manto de Nimbus", "Orbe Anulador"],
        linhaDois: ["Celeridade", "Foco Absoluto", "Transcendencia"],
        linhaTres: ["Caminhar Sobre as Aguas", "Chamuscar", "Tempestade Crescente"]
    };

    let inspiracao = {
        principal: ["Aprimoramento Gacial", "Livro de Feiticos", "Primeiro Ataque"],
        linhaUm: ["Calçados Magicos", "Flashtração Hextec", "Tonico Triplo"],
        linhaDois: ["Entrega de Biscoitos", "Mercado Futuro", "Pulverizador de Tropas"],
        linhaTres: ["Perspicacia Cosmica", "Tonico de Distorcao no Tempo", "Velocidade de Aproximacao"]
    };

    let precisao = {
        principal: ["Agilidade nos pes", "Conquistador", "Pressione o ataque", "Ritmo fatal"],
        linhaUm: ["Cura Excessiva", "Presença de Espirito", "Triunfo"],
        linhaDois: ["Lenda Espontaneidade", "Lenda Tenancidade", "Linhagem"],
        linhaTres: ["Ate a Morte", "Dilacerar", "Golpe de Misericordia"]
    };

    let runeTrees = [determinacao, dominacao, feiticaria, inspiracao, precisao]; // inclua os outros objetos aqui];
    let randomIndex = Math.floor(Math.random() * runeTrees.length);
    let runeTree = runeTrees[randomIndex];

        if(runeTree == determinacao){

                // Selecionar a runa principal aleatoriamente
                let principalIndex = Math.floor(Math.random() * runeTree.principal.length);
                let principal = runeTree.principal[principalIndex];

                // Remove a runa principal selecionada do objeto
                runeTree.principal.splice(principalIndex, 1);

                // Sortear os elementos do objeto principal, se houver mais de 1
                let principalRunas = [principal];
                if (runeTree.principal.length > 0) {
                    principalRunas.push(runeTree.principal[Math.floor(Math.random() * runeTree.principal.length)]);
                }

                // Selecionar a imagem da runa principal
                let imgPrincipal = document.getElementById('imgRunaPrincipal');
                imgPrincipal.src = `Img/Runes/${principalRunas[0]}.webp`;

                // Selecionar e preencher as outras linhas de runas
                let linhaUm = shuffle(runeTree.linhaUm);
                let linhaDois = shuffle(runeTree.linhaDois);
                let linhaTres = shuffle(runeTree.linhaTres);

                // Função para embaralhar um array (necessária para sortear elementos)
                function shuffle(array) {
                    let currentIndex = array.length,
                        temporaryValue, randomIndex;
                    while (0 !== currentIndex) {
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                    }
                    return array;
                }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'linhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'linhaDois');

                // Preencher as imagens das runas para a linha três
                preencherRunas(linhaTres, 'linhaTres');


                let runeTrees = [dominacao, feiticaria, inspiracao, precisao]; // inclua os outros objetos aqui];
                let randomIndex = Math.floor(Math.random() * runeTrees.length);
                runeTree = runeTrees[randomIndex];

                if (runeTree == dominacao){
                    // Selecionar a runa secundária aleatoriamente
                    let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                    let secundaria = runeTree.principal[secundariaIndex];

                    // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                    if (secundaria === principalRunas[0]) {
                        secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                    }

                    // Preencher a imagem da runa secundária
                    let imgSecundaria = document.getElementById('imgRunaSecundary');
                    imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }
    
                    // Função para preencher as imagens das runas
                    function preencherRunas(array, id) {
                        let imgRunas = document.getElementById(id);
                        array.forEach((runa, index) => {
                            imgRunas.src = `Img/Runes/${runa}.webp`;
                        });
                    }
    
                    // Preencher as imagens das runas para a linha um
                    preencherRunas(linhaUm, 'secoundaryLinhaUm');
    
                    // Preencher as imagens das runas para a linha dois
                    preencherRunas(linhaDois, 'secoundaryLinhaDois');

                }else if (runeTree == feiticaria){
                    // Selecionar a runa secundária aleatoriamente
                    let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                    let secundaria = runeTree.principal[secundariaIndex];

                    // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                    if (secundaria === principalRunas[0]) {
                        secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                    }

                    // Preencher a imagem da runa secundária
                    let imgSecundaria = document.getElementById('imgRunaSecundary');
                    imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }
    
                    // Função para preencher as imagens das runas
                    function preencherRunas(array, id) {
                        let imgRunas = document.getElementById(id);
                        array.forEach((runa, index) => {
                            imgRunas.src = `Img/Runes/${runa}.webp`;
                        });
                    }
    
                    // Preencher as imagens das runas para a linha um
                    preencherRunas(linhaUm, 'secoundaryLinhaUm');
    
                    // Preencher as imagens das runas para a linha dois
                    preencherRunas(linhaDois, 'secoundaryLinhaDois');

                }else if (runeTree == inspiracao){
                    // Selecionar a runa secundária aleatoriamente
                    let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                    let secundaria = runeTree.principal[secundariaIndex];

                    // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                    if (secundaria === principalRunas[0]) {
                        secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                    }

                    // Preencher a imagem da runa secundária
                    let imgSecundaria = document.getElementById('imgRunaSecundary');
                    imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }
    
                    // Função para preencher as imagens das runas
                    function preencherRunas(array, id) {
                        let imgRunas = document.getElementById(id);
                        array.forEach((runa, index) => {
                            imgRunas.src = `Img/Runes/${runa}.webp`;
                        });
                    }
    
                    // Preencher as imagens das runas para a linha um
                    preencherRunas(linhaUm, 'secoundaryLinhaUm');
    
                    // Preencher as imagens das runas para a linha dois
                    preencherRunas(linhaDois, 'secoundaryLinhaDois');
                }else if (runeTree == precisao){
                    // Selecionar a runa secundária aleatoriamente
                    let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                    let secundaria = runeTree.principal[secundariaIndex];

                    // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                    if (secundaria === principalRunas[0]) {
                        secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                    }

                    // Preencher a imagem da runa secundária
                    let imgSecundaria = document.getElementById('imgRunaSecundary');
                    imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }
    
                    // Função para preencher as imagens das runas
                    function preencherRunas(array, id) {
                        let imgRunas = document.getElementById(id);
                        array.forEach((runa, index) => {
                            imgRunas.src = `Img/Runes/${runa}.webp`;
                        });
                    }
    
                    // Preencher as imagens das runas para a linha um
                    preencherRunas(linhaUm, 'secoundaryLinhaUm');
    
                    // Preencher as imagens das runas para a linha dois
                    preencherRunas(linhaDois, 'secoundaryLinhaDois');
                }else{
                    console.log("ERRO NO ENCADEAMENTO DE IF E ELSE 2º!!!");

                }
                    
        }else if(runeTree == dominacao){

            // Selecionar a runa principal aleatoriamente
            let principalIndex = Math.floor(Math.random() * runeTree.principal.length);
            let principal = runeTree.principal[principalIndex];

            // Remove a runa principal selecionada do objeto
            runeTree.principal.splice(principalIndex, 1);

            // Sortear os elementos do objeto principal, se houver mais de 1
            let principalRunas = [principal];
            if (runeTree.principal.length > 0) {
                principalRunas.push(runeTree.principal[Math.floor(Math.random() * runeTree.principal.length)]);
            }

            // Selecionar a imagem da runa principal
            let imgPrincipal = document.getElementById('imgRunaPrincipal');
            imgPrincipal.src = `Img/Runes/${principalRunas[0]}.webp`;

            // Selecionar e preencher as outras linhas de runas
            let linhaUm = shuffle(runeTree.linhaUm);
            let linhaDois = shuffle(runeTree.linhaDois);
            let linhaTres = shuffle(runeTree.linhaTres);

            // Função para embaralhar um array (necessária para sortear elementos)
            function shuffle(array) {
                let currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }

            // Função para preencher as imagens das runas
            function preencherRunas(array, id) {
                let imgRunas = document.getElementById(id);
                array.forEach((runa, index) => {
                    imgRunas.src = `Img/Runes/${runa}.webp`;
                });
            }

            // Preencher as imagens das runas para a linha um
            preencherRunas(linhaUm, 'linhaUm');

            // Preencher as imagens das runas para a linha dois
            preencherRunas(linhaDois, 'linhaDois');

            // Preencher as imagens das runas para a linha três
            preencherRunas(linhaTres, 'linhaTres');


            let runeTrees = [determinacao, feiticaria, inspiracao, precisao]; // inclua os outros objetos aqui];
            let randomIndex = Math.floor(Math.random() * runeTrees.length);
            runeTree = runeTrees[randomIndex];

            if (runeTree == determinacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == feiticaria){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == inspiracao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else if (runeTree == precisao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else{
                console.log("ERRO NO ENCADEAMENTO DE IF E ELSE 2º!!!");

            }
                
        }else if(runeTree == feiticaria){

            // Selecionar a runa principal aleatoriamente
            let principalIndex = Math.floor(Math.random() * runeTree.principal.length);
            let principal = runeTree.principal[principalIndex];

            // Remove a runa principal selecionada do objeto
            runeTree.principal.splice(principalIndex, 1);

            // Sortear os elementos do objeto principal, se houver mais de 1
            let principalRunas = [principal];
            if (runeTree.principal.length > 0) {
                principalRunas.push(runeTree.principal[Math.floor(Math.random() * runeTree.principal.length)]);
            }

            // Selecionar a imagem da runa principal
            let imgPrincipal = document.getElementById('imgRunaPrincipal');
            imgPrincipal.src = `Img/Runes/${principalRunas[0]}.webp`;

            // Selecionar e preencher as outras linhas de runas
            let linhaUm = shuffle(runeTree.linhaUm);
            let linhaDois = shuffle(runeTree.linhaDois);
            let linhaTres = shuffle(runeTree.linhaTres);

            // Função para embaralhar um array (necessária para sortear elementos)
            function shuffle(array) {
                let currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }

            // Função para preencher as imagens das runas
            function preencherRunas(array, id) {
                let imgRunas = document.getElementById(id);
                array.forEach((runa, index) => {
                    imgRunas.src = `Img/Runes/${runa}.webp`;
                });
            }

            // Preencher as imagens das runas para a linha um
            preencherRunas(linhaUm, 'linhaUm');

            // Preencher as imagens das runas para a linha dois
            preencherRunas(linhaDois, 'linhaDois');

            // Preencher as imagens das runas para a linha três
            preencherRunas(linhaTres, 'linhaTres');


            let runeTrees = [dominacao, determinacao, inspiracao, precisao]; // inclua os outros objetos aqui];
            let randomIndex = Math.floor(Math.random() * runeTrees.length);
            runeTree = runeTrees[randomIndex];

            if (runeTree == determinacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == dominacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == inspiracao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else if (runeTree == precisao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else{
                console.log("ERRO NO ENCADEAMENTO DE IF E ELSE 2º!!!");
            }
                
        }else if(runeTree == inspiracao){

            // Selecionar a runa principal aleatoriamente
            let principalIndex = Math.floor(Math.random() * runeTree.principal.length);
            let principal = runeTree.principal[principalIndex];

            // Remove a runa principal selecionada do objeto
            runeTree.principal.splice(principalIndex, 1);

            // Sortear os elementos do objeto principal, se houver mais de 1
            let principalRunas = [principal];
            if (runeTree.principal.length > 0) {
                principalRunas.push(runeTree.principal[Math.floor(Math.random() * runeTree.principal.length)]);
            }

            // Selecionar a imagem da runa principal
            let imgPrincipal = document.getElementById('imgRunaPrincipal');
            imgPrincipal.src = `Img/Runes/${principalRunas[0]}.webp`;

            // Selecionar e preencher as outras linhas de runas
            let linhaUm = shuffle(runeTree.linhaUm);
            let linhaDois = shuffle(runeTree.linhaDois);
            let linhaTres = shuffle(runeTree.linhaTres);

            // Função para embaralhar um array (necessária para sortear elementos)
            function shuffle(array) {
                let currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }

            // Função para preencher as imagens das runas
            function preencherRunas(array, id) {
                let imgRunas = document.getElementById(id);
                array.forEach((runa, index) => {
                    imgRunas.src = `Img/Runes/${runa}.webp`;
                });
            }

            // Preencher as imagens das runas para a linha um
            preencherRunas(linhaUm, 'linhaUm');

            // Preencher as imagens das runas para a linha dois
            preencherRunas(linhaDois, 'linhaDois');

            // Preencher as imagens das runas para a linha três
            preencherRunas(linhaTres, 'linhaTres');


            let runeTrees = [dominacao, feiticaria, determinacao, precisao]; // inclua os outros objetos aqui];
            let randomIndex = Math.floor(Math.random() * runeTrees.length);
            runeTree = runeTrees[randomIndex];

            if (runeTree == determinacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == dominacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == feiticaria){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else if (runeTree == precisao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else{
                console.log("ERRO NO ENCADEAMENTO DE IF E ELSE 2º!!!");
            }
                
        }else if(runeTree == precisao){

            // Selecionar a runa principal aleatoriamente
            let principalIndex = Math.floor(Math.random() * runeTree.principal.length);
            let principal = runeTree.principal[principalIndex];

            // Remove a runa principal selecionada do objeto
            runeTree.principal.splice(principalIndex, 1);

            // Sortear os elementos do objeto principal, se houver mais de 1
            let principalRunas = [principal];
            if (runeTree.principal.length > 0) {
                principalRunas.push(runeTree.principal[Math.floor(Math.random() * runeTree.principal.length)]);
            }

            // Selecionar a imagem da runa principal
            let imgPrincipal = document.getElementById('imgRunaPrincipal');
            imgPrincipal.src = `Img/Runes/${principalRunas[0]}.webp`;

            // Selecionar e preencher as outras linhas de runas
            let linhaUm = shuffle(runeTree.linhaUm);
            let linhaDois = shuffle(runeTree.linhaDois);
            let linhaTres = shuffle(runeTree.linhaTres);

            // Função para embaralhar um array (necessária para sortear elementos)
            function shuffle(array) {
                let currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }

            // Função para preencher as imagens das runas
            function preencherRunas(array, id) {
                let imgRunas = document.getElementById(id);
                array.forEach((runa, index) => {
                    imgRunas.src = `Img/Runes/${runa}.webp`;
                });
            }

            // Preencher as imagens das runas para a linha um
            preencherRunas(linhaUm, 'linhaUm');

            // Preencher as imagens das runas para a linha dois
            preencherRunas(linhaDois, 'linhaDois');

            // Preencher as imagens das runas para a linha três
            preencherRunas(linhaTres, 'linhaTres');


            let runeTrees = [dominacao, feiticaria, inspiracao, determinacao]; // inclua os outros objetos aqui];
            let randomIndex = Math.floor(Math.random() * runeTrees.length);
            runeTree = runeTrees[randomIndex];

            if (runeTree == determinacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == dominacao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;


                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');

            }else if (runeTree == feiticaria){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else if (runeTree == inspiracao){
                // Selecionar a runa secundária aleatoriamente
                let secundariaIndex = Math.floor(Math.random() * runeTree.principal.length);
                let secundaria = runeTree.principal[secundariaIndex];

                // Verificar se a runa secundária é a mesma que a principal e trocar se necessário
                if (secundaria === principalRunas[0]) {
                    secundaria = runeTree.principal[(secundariaIndex + 1) % runeTree.principal.length];
                }

                // Preencher a imagem da runa secundária
                let imgSecundaria = document.getElementById('imgRunaSecundary');
                imgSecundaria.src = `Img/Runes/${secundaria}.webp`;

                    // runas da segunda arvore
                    let linhaUm = shuffle(runeTree.linhaUm);
                    // Combina os elementos de runeTree.linhaDois e runeTree.linhaTres em um único array
                    let combinedArray = [...runeTree.linhaDois, ...runeTree.linhaTres];

                    // Embaralha o array combinado
                    let linhaDois = shuffle(combinedArray);

                    // Função para embaralhar um array
                    function shuffle(array) {
                        let currentIndex = array.length,
                            temporaryValue, randomIndex;
                        while (0 !== currentIndex) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                // Função para preencher as imagens das runas
                function preencherRunas(array, id) {
                    let imgRunas = document.getElementById(id);
                    array.forEach((runa, index) => {
                        imgRunas.src = `Img/Runes/${runa}.webp`;
                    });
                }

                // Preencher as imagens das runas para a linha um
                preencherRunas(linhaUm, 'secoundaryLinhaUm');

                // Preencher as imagens das runas para a linha dois
                preencherRunas(linhaDois, 'secoundaryLinhaDois');
            }else{
                console.log("ERRO NO ENCADEAMENTO DE IF E ELSE 2º!!!");
            }
                
        }else{
            console.log("Erro! não localizado runa principal!")
        }
        





}
