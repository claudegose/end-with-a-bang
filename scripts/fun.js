

(() =>{
    const funContent = document.getElementById('fun-content');

    const createAndAppendElement = (element, content, parentElement) => {
        let newElement = createNewElement(element);
        newElement.innerHTML = content;
        parentElement.appendChild(newElement);
    }
    const createAndAppendImage = (content, parentElement) =>{
        let newImageElement = createNewElement('img');
        setAttributeToNewElement(newImageElement, 'src', content);
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
            const catFactResponse = await axios.get(`https://catfact.ninja/fact`);

            const catFact = catFactResponse.data.fact;
            const catImageResponse = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
            const catImage = catImageResponse.data[0].url;

            createAndAppendElement('h3', catFact, funContent);
            createAndAppendImage(catImage, funContent);


        } catch (error) {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');

        };
    };

    async function getActivityList () {
        try{
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
    let memesArray = [];

    async function getMemesList() {
        try{
            const memesResponse = await axios.get(`https://api.imgflip.com/get_memes`);
            const memesData = memesResponse.data.data.memes;
            console.log(memesData);
            createAndAppendElement('h2', `Play a little. Give a new funny title to well-know memes`, funContent);
            createAndAppendImage(memesData[6].url, funContent);


            let counter=0;

            document.getElementById('memesMore').addEventListener('click', () => {
                setInnerHTML('fun-content', '');
                let memesIndex = counter%memesData.length;
                createAndAppendElement('h2', `Play a little. Give a new funny title to well-know memes`, funContent);
                createAndAppendImage(memesData[memesIndex].url, funContent);

                counter ++;



            })
        } catch {
            setInnerHTML('fun-content', 'Sorry, something went wrong.... Try again later');
        }
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

    })



    toggleActiveSideMenuButton();
    getCatFact();


})()
