import React, { Component } from 'react'
import { View, Text, FlatList, EmptyList } from 'react-native';

const ContactListView = (props) => {
    const { contacts } = props;
    const _renderItem = (item) => {
        return <Text>213</Text>
    }

    return (
        <FlatList
            data={contacts}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.id}
            ListEmptyComponent={<View><Text>No Items</Text></View>}
        />
    )
}

export default ContactListView;