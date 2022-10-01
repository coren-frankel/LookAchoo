export default function CountryName(iso, country) {
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
