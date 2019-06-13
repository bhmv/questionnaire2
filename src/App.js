import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';
import venues from './API/venues';
import './App.css';
import './AppMobile.css';
import Header from './Header';

import loading from './images/loading.svg';

import corporate from './images/occasion/corporate.png';
import weddings from './images/occasion/weddings.png';
import social from './images/occasion/social.png';

import ballroom from './images/type/ballroom.png';
import church from './images/type/church.png';
import gallery from './images/type/gallery.png';
import garden from './images/type/garden.png';
import historic from './images/type/historic.png';
import hotel from './images/type/hotel.png';
import indoor from './images/type/indoor.png';
import industrial from './images/type/industrial.png';
import mansion from './images/type/mansion.png';
import modern from './images/type/modern.png';
import outdoor from './images/type/outdoor.png';
import party from './images/type/party.png';
import restaurant from './images/type/restaurant.png';
import rooftop from './images/type/rooftop.png';
import rustic from './images/type/rustic.png';
import studio from './images/type/studio.png';
import theater from './images/type/theater.png';
import waterfront from './images/type/waterfront.png';

import browardcounty from './images/locations/browardcounty.png';
import centraldade from './images/locations/centraldade.png';
import coconutgrove from './images/locations/coconutgrove.png';
import coralgables from './images/locations/coralgables.png';
import designdistrictwynwood from './images/locations/designdistrictwynwood.png';
import downtownmiami from './images/locations/downtownmiami.png';
import floridakeys from './images/locations/floridakeys.png';
import keybiscayne from './images/locations/keybiscayne.png';
import miamibeach from './images/locations/miamibeach.png';
import northmiami from './images/locations/northmiami.png';
import palmbeachcounty from './images/locations/palmbeachcounty.png';
import southmiami from './images/locations/southmiami.png';

import placeholder from './images/other/placeholder.png';

const FirstComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>What are you celebrating?</h1>
      <div className='row' onClick={props.ToNextComp}>
        {props.filterBy}
      </div>
    </div>
  );
};

const SecondComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>Venue type</h1>
      <div className='row' onClick={props.ToNextComp}>
        {props.filterBy2}
      </div>
      {/* <div className='text-center'>
        <button onClick={props.StartOverTheApp} className='backBtn mt-5 mb-5'>
          BACK
        </button>
      </div> */}
    </div>
  );
};
class ThirdComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  StartOverTheApp = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className='container'>
        <h1 className='text-center qHeadings mb-5'>
          Preferred geographical area
        </h1>
        <div className='row' onClick={this.props.ToNextComp}>
          {this.props.filterBy3}
        </div>
        <div className='text-center'>
          <button onClick={this.StartOverTheApp} className='backBtn mt-5 mb-5'>
            BACK
          </button>
        </div>
      </div>
    );
  }
}
const FourthComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>Estimated number of guests</h1>
      <div className='row etaNumberAlign' onClick={props.ToNextComp}>
        {props.filterBy4}
      </div>
      <div className='text-center'>
        <button onClick={props.ToPreviousComp} className='backBtn mt-5 mb-5'>
          BACK
        </button>
      </div>
    </div>
  );
};
const FifthComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>
        Select your budget for the venue only
      </h1>
      <div className='row budgetAlign' onClick={props.ToNextComp}>
        {props.filterBy5}
      </div>
      <p className='budgetDisclaimer mt-5'>
        Venue rental fees range from as little as $1000 to over $25000. The
        average venue rental fees run from $4000 to around $8000. Venue rental
        fees do not include the cost of catering and other wedding or event
        services. As a general guideline, your venue cost will make up somewhere
        between 15-30% of your total budget.
      </p>
      <div className='text-center'>
        <button onClick={props.ToPreviousComp} className='backBtn mt-5 mb-5'>
          BACK
        </button>
      </div>
    </div>
  );
};
class SixthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputName: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputName: event.target.inputName });
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center qHeadings mb-5'>
          Let us contact you to discuss your next event!
        </h1>

        <div className='row mt-5'>
          <div className='col-sm' />
          <div className='col-sm'>
            <iframe
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
              target='_blank'
            >
              {/* TODO: */}
              <div className='form-row'>
                <div className='col-md-4 mb-3'>
                  <input
                    type='text'
                    className='form-control bhInput'
                    id='validationTooltip01'
                    placeholder='NAME'
                    required
                    name='name'
                    value={this.state.inputName}
                    onChange={this.handleChange}
                  />
                  <div className='valid-tooltip'>Looks good!</div>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-md-4 mb-3'>
                  <input
                    type='text'
                    className='form-control bhInput'
                    id='validationTooltip02'
                    placeholder='PHONE'
                    required
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
                  />
                  <div className='valid-tooltip'>Looks good!</div>
                </div>
              </div>

              <button
                className=' bhSubmitBtn'
                type='submit'
                value='Send'
                onClick={this.props.ToNextComp}
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className='col-sm' />
        </div>
        <div className='text-center'>
          <button
            onClick={this.props.ToPreviousComp}
            className='backBtn mt-5 mb-5'
          >
            BACK
          </button>
        </div>
      </div>
    );
  }
}
class SeventhComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf');
    });
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center qHeadings mb-5'>
          Thanks for telling us about your event!
        </h1>
        <div className='text-center'>
          <ReactToPrint
            trigger={() => (
              <button className='backBtn backBtnEnd mt-5 mb-5'>
                <a className='print' href='#'>
                  SAVE
                </a>
              </button>
            )}
            content={() => this.componentRef}
          />
        </div>

        <div className='row' ref={el => (this.componentRef = el)}>
          {this.props.filteredOut5.map(venue => (
            <div
              className='col-sm text-center mt-5 pointerWhole'
              key={venue.ID}
            >
              <a
                className='noBlueLine'
                target='_blank'
                rel='noopener noreferrer'
                href={`http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
                  / +/g,
                  '-'
                ).toLowerCase()}`}
              >
                <span
                  className={
                    venue.featured === 1
                      ? 'sameImgSize notify-badge'
                      : 'sameImgSize doNotShowBadge'
                  }
                >
                  FEATURED
                </span>
                <img
                  src={venue.Images}
                  alt={placeholder}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                  className={
                    venue.featured === 1
                      ? 'sameImgSize HOVE'
                      : 'sameImgSize HOVE'
                  }
                />

                <p className='text-center mt-3 '>
                  <span className='aHeadings whenPrinted' href='#0'>
                    {venue.Name}
                  </span>
                </p>
                <p className='text-center mt-3'>
                  <span
                    className='aHeadings whenPrinted whenPrinted2'
                    href='#0'
                  >
                    {`http://billhansenmiamivenues.com/venues-vendors/${venue.Name.replace(
                      / +/g,
                      '-'
                    ).toLowerCase()}`}
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button
            onClick={this.props.StartOver}
            className='backBtn backBtnEndTop mt-5 mb-5'
          >
            START AGAIN
          </button>
        </div>
      </div>
    );
  }
}

class ShowDelayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  componentDidMount = () => {
    // ***
    // Remember the timer handle             // ***
    this.timerHandle = setTimeout(() => {
      // ***
      this.setState({ hidden: false }); // ***
      this.timerHandle = 0; // ***
    }, this.props.wait); // ***
  }; // ***
  // ***
  componentWillUnmount = () => {
    // ***
    // Is our timer running?                 // ***
    if (this.timerHandle) {
      // ***
      // Yes, clear it                     // ***
      clearTimeout(this.timerHandle); // ***
      this.timerHandle = 0; // ***
    } // ***
  };

  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({ hidden: false });
  //   }, this.props.wait);
  // };

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

class ShowWhileDelayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ hidden: true });
  //   }, this.props.wait);

  componentDidMount = () => {
    // ***
    // Remember the timer handle             // ***
    this.timerHandle = setTimeout(() => {
      // ***
      this.setState({ hidden: true }); // ***
      this.timerHandle = 0; // ***
    }, this.props.wait); // ***
  }; // ***
  // ***
  componentWillUnmount = () => {
    // ***
    // Is our timer running?                 // ***
    if (this.timerHandle) {
      // ***
      // Yes, clear it                     // ***
      clearTimeout(this.timerHandle); // ***
      this.timerHandle = 0; // ***
    } // ***
  };

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

const Loading = props => {
  return (
    <div className='text-center loadingDiv'>
      <img src={loading} alt='Personalizing...' className='HOVE3' />
      <h1 className='aHeadings mt-5'>{props.process}</h1>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: venues,
      // selectedFilter: 'All',
      // selectedFilter2: 'All',
      // selectedFilter3: 'All',
      // selectedFilter4: 'All',
      // selectedFilter5: 'All',
      // menu: { open: false },
      cmp: true,
      cmp2: false,
      test: true,
      filteredOut1: [],
      filteredOut2: [],
      filteredOut3: [],
      filteredOut4: [],
      filteredOut5: venues.filter(venue => venue.featured === 1),
      inputName: ''
    };
    console.log(
      '%c%s',
      'color:red; background:blue; font-size: 20pt',
      'blah ;)'
    );
  }

  selectFilter = filter => {
    this.setState({
      // selectedFilter: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : venues.filter(venue => venue.category === filter.key),
      filteredOut1: venues.filter(venue => venue.category === filter.filter)
    });
  };

  selectFilter2 = filter => {
    let one = venues.filter(venue => venue.type.includes(`${filter.filter}`));
    let two = venues.filter(venue => venue.type.includes(`${filter.filter2}`));
    let three = one.concat(two);
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
      filteredOut2: three
    });
  };

  selectFilter3 = filter => {
    this.setState({
      // selectedFilter3: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut2.filter(
      //         venue => venue.location === filter.key
      //       ),
      filteredOut3: this.state.filteredOut2.filter(
        venue => venue.location === filter.key
      )
    });
  };
  selectFilter4 = filter => {
    let one = this.state.filteredOut3.filter(venue =>
      venue.etaNumber.includes(`${filter.filter}`)
    );
    let two = this.state.filteredOut3.filter(venue =>
      venue.etaNumber.includes(`${filter.filter2}`)
    );
    let three = this.state.filteredOut3.filter(venue =>
      venue.etaNumber.includes(`${filter.filter3}`)
    );
    let four = this.state.filteredOut3.filter(venue =>
      venue.etaNumber.includes(`${filter.filter4}`)
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
      venue.budget.includes(`${filter.filter}`)
    );
    let two = this.state.filteredOut4.filter(venue =>
      venue.budget.includes(`${filter.filter2}`)
    );
    let three = this.state.filteredOut4.filter(venue =>
      venue.budget.includes(`${filter.filter3}`)
    );
    // let featured = venues.filter(venue => venue.featured === 1);
    let four = one.concat(two, three);
    this.setState({
      // selectedFilter5: filter,
      // venues:
      //   filter === 'All'
      //     ? venues
      //     : this.state.filteredOut4.filter(venue => venue.budget === filter),
      filteredOut5: four
    });
  };

  render() {
    const filters = [
      // { key: 'All', value: '' },
      {
        key: 'Corporate',
        value: 'corporate',
        filter: 'Corporate, Social, Wedding'
      },
      {
        key: 'Weddings',
        value: 'weddings',
        filter: 'Corporate, Social, Wedding'
      },
      {
        key: 'Social',
        value: 'social',
        filter: 'Corporate, Social, Wedding'
      }
    ];

    const filters2 = [
      // { key: 'All', value: '' },
      {
        key: 'Ballroom & Banquet Hall',
        value: 'ballroom',
        filter: 'Ballroom',
        filter2: 'Banquet Hall'
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
        filter2: 'Private Property'
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
        filter: 'Party at Sea',
        filter2: 'Party'
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
        value: 'browardcounty'
      },
      {
        key: 'Design District/Wynwood',
        value: 'designdistrictwynwood'
      },
      {
        key: 'Downtown Miami',
        value: 'downtownmiami'
      },
      {
        key: 'North Miami',
        value: 'northmiami'
      },
      {
        key: 'Coconut Grove',
        value: 'coconutgrove'
      },
      {
        key: 'Coral Gables',
        value: 'coralgables'
      },
      {
        key: 'South Miami',
        value: 'southmiami'
      },
      {
        key: 'Central Dade',
        value: 'centraldade'
      },
      {
        key: 'Key Biscayne',
        value: 'keybiscayne'
      },
      {
        key: 'Florida Keys',
        value: 'floridakeys'
      },
      {
        key: 'Broward County',
        value: 'browardcounty'
      },
      {
        key: 'Palm Beach County',
        value: 'palmbeachcounty'
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
        filter: '0-5k'
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
                ToPreviousComp={this.FromSecondBackToFirstFunc}
              />
              <h1 className='text-center qHeadings mb-5'>Comming soon...</h1>
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
              <SixthComponent
                ToNextComp={this.ToSeventhComponentFunc}
                ToPreviousComp={this.FromSixthBackToFifthFunc}
              />
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
    const segment = `form submitted`;
    window.analytics.track(segment);
    window.analytics.identify('userId12345', {
      email: 'lkdevtst@gmail.com'
    });
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
