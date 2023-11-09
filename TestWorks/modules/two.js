export function multiply(a, b) {
    return alert(a * b);
}

export class createObject {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        alert('Success!');
    }
}

export function getUrl() {
    return import.meta.url;
}

export default async function() {
    let response = await fetch('https://api.github.com/users/RareMashiro');
    let user = await response.json();
    let avatar = user.avatar_url;

    let img = document.createElement('img');
    img.src = avatar;
    document.body.append(img);

    let p = document.createElement('p');
    p.textContent = user.login;
    document.body.append(p);
    
    setTimeout(() => {
        img.remove();
        p.remove();
    }, 4000);

}