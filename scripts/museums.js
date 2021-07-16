(()=>{

    const museumList = [
        {title: 'Louvre', value: 'louvre', city: 'Paris', country: 'France', url: 'https://www.louvre.fr/en/online-tours', img: '../img/louvre.jpg', description: 'France’s most famous museum is currently offering seven virtual tours: The Advent of the Artist, Founding Myths: From Hercules to Darth Vader, Power Plays, The Body in Movement, Egyptian Antiquities, Remains of the Louvre’s Moat and Galerie d’Apollon.'},
        {title: 'British Museum', value: 'britishmuseum', city: 'London', country: 'Great Britain', url: 'https://britishmuseum.withgoogle.com/', img: '../img/british.jpg', description: 'Explore ancient historical artifacts from Africa, Asia, the Americas, Europe and Oceania in this totally interactive virtual tour. This museum also features the Rosetta Stone!'},
        {title: 'The Metropolitan Museum of Art', value: 'metropolian', city: 'New York', country: 'USA', url: 'https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?hl=en&sv_lng=-73.9625541&sv_lat=40.780528&sv_h=310.6389255641154&sv_p=8.0915057213208&sv_pid=o4Ef1_t26JSvVHQX4jzb9Q&sv_z=0.6253222631835352', img: '../img/metropolian.jpeg', description: 'This tour offers a 3D experience as if you’re actually walking through the museum. Explore 30 exhibits in one sitting, featuring iconic paintings from even more iconic artists like Vincent Van Gogh, Johannes Vermeer and more.'},
        {title: 'National Museum of United States Air force', value: 'airForce', city: 'Wright-Patterson AFB', country: 'USA', url: 'http://www.nmusafvirtualtour.com/', img: '../img/airforce.jpeg', description:'The official virtual tour of the National Museum of the United States Air Force includes a stroll through the cockpit as well as models of America’s earliest aircraft.'},
        {title: 'Rijksmuseum', value: 'rijksmusuem', city: 'Amsterdam', country: 'Netherlands', url: 'https://artsandculture.google.com/streetview/rijksmuseum/iwH5aYGoPwSf7g?hl=en&sv_lng=4.885205215844479&sv_lat=52.35991625391451&sv_h=315.331777708179&sv_p=-2.0809394039497278&sv_pid=DSvtN4GXURf5NdWg7T7DeQ&sv_z=0.39990505970068113', img: '../img/rijksmuseum.jpg', description: 'This museum is chock-full of some of the most beautiful paintings to grace walls, and it’s available for touring via Google Arts & Culture.'},
        {title: 'Smithsonian National Museum of Natural History', value: 'smithonian', city: 'Washington', country: 'USA', url: 'https://naturalhistory2.si.edu/vt3/NMNH/', img: '../img/smithonian.jpg', description: 'Discover natural world. Have your own night at the museum—pun intended—with this interactive tour that leads you through the winding hallways of the world’s most interesting historical artifacts.'},
        {title: 'Van Gogh Museum', value: 'vanGogh', city: 'Amsterdam', country: 'Netherlands', url: 'https://artsandculture.google.com/streetview/van-gogh-museum-groundfloor/2QHwyv_Y6gueAw?hl=en&sv_lng=4.8808447&sv_lat=52.3585228&sv_h=356.2599501986613&sv_p=-7.070478135118108&sv_pid=-4-_Td0xXj9hdJq5aqo3mw&sv_z=1', img: '../img/vanGogh.jpg', description: 'Go for a walk through Van Gogh’s collection of famous art pieces with this virtual exhibit.'},
        {title: 'The Vatican Museum', value: 'vatican', city: 'Vatican', country: 'Italy', url: 'https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.1.html', img: '../img/vatican.jpg', description: 'Take a trip to Vatican City without even leaving your house with this virtual tour featuring Raphael’s Rooms, the Sistine Chapel and the New Wing.'},
        {title: 'Uffizi Gallery', value: 'uffizi', city: 'Florence', country: 'Italy', url: 'https://www.uffizi.it/mostre-virtuali/uffizi-virtual-tour', img: '../img/uffizi.jpg', description: 'High-quality pictures of some of the most attractive artistic works. You’ll have the chance to see the works of some famous italian artists such as Cimabue or Botticelli.'},
        {title: 'Detroit Institute of Arts', value: 'detroit', city: 'Detroit,', country: 'USA', url: 'https://artsandculture.google.com/partner/detroit-institute-of-arts?hl=en', img: '../img/detroit.jpg', description: 'Get your fill of modern art, realism, impressionism and more with Detroit Institute of Arts’ online exhibits. There’s also an exhibit that features Frida Kahlo.'},
        {title: 'Georgia O’Keeffe Museum', value: 'okeeffe', city: 'Santa Fe', country: 'USA', url: 'https://artsandculture.google.com/partner/georgia-o-keeffe-museum?hl=en', img: '../img/okeeffe.jpg', description: 'Five virtual exhibits walk you through the inspiration behind Georgia O’Keeffe’s greatest works, from modernism to watercolors. She’s affectionately dubbed the “Mother of American Modernism,” and these pieces truly take our breath away.'},
        {title: 'The J. Paul Getty Museum', value: 'getty', city: 'Los Angeles', country: 'USA', url: '', img: '../img/getty.jpg', description: 'With over 25 online exhibits, the J. Paul Getty Museum is loaded with color, history and life lessons we can all take home.'},
        {title: 'High Museum of Art', value: 'atlantaart', city: 'Atlanta', country: 'USA', url: 'https://artsandculture.google.com/exhibit/civil-rights-photography/9wISPkiyouv-Lw?hl=en', img: '../img/atlanta.jpg', description: 'Atlanta is home to some of America’s most fascinating history. Walk through the passionate story of the Civil Rights Movement with this online exhibit.'},
        {title: 'Museum of Fine Arts', value: 'bostonfinearts', city: 'Boston', country: 'USA', url: 'https://artsandculture.google.com/partner/museum-of-fine-arts-boston?hl=en', img: '../img/bosotn.jpg', description: 'For all things fashion—and all things art—the 16 virtual exhibits by the Museum of Fine Arts are definitely worth a look. This is another interactive tour that guides you through the museum without ever needing to leave your couch.'},
        {title: 'National Women’s History Museum', value: 'womwnshistory', city: 'Alexandria', country: 'USA', url: 'https://www.womenshistory.org/womens-history/online-exhibits', img: '../img/womensrhistory.jpg', description: 'These online exhibits feature some of the most influential women in amazing detail, from Harriet Tubman to the brave ladies of the Suffrage Movement. There’s a lot of history here worth spending an hour or two on.'},
        {title: 'Thyssen-Bornemisza Museum', value: 'thyssenbrnemisza', city: 'Madrid', country: 'Spain', url: 'https://www.museothyssen.org/en/thyssenmultimedia', img: '../img/museo-thyssen.jpg', description: 'You can find the full collection from the Thyssen-Bornemisza Museum including virtual tours, videos and interviews on their website.'},
        {title: 'Musée d’Orsay', value: 'dorsey', city: 'Paris', country: 'France', url: 'https://www.thegeographicalcure.com/post/world-class-museums-to-enjoy-online', img: '../img/dorsay.jpg', description: 'This is one of most famous museums in Paris, housed in a beautiful converted railway station. You can\'t visit the beautiful museum right now. But you can virtually see dozens of famous works from French and European artists who toiled in Paris between 1848 and 1914. You\'ll see artworks from Monet, Cézanne, Gauguin, and so many other artists.\n' +
                '\n' +
                'In particular, the d\'Orsay is a Van Gogh treasure trove. You can inspect his Self Portrait,  Starry Night, Dr. Gachet, The Church at Auvers, and The Siesta. Other masterpieces at the d\'Orsay include Manet\'s Luncheon on the Grass and Olympia, Paul Cezanne\'s Card Players, Claude Monet\'s Houses of Parliament, and Auguste Renoir\'s Moulin de la Galette.'},
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
                setInnerHTML('museums-description', '');
                document.getElementById('museum-url').classList.remove('display-none')

            })

        }
    };
    museumInput.value = '';
    let filteredMuseums = museumList;

    museumInput.addEventListener('focus', () =>{
        filteredMuseums = museumList;
        setInnerHTML('filteredOptions', '');
        filteredOptions.classList.remove('display-none');
        createFilteredMuseumList();
        choseAndDisplayMuseum();

    });


    museumInput.addEventListener('keyup', () =>{

        filteredMuseums = museumList.filter((museum) => {
            return ((museum.title.toLowerCase()).includes(museumInput.value.toLowerCase()) || (museum.country.toLowerCase()).includes(museumInput.value.toLowerCase()));
        });


        setInnerHTML('filteredOptions', '');
        createFilteredMuseumList();
        choseAndDisplayMuseum();

        if (filteredMuseums.length == 0){
            setInnerHTML('filteredOptions', 'No results found');
        }
    });


})();