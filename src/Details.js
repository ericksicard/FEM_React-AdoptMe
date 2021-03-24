import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { Redirect } from 'react-router-dom';
import Modal from './Modal';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            showModal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.adopt = this.adopt.bind(this);
    }
    componentDidMount () {
        const { id } = this.props.match.params;
        pet.animal(id)
            .then(({ animal }) => {
                this.setState({
                    url: animal.url,
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

    toggleModal() { this.setState({ showModal: !this.state.showModal }) };
    adopt() { 
        console.log(this.state.url)
        return <Redirect to={this.state.url} />
     };

    render() {
        const { animal, breed, location, description, name, media, showModal } = this.state;

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
                    <button onClick={this.toggleModal}>Adopt {name}</button>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className='buttons'>
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>No</button>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
};