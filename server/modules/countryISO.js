function getISOCode(country) {
    //COUNTRY NAME : ISO-ALPHA-3 CODE DICTIONARY
    const countryToISO = {
        'Aruba': 'ABW',
        "Afghanistan": "AFG",
        "Angola": "AGO",
        "Anguilla": "AIA",
        "Åland": "ALA",//No match on VACCOVID
        "Albania": "ALB",
        "Andorra": "AND",
        "United Arab Emirates": "ARE",
        "Argentina": "ARG",
        "Armenia": "ARM",
        "American Samoa": "ASM",
        "Antarctica": "ATA",
        "French Southern Territories": "ATF",
        "Antigua and Barbuda": "ATG",
        "Australia": "AUS",
        "Austria": "AUT",
        "Azerbaijan": "AZE",
        "Burundi": "BDI",
        "Belgium": "BEL",
        "Benin": "BEN",
        "Bonaire, Sint Eustatius, and Saba": "BES",
        "Burkina Faso": "BFA",
        "Bangladesh": "BGD",
        "Bulgaria": "BGR",
        "Bahrain": "BHR",
        "Bahamas": "BHS",
        "Bosnia and Herzegovina": "BIH",
        "Saint Barthélemy": "BLM",
        "Belarus": "BLR",
        "Belize": "BLZ",
        "Bermuda": "BMU",
        "Bolivia": "BOL",
        "Brazil": "BRA",
        "Barbados": "BRB",
        "Brunei": "BRN",
        "Bhutan": "BTN",
        "Bouvet Island": "BVT",
        "Botswana": "BWA",
        "Central African Republic": "CAF",
        "Canada": "CAN",
        "Cocos (Keeling) Islands": "CCK",
        "Switzerland": "CHE",
        "Chile": "CHL",
        "China": "CHN",
        "Ivory Coast": "CIV",//Côte d\'Ivoire
        "Cameroon": "CMR",
        "DR Congo": "COD",
        "Congo Republic": "COG",
        "Cook Islands": "COK",//No match on VACCOVID
        "Colombia": "COL",
        "Comoros": "COM",
        "Cabo Verde": "CPV",
        "Costa Rica": "CRI",
        "Cuba": "CUB",
        "Curaçao": "CUW",
        "Christmas Island": "CXR",
        "Cayman Islands": "CYM",
        "Cyprus": "CYP",
        "Czechia": "CZE",
        "Germany": "DEU",
        "Djibouti": "DJI",
        "Dominica": "DMA",
        "Denmark": "DNK",
        "Dominican Republic": "DOM",
        "Algeria": "DZA",
        "Ecuador": "ECU",
        "Egypt": "EGY",
        "Eritrea": "ERI",
        "Western Sahara": "ESH",
        "Spain": "ESP",
        "Estonia": "EST",
        "Ethiopia": "ETH",
        "Finland": "FIN",
        "Fiji": "FJI",
        "Falkland Islands": "FLK",
        "France": "FRA",
        "Faroe Islands": "FRO",
        "Federated States of Micronesia": "FSM",//No Match on VACCOVID
        "Gabon": "GAB",
        "United Kingdom": "GBR", // ...of Great Britain and Northern Ireland
        "Georgia": "GEO",
        "Guernsey": "GGY",
        "Ghana": "GHA",
        "Gibraltar": "GIB",
        "Guinea": "GIN",
        "Guadeloupe": "GLP",
        "Gambia": "GMB",
        "Guinea-Bissau": "GNB",
        "Equatorial Guinea": "GNQ",
        "Greece": "GRC",
        "Grenada": "GRD",
        "Greenland": "GRL",
        "Guatemala": "GTM",
        "French Guiana": "GUF",
        "Guam": "GUM",
        "Guyana": "GUY",
        "Hong Kong": "HKG",
        "Heard Island and McDonald Islands": "HMD",
        "Honduras": "HND",
        "Croatia": "HRV",
        "Haiti": "HTI",
        "Hungary": "HUN",
        "Indonesia": "IDN",
        "Isle of Man": "IMN",
        "India": "IND",
        "British Indian Ocean Territory": "IOT",
        "Ireland": "IRL",
        "Iran": "IRN",
        "Iraq": "IRQ",
        "Iceland": "ISL",
        "Israel": "ISR",
        "Italy": "ITA",
        "Jamaica": "JAM",
        "Jersey": "JEY",
        "Jordan": "JOR",
        "Japan": "JPN",
        "Kazakhstan": "KAZ",
        "Kenya": "KEN",
        "Kyrgyzstan": "KGZ",
        "Cambodia": "KHM",
        "Kiribati": "KIR",
        "St Kitts and Nevis": "KNA",
        "South Korea": "KOR",
        "Kuwait": "KWT",
        "Laos": "LAO",
        "Lebanon": "LBN",
        "Liberia": "LBR",
        "Libya": "LBY",
        "Saint Lucia": "LCA",
        "Liechtenstein": "LIE",
        "Sri Lanka": "LKA",
        "Lesotho": "LSO",
        "Lithuania": "LTU",
        "Luxembourg": "LUX",
        "Latvia": "LVA",
        "Macao": "MAC",
        "Saint Martin": "MAF",
        "Morocco": "MAR",
        "Monaco": "MCO",
        "Moldova": "MDA",
        "Madagascar": "MDG",
        "Maldives": "MDV",
        "Mexico": "MEX",
        "Marshall Islands": "MHL",
        "North Macedonia": "MKD",
        "Mali": "MLI",
        "Malta": "MLT",
        "Myanmar": "MMR",
        "Montenegro": "MNE",
        "Mongolia": "MNG",
        "Northern Mariana Islands": "MNP",//No match on VACCOVID
        "Mozambique": "MOZ",
        "Mauritania": "MRT",
        "Montserrat": "MSR",
        "Martinique": "MTQ",
        "Mauritius": "MUS",
        "Malawi": "MWI",
        "Malaysia": "MYS",
        "Mayotte": "MYT",
        "Namibia": "NAM",
        "New Caledonia": "NCL",
        "Niger": "NER",
        "Norfolk Island": "NFK",//No match on VACCOVID
        "Nigeria": "NGA",
        "Nicaragua": "NIC",
        "Niue": "NIU",//No match on VACCOVID
        "Netherlands": "NLD",
        "Norway": "NOR",
        "Nepal": "NPL",
        "Nauru": "NRU",//No match on VACCOVID
        "New Zealand": "NZL",
        "Oman": "OMN",
        "Pakistan": "PAK",
        "Panama": "PAN",
        "Pitcairn": "PCN",
        "Peru": "PER",
        "Philippines": "PHL",
        "Palau": "PLW",
        "Papua New Guinea": "PNG",
        "Poland": "POL",
        "Puerto Rico": "PRI",
        "North Korea": "PRK",//No match on VACCOVID
        "Portugal": "PRT",
        "Paraguay": "PRY",
        "Palestine": "PSE",
        "French Polynesia": "PYF",
        "Qatar": "QAT",
        "Réunion": "REU",
        "Romania": "ROU",
        "Russia": "RUS",
        "Rwanda": "RWA",
        "Saudi Arabia": "SAU",
        "Sudan": "SDN",
        "Senegal": "SEN",
        "Singapore": "SGP",
        "South Georgia and the South Sandwich Islands": "SGS",
        "Saint Helena, Ascension and Tristan da Cunha": "SHN",
        "Svalbard and Jan Mayen": "SJM",
        "Solomon Islands": "SLB",
        "Sierra Leone": "SLE",
        "El Salvador": "SLV",
        "San Marino": "SMR",
        "Somalia": "SOM",
        "Saint Pierre and Miquelon": "SPM",
        "Serbia": "SRB",
        "South Sudan": "SSD",
        "São Tomé and Príncipe": "STP",
        "Suriname": "SUR",
        "Slovakia": "SVK",
        "Slovenia": "SVN",
        "Sweden": "SWE",
        "Eswatini": "SWZ",
        "Sint Maarten": "SXM",
        "Seychelles": "SYC",
        "Syria": "SYR",
        "Turks and Caicos Islands": "TCA",
        "Chad": "TCD",
        "Togo": "TGO",
        "Thailand": "THA",
        "Tajikistan": "TJK",
        "Tokelau": "TKL",//No match on VACCOVID 
        "Turkmenistan": "TKM",//No match on VACCOVID
        "Timor-Leste": "TLS",
        "Tonga": "TON",//No match on VACCOVID
        "Trinidad and Tobago": "TTO",
        "Tunisia": "TUN",
        "Turkey": "TUR",
        "Tuvalu": "TUV",//No match on VACCOVID
        "Taiwan": "TWN",
        "Tanzania": "TZA",
        "Uganda": "UGA",
        "Ukraine": "UKR",
        "United States Minor Outlying Islands": "UMI",
        "Uruguay": "URY",
        "United States": "USA",
        "United States of America": "USA",
        "USA": "USA",
        "Uzbekistan": "UZB",
        "Vatican City": "VAT",
        "St Vincent and Grenadines": "VCT",
        "Venezuela": "VEN",
        "British Virgin Islands": "VGB",
        "U.S. Virgin Islands": "VIR",//No match on VACCOVID
        "Vietnam": "VNM",
        "Vanuatu": "VUT",
        "Wallis and Futuna": "WLF",
        "Samoa": "WSM",
        "Yemen": "YEM",
        "South Africa": "ZAF",
        "Zambia": "ZMB",
        "Zimbabwe": "ZWE"
    }
    if (!countryToISO[country]) {
        console.log(`${country} doesn't have a match in getISOCode component dictionary`)
        return null//IF COUNTRY DOESN'T MATCH RETURN NULL AND LOG
    }
    return countryToISO[country]
}


function countryName(iso, country) {
    //THIS FUNCTION EXISTS TO TRANSLATE COUNTRY NAMES TO CONFORM TO THE VACCOVID API ENDPOINT REQUIREMENTS
    if (!iso) {
        return undefined;
    } else if (iso == 'USA') {
        country = iso
    } else if (iso == 'KNA') {
        country = 'Saint Kitts and Nevis'
    } else if (iso == 'SPM') {
        country = 'Saint Pierre Miquelon'
    } else if (iso == 'VCT') {
        country = 'St. Vincent Grenadines'
    } else if (iso == 'STP') {
        country = 'Sao Tome and Principe'
    } else if (iso == 'GBR') {
        country = 'UK'
    } else if (iso == 'BES') {
        country = 'Caribbean Netherlands'
    } else if (iso == 'KOR') {
        country = 'S. Korea'
    } else if (iso == 'CAF') {
        country = 'CAR'
    } else if (iso == 'COG') {
        country = 'Congo'
    } else if (iso == 'COD') {
        country = 'DRC'
    } else if (iso == 'ARE') {
        country = 'UAE'
    } else if (iso == 'FRO') {
        country = 'Faeroe Islands'
    }
    return country
}

module.exports = { getISOCode, countryName }