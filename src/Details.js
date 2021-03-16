import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }
    componentDidMount () {
        const { id } = this.props.match.params;
        pet.animal(id)
            .then(({ animal }) => {
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                })
            }, console.error);
    }
    render() {
        const { animal, breed, location, description, name, media } = this.state;

        if (this.state.loading) {
            return (
            <div className='loading'>
                <h1>loading...</h1>;
            </div>
            )
        }

        return (
            <div className='details'>
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default Details;