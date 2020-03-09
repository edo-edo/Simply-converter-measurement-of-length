    const container = {
        km: {
            Miles: 0.621371192,
            Meters: 1000,
            Centimeters: 100000
        },
        ml: {
            kilometers: 1.609344,
            Meters: 1609.344,
            Centimeters: 160934.4

        },
        mt: {
            kilometers: 0.001,
            Miles: 0.000621371192,
            Centimeters: 100
        },
        cm:{
            kilometers: 0.00001,
            Miles: 0.0000062137,
            Meters: 0.01
        }

        
    }
    document.getElementsByClassName('boxes')[0].style.visibility = 'hidden';
    document.getElementById('input').addEventListener('input', (e) => {
    document.getElementsByClassName('boxes')[0].style.visibility = 'visible';
    let vl = e.target.value;
    let opt = document.getElementById('opt').value;
    let keys = Object.keys(container[opt]);
    let boxesChilds = document.getElementsByClassName('boxes')[0];
    for (let i = 0; i < 3; i++){
    boxesChilds.children[i].firstElementChild.innerHTML = keys[i];
    boxesChilds.children[i].lastElementChild.innerHTML = vl *  container[opt][keys[i]];
    }
});
    document.getElementById('opt').addEventListener('change',(e) => {
        let vl = e.target.value;
        let getName = {
            km: "kilometers",
            ml: "Miles",
            mt: "Meters",
            cm: "Centimeters"
        } 
        document.getElementById('text').innerHTML = `Enter ${getName[vl]}`;
    })