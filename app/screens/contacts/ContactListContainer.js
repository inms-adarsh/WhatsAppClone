import { compose, withHandlers, lifecycle, withProps, withState } from 'recompose';
import ContactListView from './ContactListView';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

const ContactListContainer = compose(
    withState('contacts', 'setContacts', []),
    lifecycle({
        async componentDidMount() {
            const {
                setContacts
            } = this.props;
            const { status } = await Permissions.askAsync(Permissions.CONTACTS);

            if (status === 'granted') {
                const payload = await Contacts.getContactsAsync({
                    fields: [
                        Contacts.PHONE_NUMBERS,
                        Contacts.name
                    ],
                });
                setContacts(payload.data);
            }
        }
    })
)(ContactListView);

export default ContactListContainer;