from geopy import distance

def calculateDistance(Js_Proxy_route):
  coordinatesA = (Js_Proxy_route.coordinatesA.latitude, Js_Proxy_route.coordinatesA.longitude)
  coordinatesB = (Js_Proxy_route.coordinatesB.latitude, Js_Proxy_route.coordinatesB.longitude)
  routeDistance = distance.distance(coordinatesA, coordinatesB).km
  Js_Proxy_route.distance = routeDistance


def calculate_average_coordinates(coordinatesA, coordinatesB):
  avg_lat = (coordinatesA[0] + coordinatesB[0]) / 2
  avg_lon = (coordinatesA[1] + coordinatesB[1]) / 2
  return {'avg_lat': avg_lat, 'avg_lon': avg_lon}


