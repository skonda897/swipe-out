/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {Chevron} from 'react-native-shapes';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
const screenwidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;
export default function App() {
  const [userrating, setrating] = useState(4.9);
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 1)'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('./assets/Perkfix-Green-Logo_PF-3x.png')}
          style={styles.logo}></Image>
        <Image
          source={require('./assets/dp.jpg')}
          style={styles.displaypic}></Image>
      </View>

      <View>
        <View
          style={{
            position: 'absolute',
            top: 55,
            left: 9,
            height: 21,
            width: 12,
          }}>
          <Chevron size={2.3} rotate={90} color={'rgba(10, 132, 255, 1)'} />
        </View>
        <Text style={styles.hometext}>Home</Text>
      </View>
      <View style={styles.searchbar}>
        <View style={styles.searchfield}>
          <Icon
            name="search-outline"
            size={10}
            style={{
              fontSize: 22,
              top: 7,
              left: 5,
              position: 'absolute',
              color: 'rgba(255,255,255,0.36)',
            }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="rgba(255,255,255,0.36)"
            style={{
              left: 27,
              fontSize: 21,
              height: 45,
              width: 280,
            }}></TextInput>
        </View>
      </View>
      <View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.heading}>Recommended</Text>
          <Text style={styles.sideheading}> See All</Text>
        </View>
        <View style={{top: 250}}>
          <View>
            <Image
              source={require('./assets/site-logo-400-2x.png')}
              style={styles.thumbnail}
            />
            <View>
              <Text style={styles.titletext}>Netflix</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ratingnumber}>4.9</Text>
                <View style={{width: 68, left: 100, top: 3, height: 12}}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={userrating}
                    starSize={15}
                    selectedStar={(rating) => setrating(rating)}
                    fullStarColor={'rgba(253, 130, 6, 1)'}
                  />
                </View>
              </View>
              <Text style={styles.limitprice}>Limit: $14.99/mo</Text>
            </View>
            <View style={styles.addperkbutton}>
              <Text style={styles.addperktext}>ADD PERK</Text>
            </View>
            <View style={styles.dividerline}></View>
          </View>
        </View>

        {/* 2ND ITEM */}
        <View style={{top: 300}}>
          <Image
            source={require('./assets/Bitmap-2x.png')}
            style={styles.thumbnail}
          />
          <View>
            <Text style={styles.titletext}>Apple Arcade</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ratingnumber}>4.9</Text>
              <View style={{width: 68, left: 100, top: 3, height: 12}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={userrating}
                  starSize={15}
                  selectedStar={(rating) => setrating(rating)}
                  fullStarColor={'rgba(253, 130, 6, 1)'}
                />
              </View>
            </View>
            <Text style={styles.limitprice}>Limit: $19.99/mo</Text>
          </View>
          <View style={styles.addperkbutton}>
            <Text style={styles.addperktext}>ADD PERK</Text>
          </View>
          <View style={styles.dividerline}></View>
        </View>

        {/* 3RD ITEM */}

        <View style={{top: 350}}>
          <Image
            source={require('./assets/talkspace_3_logo-2x.png')}
            style={styles.thumbnail}
          />
          <View>
            <Text style={styles.titletext}>Apple Arcade</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ratingnumber}>4.9</Text>
              <View style={{width: 68, left: 100, top: 3, height: 12}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={userrating}
                  starSize={15}
                  selectedStar={(rating) => setrating(rating)}
                  fullStarColor={'rgba(253, 130, 6, 1)'}
                />
              </View>
            </View>
            <Text style={styles.limitprice}>Limit: $16.99/mo</Text>
          </View>
          <View style={styles.addperkbutton}>
            <Text style={styles.addperktext}>ADD PERK</Text>
          </View>
          <View style={styles.dividerline}></View>
        </View>

        {/* 4TH ITEM */}
        <View style={{top: 400}}>
          <Image
            source={require('./assets/download_copy_5-2x.png')}
            style={styles.thumbnail}
          />
          <View>
            <Text style={styles.titletext}>Rinse</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ratingnumber}>4.9</Text>
              <View style={{width: 68, left: 100, top: 3, height: 12}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={userrating}
                  starSize={15}
                  selectedStar={(rating) => setrating(rating)}
                  fullStarColor={'rgba(253, 130, 6, 1)'}
                />
              </View>
            </View>
            <Text style={styles.limitprice}>Limit: $16.99/mo</Text>
          </View>
          <View style={styles.addperkbutton}>
            <Text style={styles.addperktext}>ADD PERK</Text>
          </View>
          <View style={styles.dividerline}></View>
        </View>
      </View>
      <View style={styles.downarrow}>
        <Chevron size={2.5} rotate={0} color={'rgba(10, 132, 255, 1)'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titletext: {
    left: 92,
    height: 22,
    width: 100,
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 0.01,
  },
  thumbnail: {height: 41, width: 41, left: 30, position: 'absolute'},
  ratingnumber: {
    color: 'white',
    left: 92,
    height: 22,
    width: 25,
  },
  addperktext: {
    color: 'rgba(0, 122, 255, 1)',
    textAlign: 'center',
    height: 18,
    width: 80,
    left: 5,
    top: 2,
    fontSize: 13,
    fontWeight: '600',
  },
  addperkbutton: {
    position: 'absolute',
    height: 28,
    width: 90,
    backgroundColor: 'rgba(28, 28, 30, 1)',
    borderRadius: 10,
    left: 246,
    alignContent: 'center',
    top: 20,
  },
  dividerline: {
    top: 18,
    left: 92,
    height: 1,
    width: 263,
    backgroundColor: 'rgba(56, 56, 58, 1)',
  },
  limitprice: {
    left: 92,
    height: 18,
    width: 102,
    color: 'rgba(235, 235, 245, 0.6)',
  },
  logo: {
    height: 16,
    width: 12,
    position: 'absolute',
    top: 20,
    left: 24,
  },
  displaypic: {
    position: 'absolute',
    top: 20,
    left: 345,
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  hometext: {
    position: 'absolute',
    top: 44,
    left: 24,
    height: 22,
    width: 120,
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: 'rgba(0, 174, 255, 1)',
    lineHeight: 22,
  },
  searchbar: {
    position: 'absolute',
    top: 90,
    left: 0,
    height: 52,
    width: '100%',
    backgroundColor: 'rgba(15,15,17,1)',
  },
  searchfield: {
    position: 'absolute',
    top: 8,
    left: 16,
    height: 36,
    width: 343,
    backgroundColor: 'rgba(44, 44, 46, 1)',
    borderRadius: 10,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'SFProDisplay-Bold',
    color: '#ffffff',
    top: 184,
    left: 20,
    width: 266,
    height: 28,
    lineHeight: 28,
    letterSpacing: 0.159,
  },
  sideheading: {
    position: 'absolute',
    top: 192,
    left: 259,
    height: 22,
    width: 96,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: 'rgba(10, 132, 255, 1)',
    textAlign: 'right',
    lineHeight: 22,
  },
  downarrow: {
    top: screenheight * 0.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
