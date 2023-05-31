import React, {useEffect, useState} from 'react';
import { Text, View, ActivityIndicator, FlatList} from 'react-native';

export default function Home(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
     .then((Response) => Response.json())
        .then((json) => setData(json.movies))
        .catch((Error) => console.log(Error))
        .finally(() => setLoading(false));
    
      }, []);

    return(
        <View> 
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtrator={({id}, index) => id}
            renderItem={
              ({item}) => (
                <Text>{item.title}, {item.releaseYear}</Text>
              )
            }
          />
        )}
      </View>
    );
}
