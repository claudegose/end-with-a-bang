(()=>{

    const museumList = [
        {title: 'Louvre', value: 'louvre', city: 'Paris', country: 'France', url: 'https://www.louvre.fr/en/online-tours', img: '../img/louvre.jpg', description: 'France’s most famous museum is currently offering seven virtual tours: The Advent of the Artist, Founding Myths: From Hercules to Darth Vader, Power Plays, The Body in Movement, Egyptian Antiquities, Remains of the Louvre’s Moat and Galerie d’Apollon.'},
        {title: 'British Museum', value: 'britishMuseum', city: 'London', country: 'Great Britain', url: 'https://britishmuseum.withgoogle.com/', img: '../img/british.jpg', description: 'Explore ancient historical artifacts from Africa, Asia, the Americas, Europe and Oceania in this totally interactive virtual tour. This museum also features the Rosetta Stone!'},
        {title: 'The Metropolitan Museum of Art', value: 'metropolian', city: 'New York', country: 'USA', url: 'https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?hl=en&sv_lng=-73.9625541&sv_lat=40.780528&sv_h=310.6389255641154&sv_p=8.0915057213208&sv_pid=o4Ef1_t26JSvVHQX4jzb9Q&sv_z=0.6253222631835352', img: '../img/metropolian.jpeg', description: 'This tour offers a 3D experience as if you’re actually walking through the museum. Explore 30 exhibits in one sitting, featuring iconic paintings from even more iconic artists like Vincent Van Gogh, Johannes Vermeer and more.'},
        {title: 'National Museum of United States Air force', value: 'airForce', city: 'Wright-Patterson AFB', country: 'USA', url: 'http://www.nmusafvirtualtour.com/', img: '../img/airforce.jpeg', description:'The official virtual tour of the National Museum of the United States Air Force includes a stroll through the cockpit as well as models of America’s earliest aircraft.'},
        {title: 'Rijksmuseum', value: 'rijksmusuem', city: 'Amsterdam', country: 'Netherlands', url: 'https://artsandculture.google.com/streetview/rijksmuseum/iwH5aYGoPwSf7g?hl=en&sv_lng=4.885205215844479&sv_lat=52.35991625391451&sv_h=315.331777708179&sv_p=-2.0809394039497278&sv_pid=DSvtN4GXURf5NdWg7T7DeQ&sv_z=0.39990505970068113', img: '../img/rijksmuseum.jpg', description: 'This museum is chock-full of some of the most beautiful paintings to grace walls, and it’s available for touring via Google Arts & Culture.'},
        {title: 'Smithsonian National Museum of Natural History', value: 'smithonian', city: 'Washington', country: 'USA', url: 'https://naturalhistory2.si.edu/vt3/NMNH/', img: '../img/smithonian.jpg', description: 'Discover natural world. Have your own night at the museum—pun intended—with this interactive tour that leads you through the winding hallways of the world’s most interesting historical artifacts.'},
        {title: 'Van Gogh Museum', value: 'vanGogh', city: 'Amsterdam', country: 'Netherlands', url: 'https://artsandculture.google.com/streetview/van-gogh-museum-groundfloor/2QHwyv_Y6gueAw?hl=en&sv_lng=4.8808447&sv_lat=52.3585228&sv_h=356.2599501986613&sv_p=-7.070478135118108&sv_pid=-4-_Td0xXj9hdJq5aqo3mw&sv_z=1', img: '../img/vanGogh.jpg', description: 'Go for a walk through Van Gogh’s collection of famous art pieces with this virtual exhibit.'},
        {title: 'The Vatican Museum', value: 'vatican', city: 'Vatican', country: 'Italy', url: 'https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.1.html', img: '../img/vatican.jpg', description: 'Take a trip to Vatican City without even leaving your house with this virtual tour featuring Raphael’s Rooms, the Sistine Chapel and the New Wing.'},
        {title: 'Uffizi Gallery', value: 'uffizi', city: 'Florence', country: 'Italy', url: 'https://www.uffizi.it/mostre-virtuali/uffizi-virtual-tour', img: '../img/uffizi.jpg', description: 'High-quality pictures of some of the most attractive artistic works. You’ll have the chance to see the works of some famous italian artists such as Cimabue or Botticelli.'},

    ];


    const setInnerHTML = (id, text) =>{
        document.getElementById(id).innerHTML = text;
    }

    const setAttribute = (id, attribute, value) =>{
        document.getElementById(id).setAttribute(attribute, value);
    }

    const museumInput = document.getElementById('museumInput');
    const filteredOptions = document.getElementById('filteredOptions');
    let chosenMuseum;

    const displayChosenMuseum = (museum) =>{
        setInnerHTML('museum-title', museum.title);
        setInnerHTML('museum-city', `City: ${museum.city}`);
        setInnerHTML('museum-country', `Country: ${museum.country}`);
        setAttribute('museum-img', 'src', museum.img);
        setAttribute('museum-url', 'href', museum.url);
        setInnerHTML('museum-url', `Visit ${museum.title}`);
        setInnerHTML('museum-description', museum.description);
    }

    const createFilteredMuseumList = () =>{
        for (let museum of filteredMuseums){
            let optionElement = document.createElement('p');
            optionElement.setAttribute('data-value', museum.value);
            optionElement.setAttribute('class', 'museumItem');
            optionElement.innerHTML = `${museum.title} (${museum.city}, ${museum.country})`;
            filteredOptions.appendChild(optionElement);

        };
    }

    const choseAndDisplayMuseum = () =>{
        let museumItems = document.getElementsByClassName('museumItem');

        for (let museum of museumItems){
            museum.addEventListener('click', () =>{
                let chosenMuseumValue = museum.getAttribute('data-value');


                for (let item of filteredMuseums){
                    if (item.value === chosenMuseumValue){
                        chosenMuseum = item;
                    }
                }
                filteredOptions.classList.add('display-none');
                displayChosenMuseum(chosenMuseum);
                museumInput.value = '';

            })

        }
    };
    museumInput.value = '';
    let filteredMuseums = museumList;

    museumInput.addEventListener('focus', () =>{
        setInnerHTML('filteredOptions', '');
        filteredOptions.classList.remove('display-none');
        createFilteredMuseumList();
        choseAndDisplayMuseum();

    });


    museumInput.addEventListener('keyup', () =>{

        filteredMuseums = museumList.filter((museum) => {
            return ((museum.country.toLowerCase()).includes(museumInput.value.toLowerCase()));
        });


        setInnerHTML('filteredOptions', '');
        createFilteredMuseumList();
        choseAndDisplayMuseum();

        if (filteredMuseums.length == 0){
            console.log('empty')
            setInnerHTML('filteredOptions', 'No results found');
        }
    });


})();