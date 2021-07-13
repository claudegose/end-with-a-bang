

(() =>{
    const funContent = document.getElementById('fun-content');

    const createAndAppendElement = (element, content, parentElement, className = 'newElement') => {
        let newElement = createNewElement(element);
        newElement.innerHTML = content;
       newElement.classList.add(className);
        parentElement.appendChild(newElement);
    }
    const createAndAppendImage = (content, parentElement, className = 'newElementImage') =>{
        let newImageElement = createNewElement('img');
        setAttributeToNewElement(newImageElement, 'src', content);
        newImageElement.classList.add(className);
        parentElement.appendChild(newImageElement);
    };

    const createAndAppendButton = (id, text, parentElement) => {
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('id', id);
        buttonElement.innerHTML = text;
        parentElement.appendChild(buttonElement);
    };

    const setInnerHTML = (id, text) => {
        document.getElementById(id).innerHTML = text;
    }
    const createNewElement = (element) =>{
        let newCreatedElement = document.createElement(element);
        return newCreatedElement
    }

    const setAttributeToNewElement = (element, attribute, value) => {
        element.setAttribute(attribute, value);
    }

    const toggleActiveSideMenuButton = () => {
        const menuButtons = document.getElementsByClassName('left-menu-button');
        const showButtons = document.getElementsByClassName('show-button');


        for (let button of menuButtons){
            button.addEventListener('click', () =>{
                for (let button of menuButtons){
                    button.classList.remove('active');

                };
                let buttonId = button.getAttribute('id');


                for (let showButton of showButtons){
                    if (showButton.getAttribute('id').includes(buttonId)){
                        showButton.classList.remove('display-none');
                    } else {
                        showButton.classList.add('display-none');
                    };
                }


                button.classList.add('active');
            })

        }
    }


    async function getCatFact() {
        try {
            setInnerHTML('fun-title', ``);
            const catFactResponse = await axios.get(`https://catfact.ninja/fact`);

            const catFact = catFactResponse.data.fact;
            const catImageResponse = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
            const catImage = catImageResponse.data[0].url;

            createAndAppendElement('h3', catFact, funContent);
            createAndAppendImage(catImage, funContent, 'catImage');


        } catch (error) {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');

        };
    };

    async function getActivityList () {
        try{
            setInnerHTML('fun-title', ``);
            const activityResponse = await axios.get(`https://www.boredapi.com/api/activity`);

            const activityData = activityResponse.data;
            createAndAppendElement('h3', `Title: ${activityData.activity}`, funContent);
            createAndAppendElement('h4', `Type: ${activityData.type}`, funContent);
            createAndAppendElement('h4', `Participants: ${activityData.participants}`, funContent);
            createAndAppendElement('h5', `Price: ${activityData.price}`, funContent);

        } catch {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
        }
    }

    async function getMemesList() {
        try{
            setInnerHTML('fun-title', `Play a little. Give a new funny title to well-know memes`);
            const memesResponse = await axios.get(`https://api.imgflip.com/get_memes`);
            const memesData = memesResponse.data.data.memes;

            createAndAppendImage(memesData[6].url, funContent);

            let counter=0;

            document.getElementById('memesMore').addEventListener('click', () => {
                setInnerHTML('fun-content', '');
                let memesIndex = counter%memesData.length;
                createAndAppendImage(memesData[memesIndex].url, funContent, 'memesImage');

                counter ++;



            })
        } catch {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
        }
    };

    async function getJokeList(){
        try{
            setInnerHTML('fun-title', ``);
            const jokeResponse = await axios.get(`https://v2.jokeapi.dev/joke/Any`);

            let jokePart1 = jokeResponse.data.setup;
            let jokePart2 = jokeResponse.data.delivery;

            if (jokePart1== undefined || jokePart2== undefined ){
                setInnerHTML('funContent', '');
                getJokeList();
            }

            createAndAppendElement('h3', ` ${jokePart1}`, funContent);
            createAndAppendElement('h3', `... ${jokePart2}`, funContent);



        } catch {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
        }
    }
    async function getDogsFotos(){
        try{
            setInnerHTML('fun-title', ``);
            const dogFotosResponse = await axios.get(`https://random.dog/woof.json`);
            const dogFotoUrl = dogFotosResponse.data.url;
            createAndAppendImage(dogFotoUrl, funContent, 'dogImage');

        }catch {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
        }
    }

    function getQuotesList(){

            setInnerHTML('fun-title', `Get random quotes in various languages from best-rated quotes allover the world`);

            let options = {
                method: 'GET',
                url: 'https://quotes15.p.rapidapi.com/quotes/random/',
                headers: {
                    'x-rapidapi-key': 'b352bd4981msh95d1005e0402b75p1789b5jsn117e5b1e6edd',
                    'x-rapidapi-host': 'quotes15.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {

                let quotes = response.data.content;
                let quotesAuthor = response.data.originator.name;

                createAndAppendElement('h3', `${quotes}`, funContent, 'quotes');
                createAndAppendElement('h4', `${quotesAuthor}`, funContent, 'quotesAuthor');


            }).catch(function (error) {
                setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
            });


    }

    document.getElementById('catFacts').addEventListener('click', () => {
        setInnerHTML('fun-content', '');
        getCatFact();
    });
    document.getElementById('catFactsMore').addEventListener('click', ()=>{
        setInnerHTML('fun-content', '');
        getCatFact();
    });

    document.getElementById('activity').addEventListener('click', () =>{
        setInnerHTML('fun-content', '');
        getActivityList();
    });

    document.getElementById('activityMore').addEventListener('click', () =>{
        setInnerHTML('fun-content', '');
        getActivityList();
    });

    document.getElementById('memes').addEventListener('click', () => {
        setInnerHTML('fun-content', '');
        getMemesList();

    });
    //none direct eventlistener om More button, as API provides array of memes (this is proceeds directly in getMemes()

    document.getElementById('jokes').addEventListener('click', () => {
        setInnerHTML('fun-content', '');
        getJokeList();
    });

    document.getElementById('jokesMore').addEventListener('click', () => {
        setInnerHTML('fun-content', '');
        getJokeList();
    });

    document.getElementById('dogFotos').addEventListener('click', ()=>{
        setInnerHTML('fun-content', '');
        getDogsFotos();
    });
    document.getElementById('dogFotosMore').addEventListener('click', ()=>{
        setInnerHTML('fun-content', '');
        getDogsFotos();
    });


    document.getElementById('quotes').addEventListener('click', ()=>{
        setInnerHTML('fun-content', '');
        getQuotesList();

    });

    document.getElementById('quotesMore').addEventListener('click', ()=>{
        setInnerHTML('fun-content', '');
        getQuotesList();

    });







    toggleActiveSideMenuButton();
    getCatFact();


})()
