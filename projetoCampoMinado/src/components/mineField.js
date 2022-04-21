import React from 'react'
import { View, StyleSheet } from 'react-native'

import Field from './field'

export default props => {
    const rows = props.board.map((row, r) => {
        const column = row.map((field, c) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)}/>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{column}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center'
    }
})

