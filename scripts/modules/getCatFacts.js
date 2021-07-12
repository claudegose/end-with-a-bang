(()=>{
    console.log("cat facts");


    async function getCatFact() {
        try {
            const response = await axios.get(`https://catfact.ninja/fact`);
            console.log(response.data);



        } catch (error) {


        };
    };

    getCatFact();

})()


