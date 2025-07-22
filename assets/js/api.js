
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Alvaroportelinha/profile.jon/master/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
