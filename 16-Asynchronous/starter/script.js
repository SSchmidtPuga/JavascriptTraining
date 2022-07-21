'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className = '') {
    const contries = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.entries(data.languages)[0][1]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.entries(Object.entries(data.currencies)[0][1])[0][1]
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', contries);
    countriesContainer.style.opacity = 1;
};

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

// const getCountryandNeibour = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         // render country 1
//         renderCountry(data);
//         //render country 2
//         const Neibour = data.borders[0];
//         if (!Neibour) return;
//         const request2 = new XMLHttpRequest();

//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${Neibour}`);
//         request2.send();

//         request2.addEventListener('load', function() {
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);
//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryandNeibour('usa');

////// new way

// const countryFetch = function(country) {
//     //country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             renderCountry(data[0]);
//             const neibourCountry = data[0].borders[0];

//             if (!neibourCountry) return;

//             //country 2

//             return fetch(`https://restcountries.com/v3.1/alpha/${neibourCountry}`);
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(country) {
//             return renderCountry(country, 'neighbour');
//         });
// };

// // countryFetch('portugal');

// const countryFetch2 = function(country) {
//     //country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neibourCountry = data[0].borders[0];
//             if (!neibourCountry) return;
//             //country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neibourCountry}`);
//         })
//         .then(response => response.json())
//         .then(country => renderCountry(country[0], 'neighbour'));
// };

// countryFetch2('portugal');

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(Response => Response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbours = data[0].borders;
//             if (!neighbours) return;

//             return neighbours;
//         })
//         .then(neighbours =>
//             neighbours.forEach(neighbour =>
//                 fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//                 .then(Response => Response.json())
//                 .then(data => renderCountry(data[0], 'neighbour'))
//             )
//         );
// };

// getCountryData('germany');

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };

// const getCountryData = function(country) {
//     // Country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             if (!neighbour) throw new Error('No neighbour found!');
//             // Country 2
//             return getJSON(
//                 `https://restcountries.com/v3.1/alpha/${neighbour}`,
//                 'Country not found'
//             );
//         })

//     .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// const whereAmI = function(lat, lng) {
//     fetch(
//             `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[789667388359684305294x59456]`
//         )
//         .then(Response => Response.json())
//         .then(data => getCountryData(data.country))
//         .catch(err => console.error(`${err} 💥💥💥`));
// };

// whereAmI(52.508, 13.381);

const imgConteiner = document.querySelector('.images');

// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const createImage = function(imgPath) {
//     return new Promise(function(resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function() {
//             imgConteiner.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function() {
//             reject(new Error('Image not Found'));
//         });
//     });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('image 1 loades');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('image 2 loades');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// const whereAmI = async function() {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[789667388359684305294x59456]`
//     );

//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//         `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );

//     const data = await res.json();
//     renderCountry(data[0]);
// };

// whereAmI();

// let getPosition2 = function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// const getPosition3 = async function() {
//     try {
//         const position = await navigator.geolocation.getCurrentPosition(
//             position => position
//         );
//     } catch (err) {
//         console.log(err);
//     }
// };

// const whereAmI2 = async function() {
//     try {
//         //Saca posicion propia, y sus cordenadas
//         const pos2 = await getPosition2();

//         const { latitude: lat, longitude: lng } = pos2.coords;

//         if (!pos2)
//             throw new Error(
//                 'We couldn get you current position, please check your cookies'
//             );
//         // usa las cordenadas para saber donde esta en el mapa, con la api

//         const GeoLoc = await fetch(
//             `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[789667388359684305294x59456]`
//         );

//         if (!GeoLoc)
//             throw new Error(
//                 ' The api could find the country proprietly with the latitude and longitude, please check it'
//             );

//         const jsonGeoloc = await GeoLoc.json();

//         const dataCountries = await fetch(
//             `https://restcountries.com/v3.1/name/${jsonGeoloc.country}`
//         );

//         if (!dataCountries)
//             throw new Error(
//                 ' The api could find the country data proprietly, please check it'
//             );

//         const dataCountiesJson = await dataCountries.json();

//         renderCountry(dataCountiesJson[0]);

//         return `You are in ${jsonGeoloc.city}, ${jsonGeoloc.country}`;
//     } catch (err) {
//         console.error(`${err}`);
//         renderError(`${err.message}`);
//     }
// };
// whereAmI2();

// (async function() {
//     try {
//         const city = await whereAmI2();
//         console.log(`2 : ${city}`);
//     } catch (err) {
//         console.error(`2 :${err.message}`);
//     }
//     console.log(' 3: Finished getting location');
// })();

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };

// const get3Countries = async function(c1, c2, c3) {
//     try {
//         // const [country1] = await getJSON(
//         //     `https://restcountries.com/v3.1/name/${c1}`
//         // );
//         // const [country2] = await getJSON(
//         //     `https://restcountries.com/v3.1/name/${c2}`
//         // );
//         // const [country3] = await getJSON(
//         //     `https://restcountries.com/v3.1/name/${c3}`
//         // );
//         const data4 = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//         ]);
//         console.log(data4.map(d => d[0].capital));
//     } catch (err) {
//         console.log(err);
//     }
// };

// get3Countries('portugal', 'canada', 'tanzania');

/////////

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgConteiner.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not Found'));
        });
    });
};

// let currentImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('image 1 loades');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('image 2 loades');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

const loadNPause = async function() {
    try {
        //load first
        const img = await createImage('img/img-1.jpg');
        await wait(2);

        img.style.display = 'none';

        const img2 = await createImage('img/img-2.jpg');
        await wait(2);
        img2.style.display = 'none';
    } catch (err) {
        console.log(err);
    }
};

// loadNPause();

const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));

        console.log(imgs);

        const paths = await Promise.all(imgs);

        console.log(paths);

        paths.forEach(img => img.classList.add('parallel'));
    } catch {}
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);