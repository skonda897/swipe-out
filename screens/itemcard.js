import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-swipeable';
import {Chevron} from 'react-native-shapes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {listitemsarray} from './listitems';
const rightButtons = [
  <View
    style={{
      backgroundColor: 'rgba(255, 102, 102, 1)',
      height: 59,
    }}>
    <TouchableHighlight>
      <View style={{flexDirection: 'row', top: 20}}>
        <Chevron
          size={2.3}
          rotate={90}
          color={'rgba(255, 255, 255, 1)'}
          style={{top: 9}}
        />
        <Text style={{color: 'white', marginLeft: 10}}>Remove</Text>
      </View>
    </TouchableHighlight>
  </View>,
];

function Card(props) {
  const {image, title, price} = props;
  return (
    <View
      style={{
        height: 59,
        width: 358,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        marginBottom: 7,
      }}>
      <Image
        style={{
          position: 'absolute',
          top: 9,
          left: 14,
          height: 41,
          width: 41,
        }}
        source={image}
      />
      <Text
        style={{
          position: 'absolute',
          top: 11,
          left: 74,
          height: 16,
          width: 250,
          fontSize: 16,
          fontWeight: '500',
          color: 'rgba(31, 31, 31, 1)',
          lineHeight: 16,
        }}>
        {title}
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: 33,
          left: 74,
          height: 14,
          width: 100,
          fontSize: 14,
          fontWeight: '500',
          color: 'rgba(105, 105, 105, 1)',
          lineHeight: 14,
        }}>
        {price}
      </Text>
      <SimpleLineIcons
        style={{
          position: 'absolute',
          top: 21,
          left: 326,
          height: 17,
          width: 17,
        }}
        name="options-vertical"
      />
    </View>
  );
}

export default function ItemCard(props) {
  const {image, title, price, listid, del} = props;
  return (
    //   <View style={styles.background} />
    <Swipeable
      rightButtons={rightButtons}
      onRightActionRelease={() => {
        //listitemsarray.splice(listid, 1);
        del(listid);
      }}>
      <Card image={image} title={title} price={price} />
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 102, 102, 1)',
    height: 59,
    width: 358,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
  },
});
