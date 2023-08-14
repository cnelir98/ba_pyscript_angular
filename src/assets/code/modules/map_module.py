import folium
import computation_map_module
import js
from pyscript import display, Element

def displayMap(Js_Proxy_route):
  # Clear map
  mapDiv = Element("map")
  mapDiv.clear()

  # Implizit conversion
  route = Js_Proxy_route.to_py()
  coordinatesA = (float(route['coordinatesA']['latitude']), float(route['coordinatesA']['longitude']))
  coordinatesB = (float(route['coordinatesB']['latitude']), float(route['coordinatesB']['longitude']))

  # Set view point
  avg_coordinates = computation_map_module.calculate_average_coordinates(coordinatesA, coordinatesB)
  map = folium.Map(location=(avg_coordinates['avg_lat'], avg_coordinates['avg_lon']), zoom_start=3)

  # Add marker
  folium.Marker(location=coordinatesA).add_to(map)
  folium.Marker(location=coordinatesB).add_to(map)

  # Add line between Coordinates
  folium.PolyLine(locations=[coordinatesA, coordinatesB], color="red").add_to(map)

  # Show map
  display(map,target="map")

