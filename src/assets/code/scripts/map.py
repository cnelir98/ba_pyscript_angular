import folium
import CoordinatesComponent

def displayMap(Js_Proxy_coordinates):
  coordinates = Js_Proxy_coordinates.to_py()

  # Create map
  m = folium.Map(location=[coordinates['latitude'],coordinates['longitude']], zoom_start=10)

  # Add marker
  folium.Marker(location=[coordinates['latitude'],coordinates['longitude']]).add_to(m)

  # Show map
  pyscript.display(m,target="map")

  CoordinatesComponent.mapIsDisplayed()

def onDestroy():
    del globals()['CoordinatesComponent']
    