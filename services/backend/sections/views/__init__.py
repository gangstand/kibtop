from .realty.views_realty import RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy
from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList
from .views_base import CityAPIList, MoneyAPIList, MoneyAPIUpdateDestroy
from .recommend.views_recommend import RecommendFullAPIList
from .avto.views_avto import AvtoFullAPIList, AvtoFullAPIListCreate, AvtoFullAPIUpdateDestroy, AvtoFullViewsUserAPIList, \
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy
from .work.views_work import WorkFullAPIList, WorkFullAPIListCreate, WorkFullAPIUpdateDestroy
from .services.views_services import ServicesFullAPIList, ServicesFullAPIListCreate, ServicesFullAPIUpdateDestroy
from .children.views_children import ChildrenFullAPIList, ChildrenFullAPIListCreate, ChildrenFullAPIUpdateDestroy
from .fashion.views_fashion import FashionFullAPIList, FashionFullAPIListCreate, FashionFullAPIUpdateDestroy
from .electronics.views_electronics import ElectronicsFullAPIList, ElectronicsFullAPIListCreate, \
    ElectronicsFullAPIUpdateDestroy
from .house_garden.views_house_garden import HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIList, \
    HouseGardenFullAPIListCreate
from .my_ads.my_ads_views import MyAdsAPIList
from .user_archive.user_archive_views import UserArchiveAPIList

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'StockAPIList',
    'StockAPIUpdateDestroy',
    'CategoryFullAPIList',
    'NewAPIList',
    'CityAPIList',
    'MoneyAPIList',
    'MoneyAPIUpdateDestroy',
    'RecommendFullAPIList',
    'AvtoFullAPIList',
    'AvtoFullAPIListCreate',
    'AvtoFullAPIUpdateDestroy',
    'AvtoFullFavouritesUserAPIList',
    'AvtoFullFavouritesUserAPIUpdateDestroy',
    'WorkFullAPIList',
    'WorkFullAPIListCreate',
    'WorkFullAPIUpdateDestroy',
    'ServicesFullAPIList',
    'ServicesFullAPIListCreate',
    'ServicesFullAPIUpdateDestroy',
    'ChildrenFullAPIList',
    'ChildrenFullAPIListCreate',
    'ChildrenFullAPIUpdateDestroy',
    'ElectronicsFullAPIList',
    'ElectronicsFullAPIListCreate',
    'ElectronicsFullAPIUpdateDestroy',
    'FashionFullAPIList',
    'FashionFullAPIListCreate',
    'FashionFullAPIUpdateDestroy',
    'HouseGardenFullAPIUpdateDestroy',
    'HouseGardenFullAPIList',
    'HouseGardenFullAPIListCreate',
    'MyAdsAPIList',
    'UserArchiveAPIList',
    'AvtoFullViewsUserAPIList',
]
