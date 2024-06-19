const books = [
    {
        title: 'Sigri Migri',
        author: 'Mati Maasikas',
        pages: 230,
        read: true
    },
    {
        title: 'Lippadi Lappadi',
        author: 'Meeli Mustikas',
        pages: 125,
        read: false
    },
    {
        title: 'Ping Pong',
        author: 'Lucy Liu',
        pages: 385,
        read: true
    },
    {
        title: 'Segasumma Suvila',
        author: 'Juhan Juurikas',
        pages: 400,
        read: false
    },
];

let bookCount = 0;
let pages = 0;

for(let i = 0; i < books.length; i ++) {
    if (!books[i].read) {
        bookCount = bookCount + 1;
        pages = pages + books[i].pages;
    }
}

console.log(pages / bookCount);


/* const months = [
    {
        name: {
            ee: 'Jaanuar',
            en: 'January'
        },
        days: 31,
        season: {
            ee: 'Talv',
            en: 'Winter'
        },
        averageTemperature: -10,
        orderNumber: 1
    },
    {
        name: {
            ee: 'Veebruar',
            en: 'February'
        },
        days: 28,
        season: {
            ee: 'Talv',
            en: 'Winter'
        },
        averageTemperature: -12,
        orderNumber: 2
    },
    {
        name: {
            ee: 'Märts',
            en: 'March'
        },
        days: 31,
        season: {
            ee: 'Kevad',
            en: 'Spring'
        },
        averageTemperature: -2,
        orderNumber: 3
    },
    {
        name: {
            ee: 'Aprill',
            en: 'April'
        },
        days: 30,
        season: {
            ee: 'Kevad',
            en: 'Spring'
        },
        averageTemperature: 5,
        orderNumber: 4
    },
    {
        days: 31,
        name: {
            ee: 'Mai',
            en: 'May'
        },
        season: {
            ee: 'Kevad',
            en: 'Spring'
        },
        averageTemperature: 12,
        orderNumber: 5
    },
];

for(let i = 0; i < months.length; i++) {
    console.log(months[i].name.en, months[i].averageTemperature);
}

 */