import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);        
        this.handleIndexClick = this.handleIndexClick.bind(this);

        this.state = {
            photos: [],
            active: 0
        };        
    };

    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({ large }) => large);       
        }

        return { photos }
    }

    handleIndexClick (idx) {
        this.setState({
            active: idx
        })
    }

    render() {
        const { photos, active } = this.state;

        return (
            <div className='carousel'>
                <img src={photos[active]} alt='animal' />
                <div className='carousel-smaller'>
                    {photos.map(( photo, idx ) => (
                        <img
                            key={photo}
                            onClick= {this.handleIndexClick.bind(this, idx)}
                            //data-index={idx}
                            src={photo}
                            className={idx === active ? 'active' : ''}
                            alt='animal thumbnail'
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;