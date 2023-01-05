from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList
from .recommend.views_recommend import RecommendFullAPIList
from .my_ads.my_ads_views import MyAdsAPIList
from .user_archive.user_archive_views import UserArchiveAPIList

from .realty.views_realty import (
    RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy, RealtyFullViewsUserAPIList,
    RealtyFullFavouritesUserAPIList, RealtyFullFavouritesUserAPIUpdateDestroy
)
from .views_base import (
    CityAPIList, MoneyAPIList, MoneyAPIUpdateDestroy
)
from .avto.views_avto import (
    AvtoFullAPIList, AvtoFullAPIListCreate, AvtoFullAPIUpdateDestroy, AvtoFullViewsUserAPIList,
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy
)
from .work.views_work import (
    WorkFullAPIList, WorkFullAPIListCreate, WorkFullAPIUpdateDestroy, WorkFullViewsUserAPIList,
    WorkFullFavouritesUserAPIList, WorkFullFavouritesUserAPIUpdateDestroy
)
from .services.views_services import (
    ServicesFullAPIList, ServicesFullAPIListCreate, ServicesFullAPIUpdateDestroy, ServicesFullViewsUserAPIList,
    ServicesFullFavouritesUserAPIList, ServicesFullFavouritesUserAPIUpdateDestroy
)
from .children.views_children import (
    ChildrenFullAPIList, ChildrenFullAPIListCreate, ChildrenFullAPIUpdateDestroy,
    ChildrenFullViewsUserAPIList, ChildrenFullFavouritesUserAPIList, ChildrenFullFavouritesUserAPIUpdateDestroy
)
from .fashion.views_fashion import (
    FashionFullAPIList, FashionFullAPIListCreate, FashionFullAPIUpdateDestroy, FashionFullViewsUserAPIList,
    FashionFullFavouritesUserAPIList, FashionFullFavouritesUserAPIUpdateDestroy
)
from .electronics.views_electronics import (
    ElectronicsFullAPIList, ElectronicsFullAPIListCreate,
    ElectronicsFullAPIUpdateDestroy, ElectronicsFullViewsUserAPIList, ElectronicsFullFavouritesUserAPIList,
    ElectronicsFullFavouritesUserAPIUpdateDestroy
)
from .house_garden.views_house_garden import (
    HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIList,
    HouseGardenFullAPIListCreate, HouseGardenFullViewsUserAPIList, HouseGardenFullFavouritesUserAPIList,
    HouseGardenFullFavouritesUserAPIUpdateDestroy
)

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'RealtyFullViewsUserAPIList',
    'RealtyFullFavouritesUserAPIList',
    'RealtyFullFavouritesUserAPIUpdateDestroy',

    'StockAPIList',
    'StockAPIUpdateDestroy',

    'CategoryFullAPIList',

    'NewAPIList',

    'CityAPIList',

    'MoneyAPIList',
    'MoneyAPIUpdateDestroy',

    'RecommendFullAPIList',
    'MyAdsAPIList',
    'UserArchiveAPIList',
    'AvtoFullViewsUserAPIList',

    'AvtoFullAPIList',
    'AvtoFullAPIListCreate',
    'AvtoFullAPIUpdateDestroy',
    'AvtoFullFavouritesUserAPIList',
    'AvtoFullFavouritesUserAPIUpdateDestroy',

    'WorkFullAPIList',
    'WorkFullAPIListCreate',
    'WorkFullAPIUpdateDestroy',
    'WorkFullViewsUserAPIList',
    'WorkFullFavouritesUserAPIList',
    'WorkFullFavouritesUserAPIUpdateDestroy',

    'ServicesFullAPIList',
    'ServicesFullAPIListCreate',
    'ServicesFullAPIUpdateDestroy',
    'ServicesFullViewsUserAPIList',
    'ServicesFullFavouritesUserAPIList',
    'ServicesFullFavouritesUserAPIUpdateDestroy',

    'ChildrenFullAPIList',
    'ChildrenFullAPIListCreate',
    'ChildrenFullAPIUpdateDestroy',
    'ChildrenFullViewsUserAPIList',
    'ChildrenFullFavouritesUserAPIList',
    'ChildrenFullFavouritesUserAPIUpdateDestroy',

    'ElectronicsFullAPIList',
    'ElectronicsFullAPIListCreate',
    'ElectronicsFullAPIUpdateDestroy',
    'ElectronicsFullViewsUserAPIList',
    'ElectronicsFullFavouritesUserAPIList',
    'ElectronicsFullFavouritesUserAPIUpdateDestroy',

    'FashionFullAPIList',
    'FashionFullAPIListCreate',
    'FashionFullAPIUpdateDestroy',
    'FashionFullViewsUserAPIList',
    'FashionFullFavouritesUserAPIList',
    'FashionFullFavouritesUserAPIUpdateDestroy',

    'HouseGardenFullAPIUpdateDestroy',
    'HouseGardenFullAPIList',
    'HouseGardenFullAPIListCreate',
    'HouseGardenFullViewsUserAPIList',
    'HouseGardenFullFavouritesUserAPIList',
    'HouseGardenFullFavouritesUserAPIUpdateDestroy',
]
