let covertedDate;
let show = false;
async function getJobs() {
    let description = document.getElementById('description').value;
    let location = document.getElementById('location').value;
    let response = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${description}&location=${location}`)
    let data = await response.json();
    console.log(data)
    data.forEach((Element, index) => {
        let job = document.createElement('div');
        job.className = 'job';
        let title = document.createElement('h1');
        title.innerText = Element.title;
        job.append(title);
        let created = document.createElement('p');
        convert(Element.created_at);
        created.innerText = covertedDate;
        job.append(created)
        let company = document.createElement('p');
        company.innerText = Element.company;
        job.append(company);
        let logo = document.createElement('img');
        logo.src = Element.company_logo;
        logo.className = 'companyLogo'
        let location = document.createElement('p');
        location.innerText = Element.location;
        job.append(location);
        let applyBtn = document.createElement('button');
        applyBtn.className = 'btn';
        job.append(applyBtn);
        let applyH3 = document.createElement('h3');
        applyH3.innerHTML = `<a href=${Element.url}>Apply</a>`;
        // applyH3.innerHTML = Element.how_to_apply;
        applyBtn.append(applyH3);
        let showBtn = document.createElement('button');
        showBtn.className = 'btn';
        job.append(showBtn);
        let showH3 = document.createElement('h3');
        showH3.innerText = 'Show more';
        showBtn.append(showH3);
        document.getElementById('posts').append(job);
        let details = document.createElement('div');
        details.innerHTML = Element.description;
        details.className = 'DivToScroll';
        details.style.display = 'none'
        job.append(details);
        showBtn.addEventListener('click', () => {
            if (details.style.display === 'none') {
                details.style.display = 'block';

            } else {
                details.style.display = 'none'
            }
        })
        let x = document.createElement('div');
        x.innerHTML= Element.how_to_apply
        details.append(x)
        
    })
}

function convert(date) {
    let x = new Date(date);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[x.getMonth()]
    covertedDate = `${x.getDate()}/${month}/${x.getFullYear()}`
    // console.log(covertedDate)
    // console.log(`${x.getDate()}/${month}/${x.getFullYear()}`)
}