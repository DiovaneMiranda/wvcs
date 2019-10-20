const countries = [
    {
        "SG": "AD",
        "LAT": 42.546245,
        "LOG": 1.601554,
        "NM": "Andorra"
    },
    {
        "SG": "AE",
        "LAT": 23.424076,
        "LOG": 53.847818,
        "NM": "United Arab Emirates"
    },
    {
        "SG": "AF",
        "LAT": 33.93911,
        "LOG": 67.709953,
        "NM": "Afghanistan"
    },
    {
        "SG": "AG",
        "LAT": 17.060816,
        "LOG": -61.796428,
        "NM": "Antigua and Barbuda"
    },
    {
        "SG": "AI",
        "LAT": 18.220554,
        "LOG": -63.068615,
        "NM": "Anguilla"
    },
    {
        "SG": "AL",
        "LAT": 41.153332,
        "LOG": 20.168331,
        "NM": "Albania"
    },
    {
        "SG": "AM",
        "LAT": 40.069099,
        "LOG": 45.038189,
        "NM": "Armenia"
    },
    {
        "SG": "AN",
        "LAT": 12.226079,
        "LOG": -69.060087,
        "NM": "Netherlands Antilles"
    },
    {
        "SG": "AO",
        "LAT": -11.202692,
        "LOG": 17.873887,
        "NM": "Angola"
    },
    {
        "SG": "AQ",
        "LAT": -75.250973,
        "LOG": -0.071389,
        "NM": "Antarctica"
    },
    {
        "SG": "AR",
        "LAT": -38.416097,
        "LOG": -63.616672,
        "NM": "Argentina"
    },
    {
        "SG": "AS",
        "LAT": -14.270972,
        "LOG": -170.132217,
        "NM": "American Samoa"
    },
    {
        "SG": "AT",
        "LAT": 47.516231,
        "LOG": 14.550072,
        "NM": "Austria"
    },
    {
        "SG": "AU",
        "LAT": -25.274398,
        "LOG": 133.775136,
        "NM": "Australia"
    },
    {
        "SG": "AW",
        "LAT": 12.52111,
        "LOG": -69.968338,
        "NM": "Aruba"
    },
    {
        "SG": "AZ",
        "LAT": 40.143105,
        "LOG": 47.576927,
        "NM": "Azerbaijan"
    },
    {
        "SG": "BA",
        "LAT": 43.915886,
        "LOG": 17.679076,
        "NM": "Bosnia and Herzegovina"
    },
    {
        "SG": "BB",
        "LAT": 13.193887,
        "LOG": -59.543198,
        "NM": "Barbados"
    },
    {
        "SG": "BD",
        "LAT": 23.684994,
        "LOG": 90.356331,
        "NM": "Bangladesh"
    },
    {
        "SG": "BE",
        "LAT": 50.503887,
        "LOG": 4.469936,
        "NM": "Belgium"
    },
    {
        "SG": "BF",
        "LAT": 12.238333,
        "LOG": -1.561593,
        "NM": "Burkina Faso"
    },
    {
        "SG": "BG",
        "LAT": 42.733883,
        "LOG": 25.48583,
        "NM": "Bulgaria"
    },
    {
        "SG": "BH",
        "LAT": 25.930414,
        "LOG": 50.637772,
        "NM": "Bahrain"
    },
    {
        "SG": "BI",
        "LAT": -3.373056,
        "LOG": 29.918886,
        "NM": "Burundi"
    },
    {
        "SG": "BJ",
        "LAT": 9.30769,
        "LOG": 2.315834,
        "NM": "Benin"
    },
    {
        "SG": "BM",
        "LAT": 32.321384,
        "LOG": -64.75737,
        "NM": "Bermuda"
    },
    {
        "SG": "BN",
        "LAT": 4.535277,
        "LOG": 114.727669,
        "NM": "Brunei"
    },
    {
        "SG": "BO",
        "LAT": -16.290154,
        "LOG": -63.588653,
        "NM": "Bolivia"
    },
    {
        "SG": "BR",
        "LAT": -14.235004,
        "LOG": -51.92528,
        "NM": "Brazil"
    },
    {
        "SG": "BS",
        "LAT": 25.03428,
        "LOG": -77.39628,
        "NM": "Bahamas"
    },
    {
        "SG": "BT",
        "LAT": 27.514162,
        "LOG": 90.433601,
        "NM": "Bhutan"
    },
    {
        "SG": "BV",
        "LAT": -54.423199,
        "LOG": 3.413194,
        "NM": "Bouvet Island"
    },
    {
        "SG": "BW",
        "LAT": -22.328474,
        "LOG": 24.684866,
        "NM": "Botswana"
    },
    {
        "SG": "BY",
        "LAT": 53.709807,
        "LOG": 27.953389,
        "NM": "Belarus"
    },
    {
        "SG": "BZ",
        "LAT": 17.189877,
        "LOG": -88.49765,
        "NM": "Belize"
    },
    {
        "SG": "CA",
        "LAT": 56.130366,
        "LOG": -106.346771,
        "NM": "Canada"
    },
    {
        "SG": "CC",
        "LAT": -12.164165,
        "LOG": 96.870956,
        "NM": "Cocos [Keeling] Islands"
    },
    {
        "SG": "CD",
        "LAT": -4.038333,
        "LOG": 21.758664,
        "NM": "Congo [DRC]"
    },
    {
        "SG": "CF",
        "LAT": 6.611111,
        "LOG": 20.939444,
        "NM": "Central African Republic"
    },
    {
        "SG": "CG",
        "LAT": -0.228021,
        "LOG": 15.827659,
        "NM": "Congo [Republic]"
    },
    {
        "SG": "CH",
        "LAT": 46.818188,
        "LOG": 8.227512,
        "NM": "Switzerland"
    },
    {
        "SG": "CI",
        "LAT": 7.539989,
        "LOG": -5.54708,
        "NM": "Côte d'Ivoire"
    },
    {
        "SG": "CK",
        "LAT": -21.236736,
        "LOG": -159.777671,
        "NM": "Cook Islands"
    },
    {
        "SG": "CL",
        "LAT": -35.675147,
        "LOG": -71.542969,
        "NM": "Chile"
    },
    {
        "SG": "CM",
        "LAT": 7.369722,
        "LOG": 12.354722,
        "NM": "Cameroon"
    },
    {
        "SG": "CN",
        "LAT": 35.86166,
        "LOG": 104.195397,
        "NM": "China"
    },
    {
        "SG": "CO",
        "LAT": 4.570868,
        "LOG": -74.297333,
        "NM": "Colombia"
    },
    {
        "SG": "CR",
        "LAT": 9.748917,
        "LOG": -83.753428,
        "NM": "Costa Rica"
    },
    {
        "SG": "CU",
        "LAT": 21.521757,
        "LOG": -77.781167,
        "NM": "Cuba"
    },
    {
        "SG": "CV",
        "LAT": 16.002082,
        "LOG": -24.013197,
        "NM": "Cape Verde"
    },
    {
        "SG": "CX",
        "LAT": -10.447525,
        "LOG": 105.690449,
        "NM": "Christmas Island"
    },
    {
        "SG": "CY",
        "LAT": 35.126413,
        "LOG": 33.429859,
        "NM": "Cyprus"
    },
    {
        "SG": "CZ",
        "LAT": 49.817492,
        "LOG": 15.472962,
        "NM": "Czech Republic"
    },
    {
        "SG": "DE",
        "LAT": 51.165691,
        "LOG": 10.451526,
        "NM": "Germany"
    },
    {
        "SG": "DJ",
        "LAT": 11.825138,
        "LOG": 42.590275,
        "NM": "Djibouti"
    },
    {
        "SG": "DK",
        "LAT": 56.26392,
        "LOG": 9.501785,
        "NM": "Denmark"
    },
    {
        "SG": "DM",
        "LAT": 15.414999,
        "LOG": -61.370976,
        "NM": "Dominica"
    },
    {
        "SG": "DO",
        "LAT": 18.735693,
        "LOG": -70.162651,
        "NM": "Dominican Republic"
    },
    {
        "SG": "DZ",
        "LAT": 28.033886,
        "LOG": 1.659626,
        "NM": "Algeria"
    },
    {
        "SG": "EC",
        "LAT": -1.831239,
        "LOG": -78.183406,
        "NM": "Ecuador"
    },
    {
        "SG": "EE",
        "LAT": 58.595272,
        "LOG": 25.013607,
        "NM": "Estonia"
    },
    {
        "SG": "EG",
        "LAT": 26.820553,
        "LOG": 30.802498,
        "NM": "Egypt"
    },
    {
        "SG": "EH",
        "LAT": 24.215527,
        "LOG": -12.885834,
        "NM": "Western Sahara"
    },
    {
        "SG": "ER",
        "LAT": 15.179384,
        "LOG": 39.782334,
        "NM": "Eritrea"
    },
    {
        "SG": "ES",
        "LAT": 40.463667,
        "LOG": -3.74922,
        "NM": "Spain"
    },
    {
        "SG": "ET",
        "LAT": 9.145,
        "LOG": 40.489673,
        "NM": "Ethiopia"
    },
    {
        "SG": "FI",
        "LAT": 61.92411,
        "LOG": 25.748151,
        "NM": "Finland"
    },
    {
        "SG": "FJ",
        "LAT": -16.578193,
        "LOG": 179.414413,
        "NM": "Fiji"
    },
    {
        "SG": "FK",
        "LAT": -51.796253,
        "LOG": -59.523613,
        "NM": "Falkland Islands [Islas Malvinas]"
    },
    {
        "SG": "FM",
        "LAT": 7.425554,
        "LOG": 150.550812,
        "NM": "Micronesia"
    },
    {
        "SG": "FO",
        "LAT": 61.892635,
        "LOG": -6.911806,
        "NM": "Faroe Islands"
    },
    {
        "SG": "FR",
        "LAT": 46.227638,
        "LOG": 2.213749,
        "NM": "France"
    },
    {
        "SG": "GA",
        "LAT": -0.803689,
        "LOG": 11.609444,
        "NM": "Gabon"
    },
    {
        "SG": "GB",
        "LAT": 55.378051,
        "LOG": -3.435973,
        "NM": "United Kingdom"
    },
    {
        "SG": "GD",
        "LAT": 12.262776,
        "LOG": -61.604171,
        "NM": "Grenada"
    },
    {
        "SG": "GE",
        "LAT": 42.315407,
        "LOG": 43.356892,
        "NM": "Georgia"
    },
    {
        "SG": "GF",
        "LAT": 3.933889,
        "LOG": -53.125782,
        "NM": "French Guiana"
    },
    {
        "SG": "GG",
        "LAT": 49.465691,
        "LOG": -2.585278,
        "NM": "Guernsey"
    },
    {
        "SG": "GH",
        "LAT": 7.946527,
        "LOG": -1.023194,
        "NM": "Ghana"
    },
    {
        "SG": "GI",
        "LAT": 36.137741,
        "LOG": -5.345374,
        "NM": "Gibraltar"
    },
    {
        "SG": "GL",
        "LAT": 71.706936,
        "LOG": -42.604303,
        "NM": "Greenland"
    },
    {
        "SG": "GM",
        "LAT": 13.443182,
        "LOG": -15.310139,
        "NM": "Gambia"
    },
    {
        "SG": "GN",
        "LAT": 9.945587,
        "LOG": -9.696645,
        "NM": "Guinea"
    },
    {
        "SG": "GP",
        "LAT": 16.995971,
        "LOG": -62.067641,
        "NM": "Guadeloupe"
    },
    {
        "SG": "GQ",
        "LAT": 1.650801,
        "LOG": 10.267895,
        "NM": "Equatorial Guinea"
    },
    {
        "SG": "GR",
        "LAT": 39.074208,
        "LOG": 21.824312,
        "NM": "Greece"
    },
    {
        "SG": "GS",
        "LAT": -54.429579,
        "LOG": -36.587909,
        "NM": "South Georgia and the South Sandwich Islands"
    },
    {
        "SG": "GT",
        "LAT": 15.783471,
        "LOG": -90.230759,
        "NM": "Guatemala"
    },
    {
        "SG": "GU",
        "LAT": 13.444304,
        "LOG": 144.793731,
        "NM": "Guam"
    },
    {
        "SG": "GW",
        "LAT": 11.803749,
        "LOG": -15.180413,
        "NM": "Guinea-Bissau"
    },
    {
        "SG": "GY",
        "LAT": 4.860416,
        "LOG": -58.93018,
        "NM": "Guyana"
    },
    {
        "SG": "GZ",
        "LAT": 31.354676,
        "LOG": 34.308825,
        "NM": "Gaza Strip"
    },
    {
        "SG": "HK",
        "LAT": 22.396428,
        "LOG": 114.109497,
        "NM": "Hong Kong"
    },
    {
        "SG": "HM",
        "LAT": -53.08181,
        "LOG": 73.504158,
        "NM": "Heard Island and McDonald Islands"
    },
    {
        "SG": "HN",
        "LAT": 15.199999,
        "LOG": -86.241905,
        "NM": "Honduras"
    },
    {
        "SG": "HR",
        "LAT": 45.1,
        "LOG": 15.2,
        "NM": "Croatia"
    },
    {
        "SG": "HT",
        "LAT": 18.971187,
        "LOG": -72.285215,
        "NM": "Haiti"
    },
    {
        "SG": "HU",
        "LAT": 47.162494,
        "LOG": 19.503304,
        "NM": "Hungary"
    },
    {
        "SG": "ID",
        "LAT": -0.789275,
        "LOG": 113.921327,
        "NM": "Indonesia"
    },
    {
        "SG": "IE",
        "LAT": 53.41291,
        "LOG": -8.24389,
        "NM": "Ireland"
    },
    {
        "SG": "IL",
        "LAT": 31.046051,
        "LOG": 34.851612,
        "NM": "Israel"
    },
    {
        "SG": "IM",
        "LAT": 54.236107,
        "LOG": -4.548056,
        "NM": "Isle of Man"
    },
    {
        "SG": "IN",
        "LAT": 20.593684,
        "LOG": 78.96288,
        "NM": "India"
    },
    {
        "SG": "IO",
        "LAT": -6.343194,
        "LOG": 71.876519,
        "NM": "British Indian Ocean Territory"
    },
    {
        "SG": "IQ",
        "LAT": 33.223191,
        "LOG": 43.679291,
        "NM": "Iraq"
    },
    {
        "SG": "IR",
        "LAT": 32.427908,
        "LOG": 53.688046,
        "NM": "Iran"
    },
    {
        "SG": "IS",
        "LAT": 64.963051,
        "LOG": -19.020835,
        "NM": "Iceland"
    },
    {
        "SG": "IT",
        "LAT": 41.87194,
        "LOG": 12.56738,
        "NM": "Italy"
    },
    {
        "SG": "JE",
        "LAT": 49.214439,
        "LOG": -2.13125,
        "NM": "Jersey"
    },
    {
        "SG": "JM",
        "LAT": 18.109581,
        "LOG": -77.297508,
        "NM": "Jamaica"
    },
    {
        "SG": "JO",
        "LAT": 30.585164,
        "LOG": 36.238414,
        "NM": "Jordan"
    },
    {
        "SG": "JP",
        "LAT": 36.204824,
        "LOG": 138.252924,
        "NM": "Japan"
    },
    {
        "SG": "KE",
        "LAT": -0.023559,
        "LOG": 37.906193,
        "NM": "Kenya"
    },
    {
        "SG": "KG",
        "LAT": 41.20438,
        "LOG": 74.766098,
        "NM": "Kyrgyzstan"
    },
    {
        "SG": "KH",
        "LAT": 12.565679,
        "LOG": 104.990963,
        "NM": "Cambodia"
    },
    {
        "SG": "KI",
        "LAT": -3.370417,
        "LOG": -168.734039,
        "NM": "Kiribati"
    },
    {
        "SG": "KM",
        "LAT": -11.875001,
        "LOG": 43.872219,
        "NM": "Comoros"
    },
    {
        "SG": "KN",
        "LAT": 17.357822,
        "LOG": -62.782998,
        "NM": "Saint Kitts and Nevis"
    },
    {
        "SG": "KP",
        "LAT": 40.339852,
        "LOG": 127.510093,
        "NM": "North Korea"
    },
    {
        "SG": "KR",
        "LAT": 35.907757,
        "LOG": 127.766922,
        "NM": "South Korea"
    },
    {
        "SG": "KW",
        "LAT": 29.31166,
        "LOG": 47.481766,
        "NM": "Kuwait"
    },
    {
        "SG": "KY",
        "LAT": 19.513469,
        "LOG": -80.566956,
        "NM": "Cayman Islands"
    },
    {
        "SG": "KZ",
        "LAT": 48.019573,
        "LOG": 66.923684,
        "NM": "Kazakhstan"
    },
    {
        "SG": "LA",
        "LAT": 19.85627,
        "LOG": 102.495496,
        "NM": "Laos"
    },
    {
        "SG": "LB",
        "LAT": 33.854721,
        "LOG": 35.862285,
        "NM": "Lebanon"
    },
    {
        "SG": "LC",
        "LAT": 13.909444,
        "LOG": -60.978893,
        "NM": "Saint Lucia"
    },
    {
        "SG": "LI",
        "LAT": 47.166,
        "LOG": 9.555373,
        "NM": "Liechtenstein"
    },
    {
        "SG": "LK",
        "LAT": 7.873054,
        "LOG": 80.771797,
        "NM": "Sri Lanka"
    },
    {
        "SG": "LR",
        "LAT": 6.428055,
        "LOG": -9.429499,
        "NM": "Liberia"
    },
    {
        "SG": "LS",
        "LAT": -29.609988,
        "LOG": 28.233608,
        "NM": "Lesotho"
    },
    {
        "SG": "LT",
        "LAT": 55.169438,
        "LOG": 23.881275,
        "NM": "Lithuania"
    },
    {
        "SG": "LU",
        "LAT": 49.815273,
        "LOG": 6.129583,
        "NM": "Luxembourg"
    },
    {
        "SG": "LV",
        "LAT": 56.879635,
        "LOG": 24.603189,
        "NM": "Latvia"
    },
    {
        "SG": "LY",
        "LAT": 26.3351,
        "LOG": 17.228331,
        "NM": "Libya"
    },
    {
        "SG": "MA",
        "LAT": 31.791702,
        "LOG": -7.09262,
        "NM": "Morocco"
    },
    {
        "SG": "MC",
        "LAT": 43.750298,
        "LOG": 7.412841,
        "NM": "Monaco"
    },
    {
        "SG": "MD",
        "LAT": 47.411631,
        "LOG": 28.369885,
        "NM": "Moldova"
    },
    {
        "SG": "ME",
        "LAT": 42.708678,
        "LOG": 19.37439,
        "NM": "Montenegro"
    },
    {
        "SG": "MG",
        "LAT": -18.766947,
        "LOG": 46.869107,
        "NM": "Madagascar"
    },
    {
        "SG": "MH",
        "LAT": 7.131474,
        "LOG": 171.184478,
        "NM": "Marshall Islands"
    },
    {
        "SG": "MK",
        "LAT": 41.608635,
        "LOG": 21.745275,
        "NM": "Macedonia [FYROM]"
    },
    {
        "SG": "ML",
        "LAT": 17.570692,
        "LOG": -3.996166,
        "NM": "Mali"
    },
    {
        "SG": "MM",
        "LAT": 21.913965,
        "LOG": 95.956223,
        "NM": "Myanmar [Burma]"
    },
    {
        "SG": "MN",
        "LAT": 46.862496,
        "LOG": 103.846656,
        "NM": "Mongolia"
    },
    {
        "SG": "MO",
        "LAT": 22.198745,
        "LOG": 113.543873,
        "NM": "Macau"
    },
    {
        "SG": "MP",
        "LAT": 17.33083,
        "LOG": 145.38469,
        "NM": "Northern Mariana Islands"
    },
    {
        "SG": "MQ",
        "LAT": 14.641528,
        "LOG": -61.024174,
        "NM": "Martinique"
    },
    {
        "SG": "MR",
        "LAT": 21.00789,
        "LOG": -10.940835,
        "NM": "Mauritania"
    },
    {
        "SG": "MS",
        "LAT": 16.742498,
        "LOG": -62.187366,
        "NM": "Montserrat"
    },
    {
        "SG": "MT",
        "LAT": 35.937496,
        "LOG": 14.375416,
        "NM": "Malta"
    },
    {
        "SG": "MU",
        "LAT": -20.348404,
        "LOG": 57.552152,
        "NM": "Mauritius"
    },
    {
        "SG": "MV",
        "LAT": 3.202778,
        "LOG": 73.22068,
        "NM": "Maldives"
    },
    {
        "SG": "MW",
        "LAT": -13.254308,
        "LOG": 34.301525,
        "NM": "Malawi"
    },
    {
        "SG": "MX",
        "LAT": 23.634501,
        "LOG": -102.552784,
        "NM": "Mexico"
    },
    {
        "SG": "MY",
        "LAT": 4.210484,
        "LOG": 101.975766,
        "NM": "Malaysia"
    },
    {
        "SG": "MZ",
        "LAT": -18.665695,
        "LOG": 35.529562,
        "NM": "Mozambique"
    },
    {
        "SG": "NA",
        "LAT": -22.95764,
        "LOG": 18.49041,
        "NM": "Namibia"
    },
    {
        "SG": "NC",
        "LAT": -20.904305,
        "LOG": 165.618042,
        "NM": "New Caledonia"
    },
    {
        "SG": "NE",
        "LAT": 17.607789,
        "LOG": 8.081666,
        "NM": "Niger"
    },
    {
        "SG": "NF",
        "LAT": -29.040835,
        "LOG": 167.954712,
        "NM": "Norfolk Island"
    },
    {
        "SG": "NG",
        "LAT": 9.081999,
        "LOG": 8.675277,
        "NM": "Nigeria"
    },
    {
        "SG": "NI",
        "LAT": 12.865416,
        "LOG": -85.207229,
        "NM": "Nicaragua"
    },
    {
        "SG": "NL",
        "LAT": 52.132633,
        "LOG": 5.291266,
        "NM": "Netherlands"
    },
    {
        "SG": "NO",
        "LAT": 60.472024,
        "LOG": 8.468946,
        "NM": "Norway"
    },
    {
        "SG": "NP",
        "LAT": 28.394857,
        "LOG": 84.124008,
        "NM": "Nepal"
    },
    {
        "SG": "NR",
        "LAT": -0.522778,
        "LOG": 166.931503,
        "NM": "Nauru"
    },
    {
        "SG": "NU",
        "LAT": -19.054445,
        "LOG": -169.867233,
        "NM": "Niue"
    },
    {
        "SG": "NZ",
        "LAT": -40.900557,
        "LOG": 174.885971,
        "NM": "New Zealand"
    },
    {
        "SG": "OM",
        "LAT": 21.512583,
        "LOG": 55.923255,
        "NM": "Oman"
    },
    {
        "SG": "PA",
        "LAT": 8.537981,
        "LOG": -80.782127,
        "NM": "Panama"
    },
    {
        "SG": "PE",
        "LAT": -9.189967,
        "LOG": -75.015152,
        "NM": "Peru"
    },
    {
        "SG": "PF",
        "LAT": -17.679742,
        "LOG": -149.406843,
        "NM": "French Polynesia"
    },
    {
        "SG": "PG",
        "LAT": -6.314993,
        "LOG": 143.95555,
        "NM": "Papua New Guinea"
    },
    {
        "SG": "PH",
        "LAT": 12.879721,
        "LOG": 121.774017,
        "NM": "Philippines"
    },
    {
        "SG": "PK",
        "LAT": 30.375321,
        "LOG": 69.345116,
        "NM": "Pakistan"
    },
    {
        "SG": "PL",
        "LAT": 51.919438,
        "LOG": 19.145136,
        "NM": "Poland"
    },
    {
        "SG": "PM",
        "LAT": 46.941936,
        "LOG": -56.27111,
        "NM": "Saint Pierre and Miquelon"
    },
    {
        "SG": "PN",
        "LAT": -24.703615,
        "LOG": -127.439308,
        "NM": "Pitcairn Islands"
    },
    {
        "SG": "PR",
        "LAT": 18.220833,
        "LOG": -66.590149,
        "NM": "Puerto Rico"
    },
    {
        "SG": "PS",
        "LAT": 31.952162,
        "LOG": 35.233154,
        "NM": "Palestinian Territories"
    },
    {
        "SG": "PT",
        "LAT": 39.399872,
        "LOG": -8.224454,
        "NM": "Portugal"
    },
    {
        "SG": "PW",
        "LAT": 7.51498,
        "LOG": 134.58252,
        "NM": "Palau"
    },
    {
        "SG": "PY",
        "LAT": -23.442503,
        "LOG": -58.443832,
        "NM": "Paraguay"
    },
    {
        "SG": "QA",
        "LAT": 25.354826,
        "LOG": 51.183884,
        "NM": "Qatar"
    },
    {
        "SG": "RE",
        "LAT": -21.115141,
        "LOG": 55.536384,
        "NM": "Réunion"
    },
    {
        "SG": "RO",
        "LAT": 45.943161,
        "LOG": 24.96676,
        "NM": "Romania"
    },
    {
        "SG": "RS",
        "LAT": 44.016521,
        "LOG": 21.005859,
        "NM": "Serbia"
    },
    {
        "SG": "RU",
        "LAT": 61.52401,
        "LOG": 105.318756,
        "NM": "Russia"
    },
    {
        "SG": "RW",
        "LAT": -1.940278,
        "LOG": 29.873888,
        "NM": "Rwanda"
    },
    {
        "SG": "SA",
        "LAT": 23.885942,
        "LOG": 45.079162,
        "NM": "Saudi Arabia"
    },
    {
        "SG": "SB",
        "LAT": -9.64571,
        "LOG": 160.156194,
        "NM": "Solomon Islands"
    },
    {
        "SG": "SC",
        "LAT": -4.679574,
        "LOG": 55.491977,
        "NM": "Seychelles"
    },
    {
        "SG": "SD",
        "LAT": 12.862807,
        "LOG": 30.217636,
        "NM": "Sudan"
    },
    {
        "SG": "SE",
        "LAT": 60.128161,
        "LOG": 18.643501,
        "NM": "Sweden"
    },
    {
        "SG": "SG",
        "LAT": 1.352083,
        "LOG": 103.819836,
        "NM": "Singapore"
    },
    {
        "SG": "SH",
        "LAT": -24.143474,
        "LOG": -10.030696,
        "NM": "Saint Helena"
    },
    {
        "SG": "SI",
        "LAT": 46.151241,
        "LOG": 14.995463,
        "NM": "Slovenia"
    },
    {
        "SG": "SJ",
        "LAT": 77.553604,
        "LOG": 23.670272,
        "NM": "Svalbard and Jan Mayen"
    },
    {
        "SG": "SK",
        "LAT": 48.669026,
        "LOG": 19.699024,
        "NM": "Slovakia"
    },
    {
        "SG": "SL",
        "LAT": 8.460555,
        "LOG": -11.779889,
        "NM": "Sierra Leone"
    },
    {
        "SG": "SM",
        "LAT": 43.94236,
        "LOG": 12.457777,
        "NM": "San Marino"
    },
    {
        "SG": "SN",
        "LAT": 14.497401,
        "LOG": -14.452362,
        "NM": "Senegal"
    },
    {
        "SG": "SO",
        "LAT": 5.152149,
        "LOG": 46.199616,
        "NM": "Somalia"
    },
    {
        "SG": "SR",
        "LAT": 3.919305,
        "LOG": -56.027783,
        "NM": "Suriname"
    },
    {
        "SG": "ST",
        "LAT": 0.18636,
        "LOG": 6.613081,
        "NM": "São Tomé and Príncipe"
    },
    {
        "SG": "SV",
        "LAT": 13.794185,
        "LOG": -88.89653,
        "NM": "El Salvador"
    },
    {
        "SG": "SY",
        "LAT": 34.802075,
        "LOG": 38.996815,
        "NM": "Syria"
    },
    {
        "SG": "SZ",
        "LAT": -26.522503,
        "LOG": 31.465866,
        "NM": "Swaziland"
    },
    {
        "SG": "TC",
        "LAT": 21.694025,
        "LOG": -71.797928,
        "NM": "Turks and Caicos Islands"
    },
    {
        "SG": "TD",
        "LAT": 15.454166,
        "LOG": 18.732207,
        "NM": "Chad"
    },
    {
        "SG": "TF",
        "LAT": -49.280366,
        "LOG": 69.348557,
        "NM": "French Southern Territories"
    },
    {
        "SG": "TG",
        "LAT": 8.619543,
        "LOG": 0.824782,
        "NM": "Togo"
    },
    {
        "SG": "TH",
        "LAT": 15.870032,
        "LOG": 100.992541,
        "NM": "Thailand"
    },
    {
        "SG": "TJ",
        "LAT": 38.861034,
        "LOG": 71.276093,
        "NM": "Tajikistan"
    },
    {
        "SG": "TK",
        "LAT": -8.967363,
        "LOG": -171.855881,
        "NM": "Tokelau"
    },
    {
        "SG": "TL",
        "LAT": -8.874217,
        "LOG": 125.727539,
        "NM": "Timor-Leste"
    },
    {
        "SG": "TM",
        "LAT": 38.969719,
        "LOG": 59.556278,
        "NM": "Turkmenistan"
    },
    {
        "SG": "TN",
        "LAT": 33.886917,
        "LOG": 9.537499,
        "NM": "Tunisia"
    },
    {
        "SG": "TO",
        "LAT": -21.178986,
        "LOG": -175.198242,
        "NM": "Tonga"
    },
    {
        "SG": "TR",
        "LAT": 38.963745,
        "LOG": 35.243322,
        "NM": "Turkey"
    },
    {
        "SG": "TT",
        "LAT": 10.691803,
        "LOG": -61.222503,
        "NM": "Trinidad and Tobago"
    },
    {
        "SG": "TV",
        "LAT": -7.109535,
        "LOG": 177.64933,
        "NM": "Tuvalu"
    },
    {
        "SG": "TW",
        "LAT": 23.69781,
        "LOG": 120.960515,
        "NM": "Taiwan"
    },
    {
        "SG": "TZ",
        "LAT": -6.369028,
        "LOG": 34.888822,
        "NM": "Tanzania"
    },
    {
        "SG": "UA",
        "LAT": 48.379433,
        "LOG": 31.16558,
        "NM": "Ukraine"
    },
    {
        "SG": "UG",
        "LAT": 1.373333,
        "LOG": 32.290275,
        "NM": "Uganda"
    },
    {
        "SG": "UM",
        "LAT": "",
        "LOG": "",
        "NM": "U.S. Minor Outlying Islands"
    },
    {
        "SG": "US",
        "LAT": 37.09024,
        "LOG": -95.712891,
        "NM": "United States"
    },
    {
        "SG": "UY",
        "LAT": -32.522779,
        "LOG": -55.765835,
        "NM": "Uruguay"
    },
    {
        "SG": "UZ",
        "LAT": 41.377491,
        "LOG": 64.585262,
        "NM": "Uzbekistan"
    },
    {
        "SG": "VA",
        "LAT": 41.902916,
        "LOG": 12.453389,
        "NM": "Vatican City"
    },
    {
        "SG": "VC",
        "LAT": 12.984305,
        "LOG": -61.287228,
        "NM": "Saint Vincent and the Grenadines"
    },
    {
        "SG": "VE",
        "LAT": 6.42375,
        "LOG": -66.58973,
        "NM": "Venezuela"
    },
    {
        "SG": "VG",
        "LAT": 18.420695,
        "LOG": -64.639968,
        "NM": "British Virgin Islands"
    },
    {
        "SG": "VI",
        "LAT": 18.335765,
        "LOG": -64.896335,
        "NM": "U.S. Virgin Islands"
    },
    {
        "SG": "VN",
        "LAT": 14.058324,
        "LOG": 108.277199,
        "NM": "Vietnam"
    },
    {
        "SG": "VU",
        "LAT": -15.376706,
        "LOG": 166.959158,
        "NM": "Vanuatu"
    },
    {
        "SG": "WF",
        "LAT": -13.768752,
        "LOG": -177.156097,
        "NM": "Wallis and Futuna"
    },
    {
        "SG": "WS",
        "LAT": -13.759029,
        "LOG": -172.104629,
        "NM": "Samoa"
    },
    {
        "SG": "XK",
        "LAT": 42.602636,
        "LOG": 20.902977,
        "NM": "Kosovo"
    },
    {
        "SG": "YE",
        "LAT": 15.552727,
        "LOG": 48.516388,
        "NM": "Yemen"
    },
    {
        "SG": "YT",
        "LAT": -12.8275,
        "LOG": 45.166244,
        "NM": "Mayotte"
    },
    {
        "SG": "ZA",
        "LAT": -30.559482,
        "LOG": 22.937506,
        "NM": "South Africa"
    },
    {
        "SG": "ZM",
        "LAT": -13.133897,
        "LOG": 27.849332,
        "NM": "Zambia"
    },
    {
        "SG": "ZW",
        "LAT": -19.015438,
        "LOG": 29.154857,
        "NM": "Zimbabwe"
    }
]