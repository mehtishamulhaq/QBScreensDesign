import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './VenueListItem';


export default function VenueList({ data }) {
    console.log(ListItem);
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) =>
                <ListItem
                    item={item}
                    index={index}
                />}
            keyExtractor={(item, index) => index.toString()} />
    )
}

