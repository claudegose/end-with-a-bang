

(() =>{
    const funContent = document.getElementById('fun-content');

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


    async function getCatFact() {
        try {
            setInnerHTML('fun-content', '');
            const catFactResponse = await axios.get(`https://catfact.ninja/fact`);
            let catFact = catFactResponse.data.fact;


            const catImageResponse = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');


            let catFactH3Element = createNewElement('h3');
            catFactH3Element.innerHTML = catFact;
            funContent.appendChild(catFactH3Element);

            let catFactImageElement = createNewElement('img');
            setAttributeToNewElement(catFactImageElement, 'src', catImageResponse.data[0].url);
            funContent.appendChild(catFactImageElement);


        } catch (error) {


        };
    };

    document.getElementById('catFacts').addEventListener('click', ()=>{
        console.log('catsFactsClicked');
        getCatFact();
        }
    );

})()
