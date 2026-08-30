// ========================================
// REGISTRATION FORMS
// ========================================

// Replace each value below with its published Google Form URL before launch.

const registrationForms = {
    sju: 'https://docs.google.com/forms/d/1ZHR_PcvZ2AOmrbVti6R52Q7jBrLiBVnbrZnvgjWWLO0/',
    'non-sju': 'https://docs.google.com/forms/d/e/1FAIpQLSejN1eP5r6H45eRzqpkixgGMgByMmQGIiN8DuhPj3SkNfw42Q/viewform?usp=publish-editor/',
    contingent: 'https://docs.google.com/forms/d/e/1FAIpQLSfD4TNiMqh9lMJ1w-NGcaz-1Kt2ZJiEN9-j0n3za_16hN-c0g/viewform?usp=publish-editor'
};

document.querySelectorAll('[data-form]').forEach((link) => {
    link.href = registrationForms[link.dataset.form];
});


// ========================================
// EVENT DATA
// ========================================

const eventData = {

    cave: {
        number: '01',
        title: 'Cave Code Quest',
        type: 'Treasure Hunt',
        image: 'assets/events/cave-code-quest.jpg',
        description: `
            <p>
                Enter the darkness and solve a series of clues,
                puzzles and challenges inspired by the hidden world
                of bats and caves.
            </p>

            <p>
                Work together, think fast and uncover the treasure
                before the clock runs out.
            </p>
        `
    },

    pitch: {
        number: '02',
        title: 'Pitch in the Dark',
        type: 'Sustainability Startup Pitch',
        image: 'assets/events/pitch-in-the-dark.jpg',
        description: `
            <p>
                Turn an environmental problem into an opportunity.
                Develop an innovative idea and pitch your solution
                to a panel.
            </p>
        `
    },

    debate: {
        number: '03',
        title: 'Battle of the Bats',
        type: 'Debate',
        image: 'assets/events/battle-of-the-bats.jpg',
        description: `
            <p>
                Step into the debate arena and defend your position
                on environmental issues, conservation and the future
                of our planet.
            </p>
        `
    },

    painting: {
        number: '04',
        title: 'Bat-iful Brushstrokes',
        type: 'Painting',
        image: 'assets/events/batiful-brushstrokes.jpg',
        description: `
            <p>
                Put your creativity on canvas and explore the beauty
                of bats, biodiversity and the natural world through art.
            </p>
        `
    },

    summit: {
        number: '05',
        title: 'Bat Guardians Summit',
        type: 'Policy & Conservation Challenge',
        image: 'assets/events/bat-guardians-summit.jpg',
        description: `
            <p>
                Take on real-world conservation challenges and develop
                practical policies that can help protect wildlife
                and their habitats.
            </p>
        `
    },

    escape: {
        number: '06',
        title: 'Escape the Abandoned Mine',
        type: 'Escape Room',
        image: 'assets/events/abandoned-mine.jpg',
        description: `
            <p>
                You are trapped inside an abandoned mine.
                Solve the clues, work with your team and find your
                way out before time runs out.
            </p>
        `
    },

    quiz: {
        number: '07',
        title: 'Winged Wisdom',
        type: 'Environmental Quiz',
        image: 'assets/events/winged-wisdom.jpg',
        description: `
            <p>
                Test your knowledge of wildlife, biodiversity,
                conservation and the fascinating world of bats.
            </p>
        `
    },

    batwalk: {
        number: '08',
        title: 'Batwalk',
        type: 'Cosplay',
        image: 'assets/events/batwalk.jpg',
        description: `
            <p>
                Step into character and bring your favourite creature
                to life through creativity, costume and performance.
            </p>
        `
    },

    reel: {
        number: '09',
        title: 'Frames of Flight',
        type: 'Reel Making',
        image: 'assets/events/frames-of-flight.jpg',
        description: `
            <p>
                Tell a conservation story one frame at a time.
                Create a short, engaging reel that brings attention
                to the wildlife around us.
            </p>
        `
    }

};


// ========================================
// EVENT MODAL
// ========================================

const eventModal = document.getElementById('eventModal');
const eventModalClose = document.getElementById('eventModalClose');

const eventModalImage = document.getElementById('eventModalImage');
const eventModalNumber = document.getElementById('eventModalNumber');
const eventModalTitle = document.getElementById('eventModalTitle');
const eventModalType = document.getElementById('eventModalType');
const eventModalDescription = document.getElementById('eventModalDescription');


// Open modal

document.querySelectorAll('.expandable-card').forEach((card) => {

    card.addEventListener('click', () => {

        const eventName = card.dataset.event;
        const event = eventData[eventName];

        if (!event) {
            return;
        }

        eventModalNumber.textContent = event.number;
        eventModalTitle.textContent = event.title;
        eventModalType.textContent = event.type;

        eventModalImage.src = event.image;
        eventModalImage.alt = event.title;

        eventModalDescription.innerHTML = event.description;

        eventModal.classList.add('active');

        document.body.style.overflow = 'hidden';

    });

});


// Close modal

function closeEventModal() {

    eventModal.classList.remove('active');

    document.body.style.overflow = '';

}


// Close button

eventModalClose.addEventListener('click', closeEventModal);

document.querySelector('.event-modal-register').addEventListener('click', () => {
    closeEventModal();
});

// Click outside card

document
    .querySelector('.event-modal-backdrop')
    .addEventListener('click', closeEventModal);


// Escape key

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {
        closeEventModal();
    }

});

