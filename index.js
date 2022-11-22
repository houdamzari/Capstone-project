/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const featuredSpeakersArray = [
  {
    name: 'Jamal Debouz',
    occupation: 'Comedian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image:
      './public/images/jamel-debbouze-arrete-la-scene-pour-plusieurs-annees-4229490076.jpeg',
  },
  {
    name: 'Yassar',
    occupation: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image: './public/images/yassar-th-2180520490.jpeg',
  },
  {
    name: 'Haitam miftah',
    occupation: 'Comedian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image: './public/images/HAYTAM-MIFTAH-311722033.jpeg',
  },
  {
    name: 'Rachid Rafik',
    occupation: 'Comedian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image: './public/images/rachid_rafik_MGdeDFw-1374223734.jpeg',
  },
  {
    name: 'Said & Wadi3',
    occupation: 'Comedian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image: './public/images/maxresdefault-2693948203.jpeg',
  },
  {
    name: 'Gad el maleh',
    occupation: 'Comedian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel',
    image:
      './public/images/5241626-gad-elmaleh-montee-des-marches-du-film-950x0-2-2911531440.jpeg',
  },
];

let FeaturedSpeakerss = '';
// eslint-disable-next-line no-undef
setTimeout(() => {
  const speakersSectionDom = document.querySelector(
    '.featured-speakers__section'
  );
  for (const speaker of featuredSpeakersArray) {
    FeaturedSpeakerss += `
        <div class="featured-speakers__section-grid">
          <ul class="featured-speakers__section-list">
            <li class="featured-speakers__section-list-item">
            <div class="featured-speakers__section-image-wrap">
                          <img src="./public/images/seamless-black-and-white-square-pattern-design-vector-13196836-2112498506.jpeg" class="featured-speakers__section-image-1">

              <img src=${speaker.image} class="featured-speakers__section-image-2">
              </div>
              <div class="featured-speakers__section-flex">
                <h3 class="featured-speakers__section-name">${speaker.name}</h3>
                <div class="featured-speakers__section-occupation">${speaker.occupation}</div>
                <hr class="featured-speakers__section-hr"/>
                <p class="featured-speakers__section-description">${speaker.description}</p>
              </div>
            </li>

          </ul>

        </div>`;
  }
  speakersSectionDom.innerHTML = FeaturedSpeakerss;
}, 1000);
