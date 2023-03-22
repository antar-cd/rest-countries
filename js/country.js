 const loadCountries=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries (data))
 }
const displayCountries = countries =>{
    console.log(countries[0])
    const countriesHTML = countries.map(country =>getcountryHtml(country));
    //console.log(countriesHTML[0]);
    const container =document.getElementById('countries');
    container.innerHTML =countriesHTML.join(' ')
}
/* //orginal
 const getcountryHtml = country =>{
    return `
    <div class='country'>
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
} */
//option-1
/* const getcountryHtml = country =>{
    const {name,flags} =country
    return `
    <div class='country'>
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    `
} */
// option 2
const getcountryHtml = ({name,flags,area,region}) =>{
    return `
    <div class='country'>
        <h2>${name.common}</h2>
        <p>Area:${area}</p>
        <p>continet:${region}</p>
        <img src="${flags.png}">
    </div>
    `
}

 loadCountries()