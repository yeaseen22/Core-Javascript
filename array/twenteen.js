
// const firstNames = [
//     "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Logan", "Sophia",
//     "Benjamin", "Mia", "Mason", "Charlotte", "Elijah", "Amelia", "Oliver", "Evelyn", "Jacob", "Abigail"
//   ];

//   const lastNames = [
//     "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin",
//     "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall"
//   ];

//   const contacts = Array.from({ length: 100 }, (_, i) => {
//     const first = firstNames[Math.floor(Math.random() * firstNames.length)];
//     const last = lastNames[Math.floor(Math.random() * lastNames.length)];
//     const name = `${first} ${last}`;
//     const phone = `10111${String(1000 + i)}`;
//     const email = `${first.toLowerCase()}${last.toLowerCase()}${i + 1}@gmail.com`;

//     return { name, phone, email };
//   });

// Shuffle to remove any ordering
// contacts.sort(() => Math.random() - 0.5);

//   console.log(contacts);

const contact = [
    {
        name: 'Elijah Martinez',
        phone: '101111036',
        email: 'elijahmartinez37@gmail.com'
    },
    {
        name: 'William Harris',
        phone: '101111075',
        email: 'williamharris76@gmail.com'
    },
    {
        name: 'Evelyn Jackson',
        phone: '101111002',
        email: 'evelynjackson3@gmail.com'
    },
    {
        name: 'Ava Lewis',
        phone: '101111088',
        email: 'avalewis89@gmail.com'
    },
    {
        name: 'Emma Martin',
        phone: '101111001',
        email: 'emmamartin2@gmail.com'
    },
    {
        name: 'Abigail Martin',
        phone: '101111070',
        email: 'abigailmartin71@gmail.com'
    },
    {
        name: 'Abigail White',
        phone: '101111017',
        email: 'abigailwhite18@gmail.com'
    },
    {
        name: 'Benjamin Anderson',
        phone: '101111093',
        email: 'benjaminanderson94@gmail.com'
    },
    {
        name: 'Ava Smith',
        phone: '101111019',
        email: 'avasmith20@gmail.com'
    },
    {
        name: 'Logan Jackson',
        phone: '101111010',
        email: 'loganjackson11@gmail.com'
    },
    {
        name: 'Elijah Brown',
        phone: '101111021',
        email: 'elijahbrown22@gmail.com'
    },
    {
        name: 'Amelia Brown',
        phone: '101111053',
        email: 'ameliabrown54@gmail.com'
    },
    {
        name: 'Logan Clark',
        phone: '101111023',
        email: 'loganclark24@gmail.com'
    },
    {
        name: 'Emma Taylor',
        phone: '101111097',
        email: 'emmataylor98@gmail.com'
    },
    {
        name: 'William Martin',
        phone: '101111078',
        email: 'williammartin79@gmail.com'
    },
    {
        name: 'Charlotte Robinson',
        phone: '101111058',
        email: 'charlotterobinson59@gmail.com'
    },
    {
        name: 'Abigail Rodriguez',
        phone: '101111061',
        email: 'abigailrodriguez62@gmail.com'
    },
    {
        name: 'Mia Lewis',
        phone: '101111056',
        email: 'mialewis57@gmail.com'
    },
    {
        name: 'Mason Harris',
        phone: '101111050',
        email: 'masonharris51@gmail.com'
    },
    {
        name: 'William Clark',
        phone: '101111054',
        email: 'williamclark55@gmail.com'
    },
    {
        name: 'Isabella Jackson',
        phone: '101111035',
        email: 'isabellajackson36@gmail.com'
    },
    {
        name: 'Mason Johnson',
        phone: '101111099',
        email: 'masonjohnson100@gmail.com'
    },
    {
        name: 'Isabella Martinez',
        phone: '101111063',
        email: 'isabellamartinez64@gmail.com'
    },
    {
        name: 'Evelyn Walker',
        phone: '101111076',
        email: 'evelynwalker77@gmail.com'
    },
    {
        name: 'Olivia Garcia',
        phone: '101111027',
        email: 'oliviagarcia28@gmail.com'
    },
    {
        name: 'Jacob Jackson',
        phone: '101111005',
        email: 'jacobjackson6@gmail.com'
    },
    {
        name: 'Logan White',
        phone: '101111030',
        email: 'loganwhite31@gmail.com'
    },
    {
        name: 'Evelyn Hall',
        phone: '101111037',
        email: 'evelynhall38@gmail.com'
    },
    {
        name: 'Mason Rodriguez',
        phone: '101111041',
        email: 'masonrodriguez42@gmail.com'
    },
    {
        name: 'William Lee',
        phone: '101111044',
        email: 'williamlee45@gmail.com'
    },
    {
        name: 'Olivia Martin',
        phone: '101111049',
        email: 'oliviamartin50@gmail.com'
    },
    {
        name: 'Abigail Garcia',
        phone: '101111082',
        email: 'abigailgarcia83@gmail.com'
    },
    {
        name: 'Olivia Robinson',
        phone: '101111068',
        email: 'oliviarobinson69@gmail.com'
    },
    {
        name: 'Elijah Lee',
        phone: '101111069',
        email: 'elijahlee70@gmail.com'
    },
    {
        name: 'Olivia Clark',
        phone: '101111011',
        email: 'oliviaclark12@gmail.com'
    },
    {
        name: 'Abigail Johnson',
        phone: '101111052',
        email: 'abigailjohnson53@gmail.com'
    },
    {
        name: 'Evelyn Martinez',
        phone: '101111006',
        email: 'evelynmartinez7@gmail.com'
    },
    {
        name: 'Isabella Brown',
        phone: '101111091',
        email: 'isabellabrown92@gmail.com'
    },
    {
        name: 'Olivia Jackson',
        phone: '101111067',
        email: 'oliviajackson68@gmail.com'
    },
    {
        name: 'Jacob Walker',
        phone: '101111089',
        email: 'jacobwalker90@gmail.com'
    },
    {
        name: 'Isabella Martinez',
        phone: '101111043',
        email: 'isabellamartinez44@gmail.com'
    },
    {
        name: 'Isabella Thompson',
        phone: '101111096',
        email: 'isabellathompson97@gmail.com'
    },
    {
        name: 'Liam Lee',
        phone: '101111018',
        email: 'liamlee19@gmail.com'
    },
    {
        name: 'Charlotte Walker',
        phone: '101111051',
        email: 'charlottewalker52@gmail.com'
    },
    {
        name: 'Ava Thomas',
        phone: '101111020',
        email: 'avathomas21@gmail.com'
    },
    {
        name: 'Liam Brown',
        phone: '101111029',
        email: 'liambrown30@gmail.com'
    },
    {
        name: 'James Thomas',
        phone: '101111026',
        email: 'jamesthomas27@gmail.com'
    },
    {
        name: 'Charlotte Martin',
        phone: '101111084',
        email: 'charlottemartin85@gmail.com'
    },
    {
        name: 'Olivia Martin',
        phone: '101111055',
        email: 'oliviamartin56@gmail.com'
    },
    {
        name: 'Sophia Walker',
        phone: '101111079',
        email: 'sophiawalker80@gmail.com'
    },
    {
        name: 'Emma Taylor',
        phone: '101111083',
        email: 'emmataylor84@gmail.com'
    },
    {
        name: 'Liam White',
        phone: '101111003',
        email: 'liamwhite4@gmail.com'
    },
    {
        name: 'Logan White',
        phone: '101111016',
        email: 'loganwhite17@gmail.com'
    },
    {
        name: 'Mia Jackson',
        phone: '101111065',
        email: 'miajackson66@gmail.com'
    },
    {
        name: 'Mason Jackson',
        phone: '101111028',
        email: 'masonjackson29@gmail.com'
    },
    {
        name: 'Jacob Rodriguez',
        phone: '101111008',
        email: 'jacobrodriguez9@gmail.com'
    },
    {
        name: 'Olivia Thomas',
        phone: '101111007',
        email: 'oliviathomas8@gmail.com'
    },
    {
        name: 'Logan Hall',
        phone: '101111014',
        email: 'loganhall15@gmail.com'
    },
    {
        name: 'Sophia Anderson',
        phone: '101111012',
        email: 'sophiaanderson13@gmail.com'
    },
    {
        name: 'Emma Martin',
        phone: '101111077',
        email: 'emmamartin78@gmail.com'
    },
    {
        name: 'Ava Anderson',
        phone: '101111034',
        email: 'avaanderson35@gmail.com'
    },
    {
        name: 'Oliver Martinez',
        phone: '101111062',
        email: 'olivermartinez63@gmail.com'
    },
    {
        name: 'Mia White',
        phone: '101111071',
        email: 'miawhite72@gmail.com'
    },
    {
        name: 'Sophia Brown',
        phone: '101111024',
        email: 'sophiabrown25@gmail.com'
    },
    {
        name: 'William Johnson',
        phone: '101111092',
        email: 'williamjohnson93@gmail.com'
    },
    {
        name: 'Amelia Johnson',
        phone: '101111015',
        email: 'ameliajohnson16@gmail.com'
    },
    {
        name: 'Isabella Brown',
        phone: '101111033',
        email: 'isabellabrown34@gmail.com'
    },
    {
        name: 'Abigail Thompson',
        phone: '101111000',
        email: 'abigailthompson1@gmail.com'
    },
    {
        name: 'Mia Garcia',
        phone: '101111039',
        email: 'miagarcia40@gmail.com'
    },
    {
        name: 'Charlotte Lee',
        phone: '101111057',
        email: 'charlottelee58@gmail.com'
    },
    {
        name: 'Amelia Walker',
        phone: '101111048',
        email: 'ameliawalker49@gmail.com'
    },
    {
        name: 'Olivia Martin',
        phone: '101111013',
        email: 'oliviamartin14@gmail.com'
    },
    {
        name: 'Liam Anderson',
        phone: '101111064',
        email: 'liamanderson65@gmail.com'
    },
    {
        name: 'Abigail Rodriguez',
        phone: '101111066',
        email: 'abigailrodriguez67@gmail.com'
    },
    {
        name: 'Evelyn White',
        phone: '101111031',
        email: 'evelynwhite32@gmail.com'
    },
    {
        name: 'Amelia Johnson',
        phone: '101111038',
        email: 'ameliajohnson39@gmail.com'
    },
    {
        name: 'Emma White',
        phone: '101111042',
        email: 'emmawhite43@gmail.com'
    },
    {
        name: 'Benjamin White',
        phone: '101111004',
        email: 'benjaminwhite5@gmail.com'
    },
    {
        name: 'Mason White',
        phone: '101111090',
        email: 'masonwhite91@gmail.com'
    },
    {
        name: 'James Lee',
        phone: '101111032',
        email: 'jameslee33@gmail.com'
    },
    {
        name: 'Emma Smith',
        phone: '101111046',
        email: 'emmasmith47@gmail.com'
    },
    {
        name: 'Noah Garcia',
        phone: '101111045',
        email: 'noahgarcia46@gmail.com'
    },
    {
        name: 'Benjamin Taylor',
        phone: '101111025',
        email: 'benjamintaylor26@gmail.com'
    },
    {
        name: 'James Lewis',
        phone: '101111080',
        email: 'jameslewis81@gmail.com'
    },
    {
        name: 'Oliver Lewis',
        phone: '101111022',
        email: 'oliverlewis23@gmail.com'
    },
    {
        name: 'Oliver Hall',
        phone: '101111009',
        email: 'oliverhall10@gmail.com'
    },
    {
        name: 'Liam Johnson',
        phone: '101111040',
        email: 'liamjohnson41@gmail.com'
    },
    {
        name: 'Logan Robinson',
        phone: '101111074',
        email: 'loganrobinson75@gmail.com'
    },
    {
        name: 'Jacob Brown',
        phone: '101111060',
        email: 'jacobbrown61@gmail.com'
    },
    {
        name: 'Elijah Thomas',
        phone: '101111081',
        email: 'elijahthomas82@gmail.com'
    },
    {
        name: 'Abigail Anderson',
        phone: '101111098',
        email: 'abigailanderson99@gmail.com'
    },
    {
        name: 'Liam White',
        phone: '101111085',
        email: 'liamwhite86@gmail.com'
    },
    {
        name: 'Liam Thompson',
        phone: '101111094',
        email: 'liamthompson95@gmail.com'
    },
    {
        name: 'Evelyn Thomas',
        phone: '101111072',
        email: 'evelynthomas73@gmail.com'
    },
    {
        name: 'Mason Smith',
        phone: '101111086',
        email: 'masonsmith87@gmail.com'
    },
    {
        name: 'Noah Johnson',
        phone: '101111087',
        email: 'noahjohnson88@gmail.com'
    },
    {
        name: 'Evelyn Garcia',
        phone: '101111073',
        email: 'evelyngarcia74@gmail.com'
    },
    {
        name: 'Jacob Thomas',
        phone: '101111059',
        email: 'jacobthomas60@gmail.com'
    },
    {
        name: 'Emma Smith',
        phone: '101111047',
        email: 'emmasmith48@gmail.com'
    },
    {
        name: 'Amelia Johnson',
        phone: '101111095',
        email: 'ameliajohnson96@gmail.com'
    }
]

contact.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
})
// console.log(contact);

const group = contact.reduce((acc, cur) => {
    const groupName = cur.name.charAt(0).toLocaleUpperCase();
    if (acc[groupName]) {
        acc[groupName].push(cur);
    } else {
        acc[groupName] = [cur]
    }

    return acc;
},)

// console.log(group)

const displayList = (group) => {
    console.log('dispalying');
    console.log('---------------');
    const keys = Object.keys(group)
    keys.forEach((key) => {
        console.log(`Group: ${key}`);
        console.table(group[key])
    })
}

displayList(group)
