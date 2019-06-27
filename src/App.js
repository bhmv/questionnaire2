import React from 'react';
import venues from './API/venues';
import './App.css';
import './AppMobile.css';
import Header from './Header';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import FifthComponent from './components/FifthComponent';
// import SixthComponent from './components/SixthComponent';
import SeventhComponent from './components/SeventhComponent';
import ShowDelayed from './components/ShowDelayed';
import ShowWhileDelayed from './components/ShowWhileDelayed';
import Loading from './components/Loading';
import Popup from './components/Popup';

import corporate from './images/occasion/corporate.jpg';
import weddings from './images/occasion/weddings.jpg';
import social from './images/occasion/social.jpg';

import ballroom from './images/type/ballroom.jpg';
import church from './images/type/church.jpg';
import gallery from './images/type/gallery.jpg';
import garden from './images/type/garden.jpg';
import historic from './images/type/historic.jpg';
import hotel from './images/type/hotel.jpg';
import indoor from './images/type/indoor.jpg';
import industrial from './images/type/industrial.jpg';
import mansion from './images/type/mansion.jpg';
import modern from './images/type/modern.jpg';
import outdoor from './images/type/outdoor.jpg';
import party from './images/type/party.jpg';
import restaurant from './images/type/restaurant.jpg';
import rooftop from './images/type/rooftop.jpg';
import rustic from './images/type/rustic.jpg';
import studio from './images/type/studio.jpg';
import theater from './images/type/theater.jpg';
import waterfront from './images/type/waterfront.jpg';

import browardcounty from './images/locations/browardcounty.jpg';
import centraldade from './images/locations/centraldade.jpg';
import coconutgrove from './images/locations/coconutgrove.jpg';
import coralgables from './images/locations/coralgables.jpg';
import designdistrictwynwood from './images/locations/designdistrictwynwood.jpg';
import downtownmiami from './images/locations/downtownmiami.jpg';
import floridakeys from './images/locations/floridakeys.jpg';
import keybiscayne from './images/locations/keybiscayne.jpg';
import miamibeach from './images/locations/miamibeach.jpg';
import northmiami from './images/locations/northmiami.jpg';
import palmbeachcounty from './images/locations/palmbeachcounty.jpg';
import southmiami from './images/locations/southmiami.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: venues,
      venuesAPI: [],
      // selectedFilter: 'All',
      // selectedFilter2: 'All',
      // selectedFilter3: 'All',
      // selectedFilter4: 'All',
      // selectedFilter5: 'All',
      // menu: { open: false },
      cmp: true,
      cmp2: false,
      cmp3: false,
      cmp4: false,
      cmp5: false,
      filteredOut1: [],
      filteredOut2: [],
      filteredOut3: [],
      filteredOut4: [],
      filteredOut5: venues.filter(venue => venue['Is featured?'] === 1),
      value: '',
      valueName: '',
      valueNumber: '',
      absoluteButton: false,
      resultsSent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);

    console.log('%c%s', 'color:red; background:blue; font-size: 10pt', '::');
  }
  // http://billhansenmiamivenues.com/wp-json/wp/v2/product
  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/bhmv/bhmvqVenueData/master/index.json'
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ venuesAPI: json });
      });
    // -=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //   function handleErrors(response) {
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }
    // fetch("http://httpstat.us/500")
    //     .then(handleErrors)
    //     .then(response => console.log("ok") )
    //     .catch(error => console.log(error) );
  }

  sendEmailWithResults() {
    this.setState({
      resultsSent: !this.state.resultsSent
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChange2(event) {
    this.setState({ valueName: event.target.value });
  }

  handleChange3(event) {
    this.setState({ valueNumber: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  selectFilter = filter => {
    let one = venues.filter(venue =>
      venue['Attribute 3 value(s)'].includes(`${filter.filter}`)
    );
    let two = venues.filter(venue =>
      venue['Attribute 3 value(s)'].includes(`${filter.filter2}`)
    );
    let three = venues.filter(venue =>
      venue['Attribute 3 value(s)'].includes(`${filter.filter3}`)
    );
    let four = one.concat(two, three);
    this.setState({
      // selectedFilter: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : venues.filter(venue => venue.category === filter.key),

      filteredOut1: four
    });
  };

  selectFilter2 = filter => {
    let one = this.state.venuesAPI.filter(venue =>
      venue['Attribute 5 value(s)'].includes(`${filter.filter}`)
    );
    let two = this.state.venuesAPI.filter(venue =>
      venue['Attribute 5 value(s)'].includes(`${filter.filter2}`)
    );
    let three = this.state.venuesAPI.filter(venue =>
      venue['Attribute 5 value(s)'].includes(`${filter.filter3}`)
    );
    let four = one.concat(two, three);
    this.setState({
      // selectedFilter2: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut1.filter(venue => venue.type === filter.key),

      // filteredOutFilter1: this.state.filteredOut1.filter(venue =>
      //   venue.type.includes(`${filter.filter}`)
      // ),
      // filteredOutFilter2: this.state.filteredOut1.filter(venue =>
      //   venue.type.includes(`${filter.filter2}`)
      // ),
      filteredOut2: four
    });
  };

  selectFilter3 = filter => {
    let one = this.state.filteredOut2.filter(venue =>
      venue['Attribute 4 value(s)'].includes(`${filter.filter}`)
    );
    let two = this.state.filteredOut2.filter(venue =>
      venue['Attribute 4 value(s)'].includes(`${filter.filter2}`)
    );
    let three = this.state.filteredOut2.filter(venue =>
      venue['Attribute 4 value(s)'].includes(`${filter.filter3}`)
    );
    let four = one.concat(two, three);
    this.setState({
      // selectedFilter3: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut2.filter(
      //         venue => venue.location === filter.key
      //       ),
      filteredOut3: four
    });
  };
  selectFilter4 = filter => {
    let one = this.state.filteredOut3.filter(venue =>
      venue['Attribute 2 value(s)'].includes(`${filter.filter}`)
    );
    let two = this.state.filteredOut3.filter(venue =>
      venue['Attribute 2 value(s)'].includes(`${filter.filter2}`)
    );
    let three = this.state.filteredOut3.filter(venue =>
      venue['Attribute 2 value(s)'].includes(`${filter.filter3}`)
    );
    let four = this.state.filteredOut3.filter(venue =>
      venue['Attribute 2 value(s)'].includes(`${filter.filter4}`)
    );

    let five = one.concat(two, three, four);
    this.setState({
      // selectedFilter4: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut3.filter(venue => venue.etaNumber === filter),
      filteredOut4: five
    });
  };
  selectFilter5 = filter => {
    let one = this.state.filteredOut4.filter(venue =>
      venue['Attribute 1 value(s)'].includes(`${filter.filter}`)
    );
    let two = this.state.filteredOut4.filter(venue =>
      venue['Attribute 1 value(s)'].includes(`${filter.filter2}`)
    );
    let three = this.state.filteredOut4.filter(venue =>
      venue['Attribute 1 value(s)'].includes(`${filter.filter3}`)
    );
    // let featured = venues.filter(venue => venue.featured === 1);
    let four = one.concat(two, three);
    let five = [...new Set(four)];
    this.setState({
      // selectedFilter5: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut4.filter(venue => venue.budget === filter),
      filteredOut5: five
    });
  };

  render() {
    const filters = [
      // { key: 'All', value: '' },
      {
        key: 'Corporate',
        value: 'corporate',
        filter: 'Corporate',
        filter2: 'Social',
        filter3: 'Wedding'
      },
      {
        key: 'Weddings',
        value: 'weddings',
        filter: 'Corporate',
        filter2: 'Social',
        filter3: 'Wedding'
      },
      {
        key: 'Social',
        value: 'social',
        filter: 'Corporate',
        filter2: 'Social',
        filter3: 'Wedding'
      }
    ];

    const filters2 = [
      // { key: 'All', value: '' },
      {
        key: 'Ballroom & Banquet Hall',
        value: 'ballroom',
        filter: 'Ballroom',
        filter2: 'Banquet',
        filter3: 'Hall'
      },
      {
        key: 'Church & Temple',
        value: 'church',
        filter: 'Church',
        filter2: 'Temple'
      },
      {
        key: 'Gallery & Museum',
        value: 'gallery',
        filter: 'Gallery',
        filter2: 'Museum'
      },
      {
        key: 'Garden & Park',
        value: 'garden',
        filter: 'Garden',
        filter2: 'Park'
      },
      {
        key: 'Historic',
        value: 'historic',
        filter: 'Historic'
      },
      {
        key: 'Hotel & Resort',
        value: 'hotel',
        filter: 'Hotel',
        filter2: 'Resort'
      },
      {
        key: 'Indoor',
        value: 'indoor',
        filter: 'Indoor'
      },
      {
        key: 'Industrial',
        value: 'industrial',
        filter: 'Industrial'
      },
      {
        key: 'Mansion & Private Property',
        value: 'mansion',
        filter: 'Mansion',
        filter2: 'Private',
        filter3: 'Property'
      },
      {
        key: 'Modern',
        value: 'modern',
        filter: 'Modern'
      },
      {
        key: 'Outdoor',
        value: 'outdoor',
        filter: 'Outdoor'
      },
      {
        key: 'Party at Sea',
        value: 'party',
        filter: 'Party',
        filter2: 'Sea'
      },
      {
        key: 'Restaurant & Bar',
        value: 'restaurant',
        filter: 'Restaurant',
        filter2: 'Bar'
      },
      {
        key: 'Rooftop',
        value: 'rooftop',
        filter: 'Rooftop'
      },
      {
        key: 'Rustic',
        value: 'rustic',
        filter: 'Rustic'
      },
      {
        key: 'Studio',
        value: 'studio',
        filter: 'Studio'
      },
      {
        key: 'Theater',
        value: 'theater',
        filter: 'Theater'
      },
      {
        key: 'Waterfront',
        value: 'waterfront',
        filter: 'Waterfront'
      }
    ];

    const filters3 = [
      // { key: 'All', value: '' },
      {
        key: 'Miami Beach',
        value: 'browardcounty',
        filter: 'Miami',
        filter2: 'Beach'
      },
      {
        key: 'Design District/Wynwood',
        value: 'designdistrictwynwood',
        filter: 'Design',
        filter2: 'District',
        filter3: 'Wynwood'
      },
      {
        key: 'Downtown Miami',
        value: 'downtownmiami',
        filter: 'Downtown'
      },
      {
        key: 'North Miami',
        value: 'northmiami',
        filter: 'North'
      },
      {
        key: 'Coconut Grove',
        value: 'coconutgrove',
        filter: 'Coconut',
        filter2: 'Grove'
      },
      {
        key: 'Coral Gables',
        value: 'coralgables',
        filter: 'Coral',
        filter2: 'Gables'
      },
      {
        key: 'South Miami',
        value: 'southmiami',
        filter: 'South'
      },
      {
        key: 'Central Dade',
        value: 'centraldade',
        filter: 'Central',
        filter2: 'Dade'
      },
      {
        key: 'Key Biscayne',
        value: 'keybiscayne',
        filter: 'Key',
        filter2: 'Biscayne'
      },
      {
        key: 'Florida Keys',
        value: 'floridakeys',
        filter: 'Florida',
        filter2: 'Keys'
      },
      {
        key: 'Broward County',
        value: 'browardcounty',
        filter: 'Broward'
      },
      {
        key: 'Palm Beach County',
        value: 'palmbeachcounty',
        filter: 'Palm',
        filter2: 'Beach'
      }
    ];
    const filters4 = [
      // 'All',
      // 'Less than 50',
      // '51-100',
      // '101-150',
      // '151-200',
      // '201-250',
      // '251-300',
      // '301-400',
      // '401-500',
      // '501-600',
      // '601-700',
      // '701-1000',
      // 'Over 1000'
      {
        key: 'Less than 50',
        value: '',
        filter: '0-50'
      },
      {
        key: '51-100',
        value: '',
        filter: '50-100'
      },
      {
        key: '101-150',
        value: '',
        filter: '100-150'
      },
      {
        key: '151-200',
        value: '',
        filter: '150-200'
      },
      {
        key: '201-250',
        value: '',
        filter: '200-250'
      },
      {
        key: '251-300',
        value: '',
        filter: '250-300'
      },
      {
        key: '301-400',
        value: '',
        filter: '300-400'
      },
      {
        key: '401-500',
        value: '',
        filter: '400-500'
      },
      {
        key: '501-600',
        value: '',
        filter: '500-700'
      },
      {
        key: '601-700',
        value: '',
        filter: '500-700'
      },
      {
        key: '701-1000',
        value: '',
        filter: '700-1000'
      },
      {
        key: 'Over 1000',
        value: '',
        filter: '1000-2000',
        filter2: '2000-3000',
        filter3: '3000-5000',
        filter4: '5000-10000'
      }
    ];
    const filters5 = [
      // 'All',
      // '0-$5,000',
      // '$5,000-$10,000',
      // '$10,000-$15,000',
      // '$15,000-$20,000',
      // '$20,000-$70,000',
      // '$70,000 or more'

      {
        key: '0-$5,000',
        value: '',
        filter: '0k-5k',
        filter2: '0-5k'
      },
      {
        key: '5,000-$10,000',
        value: '',
        filter: '5k-10k'
      },
      {
        key: '$10,000-$15,000',
        value: '',
        filter: '10k-15k'
      },
      {
        key: '$15,000-$20,000',
        value: '',
        filter: '15k-20k'
      },
      {
        key: '$20,000-$70,000',
        value: '',
        filter: '20k-30k',
        filter2: '30k-50k',
        filter3: '50k-70k'
      },
      {
        key: '$70,000 or more',
        value: '',
        filter: '70k-100k',
        filter2: '100k+'
      }
    ];
    const tabItems = filters.map(filter => (
      <div
        className={
          filter === this.state.selectedFilter
            ? 'col-sm text-center pointerWhole'
            : 'col-sm text-center pointerWhole'
        }
        key={filter.key}
        onClick={() => this.selectFilter(filter)}
      >
        <div className='mobileAlign1 d-flex'>
          <div className='column mt-5'>
            <img
              className='HOVE2'
              src={
                filter.value === 'corporate'
                  ? corporate
                  : filter.value === 'weddings'
                  ? weddings
                  : filter.value === 'social'
                  ? social
                  : null
              }
              alt=''
              style={{ width: '100%' }}
            />
            <br />
            <p className='text-center mt-3 '>
              <a className='aHeadings' href='#0'>
                {filter.key}
              </a>
            </p>
          </div>
        </div>
      </div>
    ));
    const tabItems2 = filters2.map(filter => (
      <div
        className={
          filter === this.state.selectedFilter2
            ? 'col-sm text-center mt-5 pointerWhole'
            : 'col-sm text-center mt-5 pointerWhole'
        }
        key={filter.key}
        onClick={() => this.selectFilter2(filter)}
      >
        <img
          className='HOVE2'
          src={
            filter.value === 'ballroom'
              ? ballroom
              : filter.value === 'church'
              ? church
              : filter.value === 'gallery'
              ? gallery
              : filter.value === 'garden'
              ? garden
              : filter.value === 'historic'
              ? historic
              : filter.value === 'hotel'
              ? hotel
              : filter.value === 'indoor'
              ? indoor
              : filter.value === 'industrial'
              ? industrial
              : filter.value === 'mansion'
              ? mansion
              : filter.value === 'modern'
              ? modern
              : filter.value === 'outdoor'
              ? outdoor
              : filter.value === 'party'
              ? party
              : filter.value === 'restaurant'
              ? restaurant
              : filter.value === 'rooftop'
              ? rooftop
              : filter.value === 'rustic'
              ? rustic
              : filter.value === 'studio'
              ? studio
              : filter.value === 'theater'
              ? theater
              : filter.value === 'waterfront'
              ? waterfront
              : null
          }
          alt=''
        />

        <p className='text-center mt-3'>
          <a className='aHeadings' href='#0'>
            {filter.key}
          </a>
        </p>
      </div>
    ));

    const tabItems3 = filters3.map(filter => (
      <div
        className={
          filter === this.state.selectedFilter3
            ? 'col-sm text-center mt-5 pointerWhole'
            : 'col-sm text-center mt-5 pointerWhole'
        }
        key={filter.key}
        onClick={() => this.selectFilter3(filter)}
      >
        <img
          className='HOVE2'
          src={
            filter.value === 'browardcounty'
              ? browardcounty
              : filter.value === 'centraldade'
              ? centraldade
              : filter.value === 'coconutgrove'
              ? coconutgrove
              : filter.value === 'coralgables'
              ? coralgables
              : filter.value === 'designdistrictwynwood'
              ? designdistrictwynwood
              : filter.value === 'downtownmiami'
              ? downtownmiami
              : filter.value === 'floridakeys'
              ? floridakeys
              : filter.value === 'keybiscayne'
              ? keybiscayne
              : filter.value === 'miamibeach'
              ? miamibeach
              : filter.value === 'northmiami'
              ? northmiami
              : filter.value === 'palmbeachcounty'
              ? palmbeachcounty
              : filter.value === 'southmiami'
              ? southmiami
              : null
          }
          alt=''
        />

        <p className='text-center mt-3 '>
          <a className='aHeadings' href='#0'>
            {filter.key}
          </a>
        </p>
      </div>
    ));

    const tabItems4 = filters4.map(filter => (
      <div
        className={
          filter === this.state.selectedFilter4
            ? 'col-sm text-center mt-4 pointerWhole'
            : 'col-sm text-center mt-4 pointerWhole'
        }
        key={filter.key}
        onClick={() => this.selectFilter4(filter)}
      >
        <div className='goldBox'>
          <a className='aNoImgHeadings' href='#0'>
            {filter.key}
          </a>
        </div>
      </div>
    ));

    const tabItems5 = filters5.map(filter => (
      <div
        className={
          filter === this.state.selectedFilter5
            ? 'col-sm text-center mt-5 pointerWhole'
            : 'col-sm text-center mt-5 pointerWhole'
        }
        key={filter.key}
        onClick={() => this.selectFilter5(filter)}
      >
        <div className='goldBox'>
          <a className='aNoImgHeadings' href='#0'>
            {filter.key}
          </a>
        </div>
      </div>
    ));

    return (
      <div>
        <Header StartOverTheApp={this.StartOverTheApp} />

        <form
          id='contact-form'
          className={!this.state.absoluteButton ? 'displayNone' : null}
        >
          <input type='hidden' name='contact_number' />

          <input
            type='text'
            name='user_name'
            className='displayNone'
            value={this.state.valueName}
          />

          <input
            type='email'
            name='user_email'
            className='displayNone'
            value={this.state.value}
          />

          {/* <table style='border: 0px solid rgba(0, 0, 0, 0);
 border-collapse: separate;
 border-spacing: 6px;
 table-layout: fixed;
 text-align: center;
 width: 100%;'>
 <tbody>
  <tr>
   <td><a href='http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
     / +/g,
     '-'
   ).toLowerCase()}'>
    <img src="${venue.Images}" alt="No Image" style='height: auto;
 max-width: 600px !important; max-height: 400px !important; box-sizing: border-box;
 -webkit-box-shadow: 0 0 10px #999;
 box-shadow: 0 0 10px #999;'></a>
    <p><a href='http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
      / +/g,
      '-'
    ).toLowerCase()}' style='font-size: 22px; color: black; text-decoration: none;'>${
                venue.Name
              }</a></p><br/><br/><br/>
              
   </td>
  </tr>
 </tbody>
</table> */}

          <textarea
            className='displayNone'
            type='text'
            name='contact'
            value={this.state.filteredOut5.map(
              venue => `<div><a href='http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
                / +/g,
                '-'
              ).toLowerCase()}' style='text-decoration: none; color: #234143;'>
<div style='
              margin: auto;
              margin-top: 20px;
              margin-bottom: 20px;
              width: 30%;
              padding: 200px 10px;
              background-color: #234143;
              background-image: url("${venue.Images}") !important;
              background-size: cover;
              '>
  
</div>
  <p style='text-align: center; top: 30px; color: #234143; font-size: 16px; font-falily: Arial;'><b>${
    venue.Name
  }</p></a>
  </div>`
            )}
          />
          {/* `<img src="${venue.Images}" alt="" height="42" width="42"/>${
                  venue.Name
                } URL: http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
                  / +/g,
                  '-'
                ).toLowerCase()}` */}

          <input
            type='submit'
            value={this.state.resultsSent === true ? '' : ''}
            className={
              this.state.resultsSent === true
                ? 'backBtn backBtnEnd sendFinalResultsButton mailIcon2'
                : 'backBtn backBtnEnd sendFinalResultsButton mailIcon'
            }
            onClick={this.sendEmailWithResults.bind(this)}
          />
          {this.state.resultsSent ? (
            <Popup
              text='Venues have been sent to your email'
              closePopup={this.sendEmailWithResults.bind(this)}
            />
          ) : null}
        </form>

        {this.state.cmp && (
          <div>
            <FirstComponent
              ToNextComp={this.ToSecondComponentFunc}
              filterBy={tabItems}
            />
          </div>
        )}

        {this.state.cmp2 && (
          <div>
            <ShowDelayed wait={2000}>
              <SecondComponent
                filterBy2={tabItems2}
                ToNextComp={this.ToThirdComponentFunc}
                ToPreviousComp={this.StartOverTheApp}
              />
            </ShowDelayed>
            <ShowWhileDelayed wait={2000}>
              <Loading process={'Finding your best match...'} />
            </ShowWhileDelayed>
          </div>
        )}

        {this.state.cmp3 && (
          <div>
            <ShowDelayed wait={2000}>
              <ThirdComponent
                filterBy3={tabItems3}
                ToNextComp={this.ToFourthComponentFunc}
                ToPreviousComp={this.FromThirdBackToSecondFunc}
              />
            </ShowDelayed>
            <ShowWhileDelayed wait={2000}>
              <Loading process={'Looking...'} />
            </ShowWhileDelayed>
          </div>
        )}

        {this.state.cmp4 && (
          <div>
            <ShowDelayed wait={2000}>
              <FourthComponent
                filterBy4={tabItems4}
                ToNextComp={this.ToFifthComponentFunc}
                ToPreviousComp={this.FromFourthBackToThirdFunc}
              />
            </ShowDelayed>
            <ShowWhileDelayed wait={2000}>
              <Loading process={'Locating...'} />
            </ShowWhileDelayed>
          </div>
        )}

        {this.state.cmp5 && (
          <div>
            <ShowDelayed wait={2000}>
              <FifthComponent
                filterBy5={tabItems5}
                ToNextComp={this.ToSixthComponentFunc}
                ToPreviousComp={this.FromFifthBackToFourthFunc}
              />
            </ShowDelayed>
            <ShowWhileDelayed wait={2000}>
              <Loading process={'Finding your best match...'} />
            </ShowWhileDelayed>
          </div>
        )}
        {this.state.cmp6 && (
          <div>
            <ShowDelayed wait={2000}>
              {/* <SixthComponent
                ToNextComp={this.ToSeventhComponentFunc}
                ToPreviousComp={this.FromSixthBackToFifthFunc}
              /> */}
              <div className='container'>
                <h1 className='text-center qHeadings mb-5'>
                  We've found your perfect venue match! Please provide your
                  email to share all the details.
                </h1>

                <div className='row mt-5'>
                  <div className='col-sm' />
                  <div className='col-sm'>
                    <iframe
                      title='formKeep'
                      className='iframe'
                      name='output_frame'
                      src=''
                      id='output_frame'
                      width='300px'
                      height='300px'
                    />
                    <form
                      className='needs-validation mobileInputAlign'
                      noValidate
                      action='https://formspree.io/bhmvq1@gmail.com'
                      method='POST'
                      target='output_frame'
                    >
                      <div className='form-row'>
                        <div className='col-md-4 mb-3'>
                          <input
                            type='text'
                            className='form-control bhInput'
                            id='validationTooltip01'
                            placeholder='NAME'
                            required
                            name='name'
                            value={this.state.valueName}
                            onChange={this.handleChange2}
                          />
                          <div className='valid-tooltip'>Looks good!</div>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='col-md-4 mb-3'>
                          <input
                            type='number'
                            className='form-control bhInput'
                            id='validationTooltip02'
                            placeholder='PHONE'
                            required
                            value={this.state.valueNumber}
                            onChange={this.handleChange3}
                          />
                          <div className='valid-tooltip'>Looks good!</div>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='col-md-4 mb-3'>
                          <input
                            type='email'
                            className='form-control bhInput'
                            id='validationTooltip02'
                            placeholder='EMAIL'
                            required
                            name='_replyto'
                            value={this.state.value}
                            onChange={this.handleChange}
                          />
                          <div className='valid-tooltip'>Looks good!</div>
                        </div>
                      </div>

                      <button
                        className=' bhSubmitBtn'
                        type='submit'
                        value='Send'
                        onClick={this.ToSeventhComponentFunc}
                      >
                        SUBMIT
                      </button>
                    </form>
                  </div>
                  <div className='col-sm' />
                </div>
                <div className='text-center'>
                  <button
                    onClick={this.FromSixthBackToFifthFunc}
                    className='backBtn mt-5 mb-5'
                  >
                    BACK
                  </button>
                </div>
              </div>
            </ShowDelayed>
            <ShowWhileDelayed wait={2000}>
              <Loading process={'Finalizing the results...'} />
            </ShowWhileDelayed>
          </div>
        )}
        {this.state.cmp7 && (
          <div>
            <ShowDelayed wait={4000}>
              <SeventhComponent
                filteredOut5={this.state.filteredOut5}
                StartOver={this.StartOverTheApp}
              />
            </ShowDelayed>
            <ShowWhileDelayed wait={4000}>
              <Loading process={'Preparing the results...'} />
            </ShowWhileDelayed>
          </div>
        )}
      </div>
    );
  }

  FromSecondBackToFirstFunc = () => {
    this.setState({
      // ...this.state,
      cmp: true,
      cmp2: false
    });
  };

  ToSecondComponentFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: true
    });
  };
  FromThirdBackToSecondFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: true,
      cmp3: false
    });
  };
  ToThirdComponentFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: true
    });
  };
  FromFourthBackToThirdFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: true,
      cmp4: false
    });
  };
  ToFourthComponentFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: true
    });
  };
  FromFifthBackToFourthFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: true,
      cmp5: false
    });
  };
  ToFifthComponentFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: false,
      cmp5: true
    });
  };
  FromSixthBackToFifthFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: false,
      cmp5: true,
      cmp6: false
    });
  };
  ToSixthComponentFunc = () => {
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: false,
      cmp5: false,
      cmp6: true
    });
  };
  ToSeventhComponentFunc = () => {
    // setTimeout(
    //   function() {
    //     this.setState({
    //       // ...this.state,
    //       cmp: false,
    //       cmp2: false,
    //       cmp3: false,
    //       cmp4: false,
    //       cmp5: false,
    //       cmp6: false,
    //       cmp7: true
    //     });
    //   }.bind(this),
    //   0
    // );
    this.setState({
      // ...this.state,
      cmp: false,
      cmp2: false,
      cmp3: false,
      cmp4: false,
      cmp5: false,
      cmp6: false,
      cmp7: true
    });
    setInterval(() => {
      this.setState({ absoluteButton: true });
    }, 4000);
    const segment = `${this.state.valueName}(${
      this.state.valueNumber
    }) submitted the form ${this.state.value}`;
    window.analytics.track(segment);
    // window.analytics.identify('userId12345', {
    //   email: 'lkdevtst@gmail.com'
    // });
  };
  StartOverTheApp = () => {
    // this.setState({
    //   // ...this.state,
    //   venues: venues,
    //   selectedFilter: 'All',
    //   selectedFilter2: 'All',
    //   selectedFilter3: 'All',
    //   selectedFilter4: 'All',
    //   selectedFilter5: 'All',
    //   menu: { open: false },
    //   cmp: true,
    //   cmp7: false
    // });
    window.location.reload();
  };
}

export default App;
