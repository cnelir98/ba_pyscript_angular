import map_module
import computation_map_module
import CoordinatesExtendedComponent

def mainMap(Js_Proxy_route):
  map_module.displayMap(Js_Proxy_route)
  computation_map_module.calculateDistance(Js_Proxy_route)
  CoordinatesExtendedComponent.mapIsDisplayed()

def onDestroy():
   del globals()['CoordinatesExtendedComponent']

