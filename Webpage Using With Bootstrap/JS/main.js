
document.addEventListener('DOMContentLoaded', ()=>{
    loadSupport();
    loadFaq();
    loadInstructors();
    loadMap();
})


function loadSupport(){
    const output = document.querySelector('#support-section .row');
    
    const html = support.map(card=>`
            <div class="col-12 col-lg-4">
                <div class="card text-dark shadow">
                <div class="card-body">
                <img src="${card.image}" class="img-fluid"/>
                    <h3 class="card-title mb-3"> ${card.title}</h3>
                    <p class="card-text">
                    orem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error iure nemo dolor incidunt possimus.
                    </p>
                    <a class="btn btn-primary" href="#"> Read More</a>
                </div>
                    
                </div>
            </div>
        `).join('')
        output.innerHTML = html;
}



function loadFaq(){

    const div = document.createElement('div');
    div.classList.add('container')
    div.innerHTML = `
    <h2 class="text-center mb-4">Frequently Asked Questions </h2>
    <div class="accordion accordion-flush" id="questions">
        ${faqList.map((item, index)=>{
            const {question, answer} = item;
            const html=`
            <div class="accordion-item">
                <div class="accordion-header">
                    <button class="accordion-button" type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#question-${index+1}">
                        ${question}
                    </button>
                </div>

                <div class="collapse accordion-collapse" id="question-${index+1}">
                    <div class="accordion-body">
                    ${answer}
                    </div>
                </div>
            </div>

            `
            return html;
        }).join('')}
    
    </div>
    `

    document.getElementById('faq-section').appendChild(div)
}

function loadInstructors(){
    const div = document.createElement('div');
    div.classList.add('container')
    div.innerHTML = `

    <h2 class="text-center text-white"> Our Instructors</h2>
    <p class="lead text-center text-white mb-5">
    Our Instructors all have 5+ years working as web developers in the industry
    </p>
    <div class="row g-4">

    ${instructorsList.map(inst=>`
    
    <div class="col-md-6 col-lg-3">
        <div class="card bg-light shadow">
        
            <div class="card-body text-center">
                <img src=${inst.image} class="img-fluid rounded-circle mb-3">
                <h3 class="card-title mb-3"> ${inst.name}</h3>
                <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores error eaque quia consequatur. Deleniti aspernatur exercitationem aut eaque quis.
                </p>

            <a href="#"> <i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"> <i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"> <i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"> <i class="bi bi-instagram text-dark mx-1"></i></a>
            </div>
        </div>
    </div>
    `).join('')}
    </div>
    `
    document.getElementById('instructors-section').appendChild(div)
}


window.addEventListener('scroll', (e)=>{
    console.log(this.scrollY)
    if(this.scrollY<500){
        document.getElementById('arrow-up').style.display = 'none';
    }else{
        document.getElementById('arrow-up').style.display = 'block';
    }
})


function loadMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v12', 
        center:[-73.971788, 40.766806], 
        zoom: 14
    })

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h6>125 Main St., New York 1110.</h6> 
    <p>Phone number:  000-000-000</p>`);
     

    const marker1 = new mapboxgl.Marker().setLngLat([-73.971788, 40.766806]).setPopup(popup).addTo(map)
}