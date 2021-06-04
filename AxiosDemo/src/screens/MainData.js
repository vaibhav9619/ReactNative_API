import React, { useState } from 'react'
import { Button, FlatList, View, Text } from 'react-native'
import ApiCall from '../service/Axios'
import Request from '../service/Request'
const MainData = () => {
    const [data, setData] = useState([])
    
    function getDetails() {
        ApiCall(Request.getDetails(), (response, error) => {
            setData(response)
        })
    }
    function setDetails() {
        let jsonBody = JSON.stringify({
            title:'Vaibhav',
            body:'Sadana',
            userId:1,
            id:1
        })
        ApiCall(Request.setDetails(jsonBody), (response, error) => {
            setData(response)
        })
    }
    function putDetails() {
        let jsonBody = JSON.stringify({
            id:1,
            title:'Vaibhav',
            body:'Sadana',
            userId:1,
        })
        ApiCall(Request.putDetails(jsonBody), (response, error) => {
            setData(response)
        })
    }
    function renderItem({ item, index }) {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginTop: 5 }}></View>
            </View>
        )
    }
    return (
        <View>
            <Button onPress={() => getDetails()} title='get api' />
            <Button onPress={() => setDetails()} title='set api' />
            <Button onPress={() => putDetails()} title='put api' />
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MainData;