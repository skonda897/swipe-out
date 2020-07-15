import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {listitemsarray} from './listitems';
import ItemCard from './itemcard';
const screenwidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;

function PerkListScreen() {
  const [list, setlist] = useState(listitemsarray);
  const removeitem = (id) => {
    console.log('id is ', id);
    let listcopy = list.slice();
    let ind = listcopy.findIndex((obj) => obj.id === id);
    listcopy.splice(ind, 1);
    console.log(listcopy);
    setlist(listcopy);
    console.log(list);
  };
  useEffect(() => {
    console.log('should rerender');
  }, [list]);
  return (
    <View
      style={{flex: 1, backgroundColor: 'rgba(0,0,0,1)', position: 'relative'}}>
      <View
        style={{
          height: 45,
          width: screenwidth,
          backgroundColor: 'rgba(72, 72, 72, 1)',
          position: 'absolute',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: screenwidth,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              position: 'absolute',
              top: 22,
              left: 24,
              height: 16,
              width: 12,
            }}
            source={require('../assets/Perkfix-Green-Logo_PF-3x.png')}
          />
          <View>
            <Ionicons
              style={{
                position: 'absolute',
                top: 21,
                left: 320,
                height: 30,
                width: 30,
              }}
              name={'search'}
              color={'white'}
              size={18}
            />
            <Image
              style={{
                position: 'absolute',
                top: 22,
                left: 347,
                height: 20,
                width: 20,
                borderRadius: 10,
              }}
              source={require('../assets/dp.jpg')}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          position: 'absolute',
          top: 56,
          left: 20,
          height: 22,
          width: 116,
          fontSize: 16,
          color: 'rgba(255,255,255,1)',
        }}>
        Kah_ching
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(72, 72, 72, 1)',
          height: 15,
          width: 15,
          borderRadius: 7,
          top: 60,
          left: 183,
          position: 'absolute',
        }}>
        <SimpleLineIcons
          style={{
            position: 'absolute',
            left: 2,
            top: 1,
            height: 13,
            width: 13,
          }}
          size={12}
          name="options-vertical"
          color={'white'}
        />
      </View>
      <Feather
        style={{
          position: 'absolute',
          top: 60,
          left: 206,
          height: 15,
          width: 15,
        }}
        name="edit"
        color="white"
        size={15}
      />
      <Text
        style={{
          position: 'absolute',
          top: 78,
          left: 20,
          height: 12,
          width: 48,
          fontSize: 10,
          color: 'rgba(255, 255, 255, 1)',
          lineHeight: 12,
        }}>
        23 Perks
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: 90,
          left: 20,
          height: 12,
          width: 81,
          fontSize: 10,
          color: 'rgba(255, 255, 255, 1)',
          lineHeight: 12,
        }}>
        List Value: $320
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: 102,
          left: 20,
          height: 12,
          width: 90,
          fontSize: 10,
          color: 'rgba(255, 255, 255, 1)',
          lineHeight: 12,
        }}>
        Available Balance:
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: 102,
          left: 112,
          height: 12,
          width: 32,
          fontSize: 10,
          color: 'rgba(255, 102, 102, 1)',
          lineHeight: 12,
        }}>
        -$100
      </Text>
      <View
        style={{
          position: 'absolute',
          top: 125,
          left: 20,
          height: 9,
          width: 327,
          backgroundColor: 'rgba(255, 102, 102, 1)',
          borderRadius: 5,
        }}></View>
      <View
        style={{
          position: 'absolute',
          top: 125,
          left: 20,
          height: 9,
          width: 273,
          backgroundColor: 'rgba(0, 200, 136, 1)',
          borderRadius: 5,
        }}></View>

      <View
        style={{
          position: 'absolute',

          top: 147,
          left: 22,
          height: 18,
          width: 325,
          //font-family: 'SF Pro Text';
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 1)',
          }}>
          Remove some perks because you are over your available balance.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 180,
          left: 9,
          height: 2,
          width: 359,
          borderColor: 'rgba(151, 151, 151, 1)',
          borderWidth: 1,
        }}></View>
      <ScrollView
        style={{
          //position: 'absolute',
          top: 211,
          left: screenwidth - 358 - 25,
          height: 59,
          width: 358,
        }}>
        {list.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            listid={item.id}
            del={removeitem}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default PerkListScreen;
