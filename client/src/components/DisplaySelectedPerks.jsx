
/* eslint-disable react/prop-types */


const DisplaySelectedPerks = ({accommodationsDetails}) => {


    function displayIcons (perkName){

        switch (perkName) {
            case "Free Wifi":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                )
                

            case "Free Parking":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                    </svg>
                )

            case "Sauna":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M.722 21.003h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5zm13.504-3.37l3.1 5.272a2.25 2.25 0 0 0 3.88-2.278l-.023-.038-3.529-5.989a2.252 2.252 0 0 0-1.932-1.097h-5.073l.67.415-2.584-5.171a2.25 2.25 0 0 0-1.81-1.235 2.228 2.228 0 0 0-2.007.897L.422 14.404a2.25 2.25 0 0 0 3.6 2.7l3.044-4.054-1.27-.114 1.913 3.824a2.25 2.25 0 0 0 2.013 1.243h1.5l-.75-.75v4.5a2.25 2.25 0 0 0 4.5 0v-4.5h-.75v.75h.65v-.75l-.646.38zm1.292-.76a.75.75 0 0 0-.646-.37h-.65a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1-.671-.415l-1.914-3.824a.75.75 0 0 0-1.27-.114l-3.045 4.054a.75.75 0 1 1-1.2-.9l4.5-6a.733.733 0 0 1 .662-.299c.265.024.493.18.61.412l2.584 5.171a.75.75 0 0 0 .671.415h5.073a.75.75 0 0 1 .643.364l3.533 5.995c.01.018.01.018.015.024a.75.75 0 0 1-1.294.76l-3.1-5.273zM9.348 3.752a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm10.91-2.667c.418.836.367 1.099-.104 1.72l-.092.121c-.822 1.09-.849 2.036.267 3.524a.75.75 0 0 0 1.2-.9c-.705-.94-.699-1.152-.27-1.72l.09-.119c.789-1.039.953-1.892.25-3.297a.75.75 0 0 0-1.34.671zm-3.75 0c.418.836.367 1.099-.104 1.72l-.092.121c-.822 1.09-.849 2.036.267 3.524a.75.75 0 0 0 1.2-.9c-.705-.94-.699-1.152-.27-1.72l.09-.119c.789-1.039.953-1.892.25-3.297a.75.75 0 0 0-1.34.671zm-3.75 0c.418.836.367 1.099-.104 1.72l-.092.121c-.822 1.09-.849 2.036.267 3.524a.75.75 0 0 0 1.2-.9c-.705-.94-.699-1.152-.27-1.72l.09-.119c.789-1.039.953-1.892.25-3.297a.75.75 0 0 0-1.34.671z"></path>
                    </svg>
                )

            case "Air Conditioning":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path>
                    </svg>
                )

            case "Breakfast Included":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M3.75 4.5h12a.75.75 0 0 1 .75.75v7.5a6.75 6.75 0 0 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75zm0-1.5A2.25 2.25 0 0 0 1.5 5.25v7.5a8.25 8.25 0 0 0 16.5 0v-7.5A2.25 2.25 0 0 0 15.75 3h-12zm-3 18h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm16.5-15h1.5a3.763 3.763 0 0 1 3.75 3.752 3.762 3.762 0 0 1-3.752 3.748H17.1a.75.75 0 0 0 0 1.5h1.65A5.263 5.263 0 0 0 24 9.752 5.264 5.264 0 0 0 18.752 4.5H17.25a.75.75 0 0 0 0 1.5z"></path>
                    </svg>
                )
                

            case "Swimming Pool":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z"></path>
                    </svg>
                )

            case "Gym":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M15.788.659a2.25 2.25 0 0 0 0 3.181l4.37 4.371a2.25 2.25 0 0 0 3.183-3.181L18.97.659a2.25 2.25 0 0 0-3.181 0zm1.06 1.06a.75.75 0 0 1 1.06 0l4.373 4.371a.75.75 0 0 1-1.061 1.06l-4.372-4.37a.75.75 0 0 1 0-1.06zM11.545.657a2.25 2.25 0 0 0-.001 3.182v.002l8.616 8.614a2.251 2.251 0 1 0 3.18-3.186L14.73.658a2.25 2.25 0 0 0-3.18-.005l-.006.006zm1.061 1.06l.002-.001a.75.75 0 0 1 1.06.001l8.613 8.613a.751.751 0 1 1-1.061 1.064L12.605 2.78a.75.75 0 0 1 0-1.061zM1.72 16.848a.75.75 0 0 1 1.06 0l4.372 4.371a.75.75 0 0 1-1.07 1.051L1.719 17.91a.75.75 0 0 1 0-1.06zm-1.061-1.06a2.25 2.25 0 0 0 0 3.181L5.03 23.34a2.25 2.25 0 0 0 3.19-3.172l-4.38-4.38v-.001a2.25 2.25 0 0 0-3.183 0zm1.06-3.184a.75.75 0 0 1 1.06 0l8.616 8.615a.751.751 0 0 1-1.064 1.062L1.719 13.67a.75.75 0 0 1-.003-1.062l.002-.003zM.66 11.543l-.006.007A2.25 2.25 0 0 0 .66 14.73l8.61 8.61a2.251 2.251 0 0 0 3.186-3.182L3.84 11.544a2.25 2.25 0 0 0-3.181 0zm6.428 4.309l8.765-8.765H14.79l2.121 2.121v-1.06l-8.764 8.764h1.06l-2.121-2.121v1.06zm-1.06-1.061a.75.75 0 0 0 0 1.06l2.12 2.122a.75.75 0 0 0 1.061 0l8.765-8.765a.75.75 0 0 0 0-1.06l-2.121-2.122a.75.75 0 0 0-1.061 0l-8.765 8.765z"></path>
                    </svg>
                )

            case "Balcony":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
                    </svg>
                )

            case "24-Hour Security":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6 shrink-0">
                        <path d="M127.32 53.67l-8 11.87a2.498 2.498 0 0 1-.21.24 2.285 2.285 0 0 1-.28.34l-.22.19c-.12.112-.247.215-.38.31a.777.777 0 0 1-.2.11c-.158.1-.321.19-.49.27h-.18a3.87 3.87 0 0 1-.58.18h-.19a3.08 3.08 0 0 1-.53.06h-.26a3.608 3.608 0 0 1-.46-.05l-.34-.07-.31-.1-.35-.13-.26-.14-.36-.21-11.81-8a4 4 0 0 1 4.46-6.54l4.89 3.3C106.987 30.316 85.347 12.036 60 12h-.65c-28.719.18-51.854 23.606-51.675 52.325C7.855 93.044 31.281 116.179 60 116h.65a52.22 52.22 0 0 0 44.5-26.18 4.005 4.005 0 0 1 6.94 4A60.26 60.26 0 0 1 60.74 124H60C26.863 123.999.001 97.135.002 63.998.003 30.86 26.867 3.998 60.004 4c28.511.001 53.084 20.065 58.786 48l1.9-2.82a4.002 4.002 0 1 1 6.64 4.47zm-69.74 2.47c-.038-7.677-6.253-13.892-13.93-13.93-10.1 0-12.76 8.08-14.19 12.42l-.18.57a4 4 0 0 0 7.59 2.53l.19-.6c1.55-4.7 2.7-6.92 6.59-6.92a5.94 5.94 0 0 1 5.93 5.93 5 5 0 0 1-1.47 3.56L30.24 77.57a4 4 0 0 0 2.83 6.83h20.51a4 4 0 0 0 0-8H42.72l11.05-11.05a13 13 0 0 0 3.81-9.21zM76.93 80.4v-2.84H63.84a4 4 0 0 1-3.39-6.12l17.09-27.35a4 4 0 0 1 7.39 2.12V80.4a4 4 0 0 1-8 0zm0-10.84v-9.4l-5.87 9.4z"></path>
                    </svg>
                )
                

            case "Elevator":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M6 .75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm4.28 2.47l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l3-3H6.22l3 3a.75.75 0 1 0 1.06-1.06zM18 6.75v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm1.72-3.53l-3 3h1.06l-3-3a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06zM22.5 16.5v5.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 21.75 9H2.25A2.25 2.25 0 0 0 0 11.25v10.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V16.5zM9 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0zM18 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0z"></path>
                    </svg>
                )

            case "Wheelchair Accessible":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M13.125 3.56a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.454 18.335l-1.836-3.67a.75.75 0 0 0-.671-.415H11.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v6c0 .414.336.75.75.75h3.75a.75.75 0 0 1 .671.415l2.25 4.5a.75.75 0 0 1-1.342.67zm-1.342.671a2.25 2.25 0 1 0 4.026-2.012l-2.25-4.5A2.25 2.25 0 0 0 16.5 14.81h-3.75l.75.75v-6a2.25 2.25 0 0 0-4.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h4.322l-.67-.415 1.835 3.672zm-4.362-.958a5.25 5.25 0 0 1-5.25-9.096.75.75 0 1 0-.75-1.299 6.75 6.75 0 1 0 6.75 11.694.75.75 0 1 0-.75-1.3z"></path>
                    </svg>
                )

            case "Flat-screen TV":
                return (
                    <svg className="bk-icon -streamline-tv_flat_screen" height="18" width="18" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                        <path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path>
                    </svg>
                )

            case "Non-Smoking Rooms":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path>
                    </svg>      
                )
                

            case "Spa":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M11.72 14.295A7.35 7.35 0 0 1 8.997 8.85a7.148 7.148 0 0 1 2.25-4.972c.005-.005-.004-.005-.01-.01a7.173 7.173 0 0 1 2.261 5.03 7.332 7.332 0 0 1-2.722 5.397h.944zm-.944 1.166a.75.75 0 0 0 .944 0 8.85 8.85 0 0 0 3.277-6.555 8.683 8.683 0 0 0-2.72-6.12 1.482 1.482 0 0 0-2.069.01 8.658 8.658 0 0 0-2.71 6.062 8.869 8.869 0 0 0 3.278 6.603zm3.813-7.013A7.807 7.807 0 0 1 19.023 7.1l.003-.001a7.17 7.17 0 0 1-1.959 5.142 7.332 7.332 0 0 1-5.74 1.891.75.75 0 0 0-.158 1.492 8.85 8.85 0 0 0 6.953-2.318 8.68 8.68 0 0 0 2.404-6.233A1.495 1.495 0 0 0 19.029 5.6a9.304 9.304 0 0 0-5.282 1.608.75.75 0 1 0 .842 1.24zM8.75 7.221A9.239 9.239 0 0 0 3.417 5.6c-.815-.001-1.484.664-1.49 1.488a8.652 8.652 0 0 0 2.37 6.184 8.95 8.95 0 0 0 7.031 2.35.75.75 0 1 0-.158-1.49 7.431 7.431 0 0 1-5.82-1.927 7.142 7.142 0 0 1-1.923-5.091L3.426 7.1a7.746 7.746 0 0 1 4.476 1.357.75.75 0 0 0 .848-1.236zm-4.944 3.966c-2.223.948-3.808 2.716-3.808 4.441 0 3.47 5.422 6 12 6a22.404 22.404 0 0 0 6.977-1.047.75.75 0 0 0 .523-.715v-3.488l-.75.75h4.383a.75.75 0 0 0 .715-.524c.1-.315.15-.643.152-.973 0-2.068-1.986-3.858-5.079-4.944a.75.75 0 1 0-.497 1.416c2.56.898 4.076 2.265 4.076 3.525 0 .176-.028.354-.082.524l.715.226v-.75h-4.383a.75.75 0 0 0-.75.75v3.488l.523-.715a20.922 20.922 0 0 1-6.516.977c-5.856 0-10.507-2.17-10.507-4.5 0-1.02 1.17-2.325 2.896-3.061a.75.75 0 0 0-.588-1.38z"></path>
                    </svg>
                )

            case "Room Service":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M4.5 11.579a8.25 8.25 0 1 1 16.5 0l.75-.75h-18l.75.75zm-1.5 0c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75c0-5.385-4.365-9.75-9.75-9.75S3 6.194 3 11.579zm-.75.75h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zM12 1.079v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM1.273 22.616l3.75-3.65-1.011.032 5.25 4.5a.75.75 0 0 0 .927.039l12.062-8.711a1.92 1.92 0 0 0-.136-3.203 5.25 5.25 0 0 0-5.25-.088l-2.929 1.625a3.848 3.848 0 0 1-4.543-.646l-.587-.587a3.75 3.75 0 0 0-4.326-.698 1.606 1.606 0 0 0-.417 2.57l.459.46a3.75 3.75 0 0 1 1.02 3.384l-.371 1.842a.75.75 0 0 0 1.47.296l.372-1.843a5.25 5.25 0 0 0-1.43-4.74l-.459-.458a.106.106 0 0 1 .028-.17 2.25 2.25 0 0 1 2.595.42l.59.588a5.351 5.351 0 0 0 6.322.897l2.934-1.628a3.75 3.75 0 0 1 3.75.062.42.42 0 0 1 .03.7L9.311 22.322l.927.039-5.25-4.5a.75.75 0 0 0-1.011.032l-3.75 3.65a.75.75 0 1 0 1.046 1.074z"></path>
                    </svg>
                )

            case "Bar":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M8.252 24h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zm3.75-.75v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm7.5-16.19a1.5 1.5 0 0 0-1.06-2.56H4.062a1.5 1.5 0 0 0-1.06 2.56l7.72 7.72a.75.75 0 0 0 1.06 0l7.72-7.72zM18.44 6l-7.72 7.72h1.061L4.062 6h14.379zM.752 1.5h2.822a.75.75 0 0 1 .671.415l1.836 3.67a.75.75 0 1 0 1.342-.67L5.587 1.244A2.25 2.25 0 0 0 3.574 0H.752a.75.75 0 1 0 0 1.5zm15.81 3.603a2.997 2.997 0 1 1 1.511 2.038.75.75 0 0 0-.713 1.319 4.497 4.497 0 1 0-2.268-3.06.75.75 0 1 0 1.47-.297z"></path>
                    </svg>
                )

            case "Ocean View":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M.658 23.994A6.261 6.261 0 0 0 5.77 22.29l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 21.75l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zm0-4.5A6.261 6.261 0 0 0 5.77 17.79l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 17.25l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zm0-4.5A6.261 6.261 0 0 0 5.77 13.29l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 12.75l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zM4.65 1.2L6.3 3.4a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L7.5 2.5 5.85.3a.75.75 0 0 0-1.2.9zm6.75 4.5l1.65 2.2a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L14.25 7 12.6 4.8a.75.75 0 1 0-1.2.9zm6.75-4.5l1.65 2.2a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L21 2.5 19.35.3a.75.75 0 1 0-1.2.9z"></path>
                    </svg>
                )
                

            case "Shower":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path>
                    </svg>
                )

            case "Restaurants":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path>
                    </svg>
                )

            case "Pet Friendly":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path>
                    </svg>
                )

            case "Laundry":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M21 12v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V12zm1.5 0V2.25A2.25 2.25 0 0 0 20.25 0H3.75A2.25 2.25 0 0 0 1.5 2.25v19.5A2.25 2.25 0 0 0 3.75 24h16.5a2.25 2.25 0 0 0 2.25-2.25V12zM5.25 4.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-3 3h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zM16.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm0-10.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-4.5 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zM10.5 15a1.5 1.5 0 0 1 1.5-1.5.75.75 0 0 0 0-1.5 3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0z"></path>
                    </svg>    
                )
                

            case "City View":
                return (
                    <svg className="bk-icon -streamline-city" height="18" width="18" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                        <path d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
                    </svg>
                )

            case "Garden":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M5.361 6.625a6.75 6.75 0 0 0 7.413 6.721 6.93 6.93 0 0 0 6.087-6.988V2.125a1.5 1.5 0 0 0-2.4-1.2l-1.8 1.35h.9L13.461.7c-.8-.6-1.9-.6-2.7 0l-2.1 1.575h.9l-1.8-1.35a1.5 1.5 0 0 0-2.4 1.2v4.5zm1.5 0v-4.5l1.8 1.35c.267.2.633.2.9 0l2.1-1.575a.75.75 0 0 1 .9 0l2.1 1.575c.267.2.633.2.9 0l1.8-1.35V6.37a5.428 5.428 0 0 1-4.754 5.486 5.25 5.25 0 0 1-5.746-5.23zm4.5 6v10.5a.75.75 0 0 0 1.5 0v-10.5a.75.75 0 0 0-1.5 0zm-5.359 3.811c1.473.285 2.458 1.077 2.374 1.51-.084.432-1.292.801-2.765.516-1.473-.284-2.458-1.076-2.374-1.51.084-.432 1.292-.8 2.765-.516zm.285-1.473c-2.179-.42-4.233.206-4.523 1.705-.29 1.5 1.383 2.846 3.562 3.267 2.179.421 4.233-.205 4.523-1.705.29-1.5-1.383-2.846-3.562-3.267zm14.699 2.09c.084.434-.9 1.226-2.374 1.51-1.473.285-2.681-.084-2.765-.516-.084-.433.9-1.226 2.374-1.51 1.473-.285 2.681.084 2.765.517zm1.473-.284c-.29-1.5-2.344-2.126-4.523-1.705-2.178.421-3.851 1.767-3.562 3.267.29 1.5 2.344 2.126 4.523 1.705 2.179-.42 3.852-1.767 3.562-3.267z"></path>
                    </svg>
                )

            case "Concierge":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                        <path d="M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422zM12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0zm-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75zm0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25z"></path>
                    </svg>
                )
                
            default:
                return ;
        }
    }


    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold">Perks</h2>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 gap-2">
                {accommodationsDetails.perks.length > 1 && accommodationsDetails.perks.map(perk => (
                    <div key={perk.name} className="flex items-center p-4 border border-gray-400 rounded-2xl gap-2 ">
                        {displayIcons(perk)}

                        <p className="font-medium">{perk}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DisplaySelectedPerks