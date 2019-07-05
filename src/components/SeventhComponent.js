import React from 'react';
import ReactToPrint from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import placeholder from '../images/other/placeholder.jpg';
import pdfIcon from '../images/other/pdf-icon.png';

class SeventhComponent extends React.Component {
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
        <h1 className='text-center qHeadings mb-3'>
          {!this.props.filteredOut5.length < 1  ? <h1>Check out our venue recommendations <br /> that best fit your needs.</h1> : <h1>No matches found. <br/> We will contact you with more options! </h1> }
        </h1>

        <div className='text-center blah'>
          <ReactToPrint
            trigger={() => (
              <button className='backBtn backBtnEnd mt-5 mb-5 console'>
                <a className='print' href='#'>
                  <img src={pdfIcon} alt='' />
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
                    venue['Is featured?'] === 1
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
                    venue['Is featured?'] === 1
                      ? 'sameImgSize HOVE whileLoading'
                      : 'sameImgSize HOVE whileLoading'
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

export default SeventhComponent;
