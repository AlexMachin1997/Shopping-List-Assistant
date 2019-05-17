// React dependencies
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Vibration,
  Alert
} from "react-native";

// Higr-Order-Components (HOC)
import { NavigationEvents } from "react-navigation";

// Stateless components
import Loading from "../Components/UI/States/Loading";

/*
Context API Consumer:
- Wraps the entire component, Consumer then renders the children (This components JSX)
- When using the <Consumer> component you can access the value which has access to the entire state and the dispatch method

Usage:

<Consumer>
{value => {
  <Text colour={value.isDark : "White" : "Black"}> Hello </Text>
}}
</Consumer>
*/
import { Consumer } from "../Context";

// location assets
import Locations from "../../supermarkets.json";
import NightMode from "../Assets/GoogleMapsNight.json";
import MapView, { Marker } from "react-native-maps";

// Styled-Components can't provide this so a custom react-native view needed to be provided.
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default class ItemTracking extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
    isLoading: true,
    markers: []
  };

  checkSupermarketLocations = async () => {
    // Old JSON data
    let copyOfSuperMarkets = [...Locations];

    // Filtered data based on the lat and lng from watchPosition()
    let filteredCopyOfSuperMarkets = copyOfSuperMarkets.filter(
      location =>
        this.state.latitude <= location.Lat &&
        this.state.longitude <= location.Lng
    );

    // Updates the markers array
    await this.setState({
      markers: filteredCopyOfSuperMarkets
    });

    // Shows the current supermarkets in the console
    console.log("Current supermarkets in your area: ");
    console.log(filteredCopyOfSuperMarkets.length);

    // Check the supermarkets and users latitude and longitude
    // FLAW: Whilst the code runs and provides the neccessary ouputs it won't render the map when there are more than 190 marks.
    // SOLUTION: Add a clustering engine, allows the markers to gradually be spawned in. Unable to do it at the moment as Im short on time.
    filteredCopyOfSuperMarkets.map(data => {
      if (
        this.state.latitude === data.Lat &&
        this.state.longitude === data.Lng
      ) {
        // Makes the phone vibrate for 1 second
        Vibration.vibrate(1000);

        // Sends an alert message (Used instead of push notifications)
        Alert.alert(
          "Shopping list notification",
          "Your currently near a supermarket check your shopping lists",
          [
            {
              text: "OK",
              onPress: () => console.log("ALert dismissed")
            }
          ],

          // Allows you to click outside the alert to close it.
          { cancelable: true }
        );
      }
    });
  };

  watchLocation = () => {
    console.log("The mobile application is now watching your location");

    // Starts to watch your location
    // Even though enableHighAccuracy is enabled it still takes a considerable amount of time to load. All you will see is a blue screen until it's found
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        // When the location is checked check to the supermarkets in your local area
        this.checkSupermarketLocations();
      },
      {
        enableHighAccuracy: true,
        maximumAge: 300000,
        useSignificantChanges: true
      }
    );
  };

  requestLocationPermission = async () => {};

  async componentDidMount() {
    // Start to watch the users location
    await this.watchLocation();

    // Only needed when you have hard coded locations
    //this.checkSupermarketLocations();

    // Set loading to false
    await this.setState(({ isLoading }) => ({
      isLoading: !isLoading
    }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Consumer>
          {value => {
            return <Loading isDark={value.isDark} />;
          }}
        </Consumer>
      );
    }

    return (
      <Consumer>
        {value => {
          return (
            <View style={styles.container}>
              <NavigationEvents onDidFocus={this.watchLocation} />

              <MapView
                style={styles.map}
                region={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: this.state.latitudeDelta,
                  longitudeDelta: this.state.longitudeDelta
                }}
                showsUserLocation={true}
                zoomEnabled={true}
                zoomTapEnabled={true}
                rotateEnabled={true}
                pitchEnabled={true}
                userLocationAnnotationTitle="My current location"
                followsUserLocation={true}
                showsCompass={true}
                customMapStyle={value.isDark ? NightMode : []}
                loadingEnabled={this.state.isLoading}
              >
                {this.state.markers.map((data, index) => {
                  let lat = data.Lat;
                  let lng = data.Lng;

                  return (
                    <Marker
                      key={index}
                      coordinate={{ latitude: lat, longitude: lng }}
                      title={data.Name}
                    />
                  );
                })}
              </MapView>
            </View>
          );
        }}
      </Consumer>
    );
  }
}
