import React from 'react'
import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-95666-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'applicaiton/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage