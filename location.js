{/* <script type="text/javascript"> */}

    async function handleIP() {
        let countryCode = sessionStorage.getItem('country-code')
        if (countryCode == null) {
            const request = await fetch("https://ip-api.io/json")
            const response = await request.json()
            countryCode = response.country_code.toLowerCase()
            sessionStorage.setItem('country-code', countryCode)
        }
        if (countryCode == 'ng') {
            const menuElements = document.getElementsByClassName('crypto-menu-item');
            for (let menuElement of menuElements) {
                menuElement.style.display = 'none';
            }
        }
    }
    handleIP()
   